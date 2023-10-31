import { Link } from "react-router-dom";
import axios from "axios";

const NavbarAuth = () => {

    const handleLogout = async () => {
        try {
            localStorage.removeItem("token");
            localStorage.removeItem("info");
            window.location.href = '/';
            await axios.post("http://localhost:3002/user/logout");
        } catch (error) {
            console.log(error);
        }
    }

    const linksUser = {
        Home: "/home",
        Car: "/car",
        Pay: "/Pay"
    }
    return (
        <>
            <nav>
                <ul className="flex justify-center items-center gap-10 w-full h-[45px] bg-[fuchsia]">
                    <li>
                        <Link to={linksUser.Home}>Home</Link>
                    </li>
                    <li>
                        <Link to={linksUser.Car}>Car</Link>
                    </li>
                    <li>
                        <Link to={linksUser.Pay}>Pay</Link>
                    </li>
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </ul>
            </nav>
        </>
    )
}

export default NavbarAuth;