import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">בית</Link></li>
                <li><Link to="/about">אודות</Link></li>
                <li><Link to="/fav-card">כרטיסים מועדפים</Link></li>
                <li><Link to="/my-cards">הכרטיסים שלי</Link></li>
                <li><Link to="/sendbox"> תיבת מיילים</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;