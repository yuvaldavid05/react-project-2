import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/about">אודות</Link></li>
                {/* <li><Link to="/login">היכנס</Link></li>
                <li><Link to="/signup">להרשמה</Link></li> */}
            </ul>
        </nav>
    )
}

export default Navbar;