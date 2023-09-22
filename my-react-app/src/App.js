import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './Navbar/NavbarTop';
import FooterNav from './Footer/FooterNav';
import Router from './Router';
import RouterAuth from './RouterAuth';
import React, { useState } from 'react';
import Loader from './compoents/Loader';

export const GeneralContext = React.createContext();

function App() {
    const [user, setUser] = useState();
    const [isLogged, setIsLogged] = useState();
    const [loader, setLoader] = useState(false);


    return (
        <GeneralContext.Provider value={{ user, setUser, isLogged, setIsLogged, setLoader }}>
            <div className="App">
                <header className="App-header">
                    <NavbarTop />
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
