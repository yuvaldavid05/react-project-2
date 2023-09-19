import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './Navbar/NavbarTop';
import FooterNav from './Footer/FooterNav';
import Router from './Router';
import React, { useState } from 'react';

const GeneralContext = React.createContext();

function App() {
    const [user, setUser] = useState();

    return (
        <GeneralContext.Provider value={{ user, setUser }}>
            <div className="App">
                <header className="App-header">
                    <NavbarTop />
                    <Router />
                </header>

                <footer className='fot'>
                    <FooterNav />
                </footer>
            </div>
        </GeneralContext.Provider>
    );
}

export default App;
