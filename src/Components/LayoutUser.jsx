import NavbarAuth from "./NavbarAuth";

function LayoutUser({ children }) {
    return (
        <>
            <NavbarAuth />
            {children}
        </>
    )
}
export default LayoutUser;