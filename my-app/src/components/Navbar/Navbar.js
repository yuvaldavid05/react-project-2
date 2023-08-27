import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HiOutlineMagnifyingGlassCircle } from "react-icons/hi2";


function Navbar() {
    const navigate = useNavigate();
    return (
        <nav>
            <ul>
                <li className='icon' onClick={() => navigate("/")}>אייקון</li>
                <li><Link to="/about">אודות</Link></li>

                <div className="inputDiv">
                    <input placeholder='חיפוש' />
                    <HiOutlineMagnifyingGlassCircle />

                </div>

                <li><Link to="/login">היכנס</Link></li>
                <li><Link to="/signup">להרשמה</Link></li>
                <li className='profile'>פרופיל</li>
            </ul>
        </nav>
    )
}

export default Navbar;