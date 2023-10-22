import { Link } from "react-router-dom";
function Navbar() {
    const links = {
        Home: "/",
        About: "/about",
        Login: "/login",
        Register: "/register"
    }

    return (
        <>
            <nav>
                <ul className="flex justify-center items-center gap-10 w-full h-[45px] bg-[fuchsia]">
                    <li>
                        <Link to={links.Home}>Home</Link>
                    </li>
                    <li>
                        <Link to={links.About}>About</Link>
                    </li>
                    <li>
                        <Link to={links.Login}>Login</Link>
                    </li>
                    <li>
                        <Link to={links.Register}>Register</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;