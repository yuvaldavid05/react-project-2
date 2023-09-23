import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './Navbar/NavbarTop';
import NavbarTop2 from './Navbar/NavbarTop2';
import FooterNav from './Footer/FooterNav';
import Router from './Router';
import RouterAuth from './RouterAuth';
import React, { useState } from 'react';
import Loader from './compoents/Loader';
import { RoleTypes } from './Navbar/NavbarTop2';


export const GeneralContext = React.createContext();

function App() {
    const [user, setUser] = useState();
    const [isLogged, setIsLogged] = useState();
    const [loader, setLoader] = useState(false);
    const [roleType, setRoleType] = useState(RoleTypes.none);



    return (
        <GeneralContext.Provider value={{ user, setUser, isLogged, setIsLogged, setLoader, roleType, setRoleType }}>
            <div className="App">
                <header className="App-header">
                    {/* <NavbarTop /> */}
                    <NavbarTop2 />
                    <Router />
                </header>

                {loader && <Loader />}
                <footer className='fot'>
                    <FooterNav />
                </footer>
            </div>


        </GeneralContext.Provider>
    );
}

export default App;
