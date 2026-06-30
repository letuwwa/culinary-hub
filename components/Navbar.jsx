import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClass = ({isActive}) => isActive ? "active" : ""

    return (
        <>
            <nav>
                <NavLink to="/" className={linkClass}>Home</NavLink>
                <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </nav>
        </>
    )
}