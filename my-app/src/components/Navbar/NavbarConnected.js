import './Navbar.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { TfiBriefcase } from "react-icons/tfi";
import { FcBusinessman } from "react-icons/fc";
import { TbMoonFilled } from "react-icons/tb";
import { useState } from 'react';

function NavbarConnected() {
    const [invert, setInvert] = useState(false);
    const navigate = useNavigate();


    function changeInvertColor() {
        if (!invert) {
            document.querySelector('html').style.filter = "invert(2)";
            setInvert(true);
        } else if (invert) {
            document.querySelector('html').style.filter = "initial";
            setInvert(false);
        }
    }

    return (

        <nav>
            <ul>
                <li onClick={() => navigate("/")}>
                    <TfiBriefcase className="icon" style={{ fontSize: "2.5em" }} />
                </li>
                <li><Link to="/about">אודות</Link></li>
                <li style={{ marginRight: "auto" }}><Link to="/fav-card">כרטיסים מועדפים</Link></li>


                <li>
                    <div className="inputDiv">
                        <button><CiSearch /></button>
                        <input placeholder='חיפוש' />

                    </div>
                </li>

                <li className='moon'>
                    <TbMoonFilled onClick={changeInvertColor} />
                </li>
                <li className='profile'>
                    <FcBusinessman />
                </li>
            </ul>
        </nav>
    )
}

export default NavbarConnected;