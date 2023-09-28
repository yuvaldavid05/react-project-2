import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './Navbar/NavbarTop';
import NavbarTop2 from './Navbar/NavbarTop2';
import FooterNav from './Footer/FooterNav';
import Router from './Router';
import RouterAuth from './RouterAuth';
import React, { useEffect, useState } from 'react';
import Loader from './compoents/Loader';
import { RoleTypes } from './Navbar/NavbarTop2';
import { useNavigate } from 'react-router-dom';
import ModalFullscreen from './Navbar/Card/addedCard/AddCard2';
import AddCard from './Navbar/Card/addedCard/AddCard';


export const GeneralContext = React.createContext();

function App() {
    const [user, setUser] = useState();
    const [isLogged, setIsLogged] = useState();
    const [loader, setLoader] = useState(true);
    const [roleType, setRoleType] = useState(RoleTypes.none);
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`https://api.shipap.co.il/clients/login`, {
            credentials: 'include',
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.text().then(x => {
                        throw new Error(x);
                    });
                }
            })
            .then(data => {
                setUser(data);
                setRoleType(RoleTypes.user);

                if (data.business) {
                    setRoleType(RoleTypes.business);
                } else if (data.admin) {
                    setRoleType(RoleTypes.admin);
                }

                console.log(data);
            })
            .catch(err => {
                setRoleType(RoleTypes.none);
                navigate('/');

            })
            .finally(() => setLoader(false));
    }, [])

    return (
        <GeneralContext.Provider value={{
            user, setUser, isLogged, setIsLogged, setLoader, roleType, setRoleType, cards,
            setCards
        }}>
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
