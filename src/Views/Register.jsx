import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Resources/Css/fondo.css";

export function Register() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        const user = { name, lastName, birthDate, email, password };
        try {
            const response = await axios.post("localhost:3002/user", user);
            console.log(response.data);
            navigate("/login")
        } catch (error) {
            console.error(error)
        }
    }

    function message(e, input) {
        if (e.target.validity.patternMismatch) {
            if (input === "name")
                e.target.setCustomValidity("El nombre solo puede contener letras.");
            else if (input === "lastName")
                e.target.setCustomValidity("El apellido solo puede contener letras.")
            else if (input === "email")
                e.target.setCustomValidity("El correo debe tener un formato valido, Ejemplo: nombre_apellido@gmail.com");
            else
                e.target.setCustomValidity("La contraseña debe contener un minimo de 8 y un máximo de 32 caracteres, debe contener al menos una letra y un numero.");
        } else if (e.target.validity.valueMissing) {
            if (input === "name")
                e.target.setCustomValidity("Por favor, ingresa tu nombre.");
            else if (input === "lastName")
                e.target.setCustomValidity("Por favor, Ingresa tu apellido.");
            else if (input === "email")
                e.target.setCustomValidity("Por favor, ingresa tu correo.");
            else
                e.target.setCustomValidity("Por favor, ingresa tu contraseña.");
        } else {
            e.target.setCustomValidity("");
        }
    }

    return (
        <section>
            <h1 className="text-center text-2xl py-2 text-[white]">
                Registrate
            </h1>
            <form className="flex flex-col justify-center items-center h-[500px]" onSubmit={handleRegister}>
                <div className="pb-4">
                    <label htmlFor="name" className="text-[white] mr-[20px]">Nombre</label>
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="text-[black] rounded"
                        name="name"
                        spellCheck="false"
                        required pattern="^[a-zA-Z ]+$"
                        onInvalid={(e) => { message(e, "name") }}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="pb-4">
                    <label className="text-[white] mr-[20px]" htmlFor="lastName">Apellido</label>
                    <input
                        type="text"
                        placeholder="Apellido"
                        className="text-[black] rounded"
                        name="lastName"
                        spellCheck="false"
                        required pattern="^[a-zA-Z ]+$"
                        onInvalid={(e) => { message(e, "lastname") }}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="pb-4">
                    <label className="text-[white] mr-[26px]" htmlFor="email">Correo</label>
                    <input
                        type="email"
                        placeholder="Correo Electronico"
                        className="text-[black] rounded"
                        name="email"
                        spellCheck="false"
                        required
                        onInvalid={(e) => { message(e, "email") }}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="pb-4">
                    <label className="text-[white] mr-[20px]" htmlFor="birthDate">Fecha Nacimiento</label>
                    <input
                        type="date"
                        name="birthDate"
                        min="1900-01-01" max="2030-12-31"
                        className="text-[black] rounded"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.valueAsNumber)} />
                </div>
                <div className="pb-4">
                    <label className="text-[white] mr-[10px]" htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="text-[black] rounded"
                        name="password"
                        minLength="8"
                        maxLength="20"
                        required
                        onInvalid={(e) => { message(e, "password") }}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="cursor-pointer text-[white] font-black" type="submit">Registrarme</button>
            </form>
        </section>
    )
}