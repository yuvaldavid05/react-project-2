import './Header.css';
import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import NavbarBusiness from '../Navbar/NavbarBusiness';
import NavbarAdmin from '../Navbar/NavbarAdmin';
import NavbarConnected from '../Navbar/NavbarConnected';

export default function Header() {

    return (

        <div className='Header'>
            <Navbar />





            {/* <NavbarConnected /> */}


            {/* <NavbarBusiness /> */}

            {/* <NavbarAdmin /> */}

        </div >
    );
}