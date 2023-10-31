import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
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
        <>
            <h1>
                Register
            </h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    spellCheck="false"
                    required pattern="^[a-zA-Z ]+$"
                    onInvalid={(e) => { message(e, "name") }}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="lastName">Apellido</label>
                <input
                    type="text"
                    placeholder="Apellido"
                    name="lastName"
                    spellCheck="false"
                    required pattern="^[a-zA-Z ]+$"
                    onInvalid={(e) => { message(e, "lastname") }}
                    onChange={(e) => setLastName(e.target.value)} />
                <label htmlFor="email">Correo electronico</label>
                <input
                    type="email"
                    placeholder="Correo Electronico"
                    name="email"
                    spellCheck="false"
                    required
                    onInvalid={(e) => { message(e, "email") }}
                    onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="birthDate">Fecha Nacimiento</label>
                <input
                    type="date"
                    name="birthDate"
                    min="1900-01-01" max="2030-12-31"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.valueAsNumber)} />
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    minLength="8"
                    maxLength="20"
                    required
                    onInvalid={(e) => { message(e, "password") }}
                    onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Registrarme</button>
            </form>
        </>
    )
}
export default Register;