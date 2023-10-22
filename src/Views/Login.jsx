
function Login() {
    return (
        <div className='login template d-flex justify center align-items-center 100-w vh-100 bg-primary'>
        <div className="50-w p-5 rounded bg-white"></div>
         <h3 className="text-center">registrate</h3>
         <div className='mb-2'> 
         <label htmlFor="email">email</label>
         <input type="email" placeholder="enter email" className="form-control"></input>
        </div>
        <div>
          <input type="checkbox" classname='custom-control custom-checkbox' id="check"></input>
          <label htmlFor="check" className="custom-input-label ms-2">
            Remember me
          </label>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-right">
            Don't have an account?
            forgot <a href="">password</a><a href="">sign up</a>
          </p>

        <>
            <h1>
                Login
            </h1>
        </>
    )
}



export default Login;