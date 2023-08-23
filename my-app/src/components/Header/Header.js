import './Header.css';
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import NavbarBusiness from '../Navbar/NavbarBusiness';
import NavbarAdmin from '../Navbar/NavbarAdmin';
import NavbarConnected from '../Navbar/NavbarConnected';

export default function Header() {
    return (
        <div className='Header'>
            <p className='icon'>אייקון</p>
            <Navbar />

            <input placeholder='חיפוש' />

            <div>
                <ul>
                    <li><Link to="/login">היכנס</Link></li>
                    <li><Link to="/signup">להרשמה</Link></li>
                </ul>
            </div>
            <div className='profile'>פרופיל</div>

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
        </div>
    );
}