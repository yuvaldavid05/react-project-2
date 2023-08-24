import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
    return (
        <nav>
            <ul>
                <li className='icon' onClick={() => navigate("/")}>אייקון</li>
                <li><Link to="/about">אודות</Link></li>

                <input placeholder='חיפוש' />

                <li><Link to="/login">היכנס</Link></li>
                <li><Link to="/signup">להרשמה</Link></li>
                <li className='profile'>פרופיל</li>
            </ul>
        </nav>
    )
}

export default Navbar;