import './Header.css';
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { useNavigate } from "react-router-dom";
import NavbarBusiness from '../Navbar/NavbarBusiness';
import NavbarAdmin from '../Navbar/NavbarAdmin';
import NavbarConnected from '../Navbar/NavbarConnected';

export default function Header() {
    const navigate = useNavigate();
    return (

        <div className='Header'>
            {/* <div className='icon' onClick={() => navigate("/")}>אייקון</div> */}
            <Navbar />

            {/* <div>
                <ul>
                <li><Link to="/login">היכנס</Link></li>
                <li><Link to="/signup">להרשמה</Link></li>
                </ul>
            </div> */}

            {/* <input placeholder='חיפוש' />
            <div className='profile'>פרופיל</div> */}


            {/* <p>
                מחובר
                <NavbarConnected />
            </p>
            <p>
                עיסקי
                <NavbarBusiness />
            </p>

            <p>
                אדמיין
                <NavbarAdmin />
            </p> */}
        </div >
    );
}