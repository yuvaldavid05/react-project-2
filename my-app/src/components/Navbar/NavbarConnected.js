import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/about">אודות</Link></li>
                <li><Link to="/fav-card">כרטיסים מועדפים</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;