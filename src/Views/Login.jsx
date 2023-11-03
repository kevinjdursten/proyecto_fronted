import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../Resources/Css/fondo.css"

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Porfavor ingresar usuario y contraseña")
      return;
    }
    axios
      .post("http://localhost:3002/user/login", { email, password })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("role", res.data.role)
          navigate("/home")
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log("Error de respuesta:", err.response.data);
        } else if (err.request) {
          console.log("Error de solicitud:", err.request);
        } else {
          console.log("Error:", err.message);
        }
      });
  };

  return (
    <section className="w-full h-full">
      <div className='flex flex-col justify-center items-center text-[white] w-full h-[525px]'>
        <h3 className="text-center text-xl">Inicia Session</h3>
        <form action="" onSubmit={enviarFormulario}>
          <div className='py-2'>
            <label htmlFor="email" className="pr-[40px]">Email</label>
            <input type="email"
              placeholder="EMAIL"
              name="email"
              className="text-[black] rounded"
              value={email}
              onChange={({ target }) => setEmail(target.value)} />
          </div>
          <div className='py-2'>
            <label htmlFor="password" className="pr-[12px]">Password</label>
            <input type="password"
              placeholder="PASSWORD"
              name="password"
              className="text-[black] rounded"
              value={password}
              onChange={({ target }) => setPassword(target.value)} />
          </div>
          <div className="flex justify-center items-center">
            <input type="submit"
              className="cursor-pointer font-black"
              value="Acceder"
            />
          </div>
        </form>
        <p className="text-right py-4 text-lg">
          No tienes cuenta?<br />
          <Link className="font-black" to="/register">Registrate</Link>
        </p>
      </div>
    </section>
  )
}
