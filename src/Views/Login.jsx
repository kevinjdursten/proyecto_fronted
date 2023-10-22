import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
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
          if (res.data.info.role === "user") {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("info", res.data.info)
            navigate("/home");
          } else if (res.data.info.role === "admin") {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("info", res.data.info)
            navigate("/admin");
          } else {
            console.log(res.data.message);
          }
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
    <>
      <div className='login template d-flex justify center align-items-center 100-w vh-100 bg-primary'>
        <div className="50-w p-5 rounded bg-white"></div>
        <h3 className="text-center">registrate</h3>
        <form action="" onSubmit={enviarFormulario}>
          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input type="email"
              placeholder="EMAIL"
              name="email"
              className="form-control"
              value={email}
              onChange={({ target }) => setEmail(target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input type="password"
              placeholder="PASSWORD"
              name="password"
              className="form-control"
              value={password}
              onChange={({ target }) => setPassword(target.value)} />
          </div>
          <div>
            <input type="submit"
              className=""
              value="Acceder"
            />
          </div>
        </form>
        <p className="text-right">
          Don't have an account?
          forgot password sign up
        </p>
      </div>
    </>
  )
}



export default Login;