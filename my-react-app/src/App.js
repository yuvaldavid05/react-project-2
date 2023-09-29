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
import AddCard from './Navbar/Card/addedCard/AddCard';
import Snackbar from './compoents/Snackbar';
import Searchbar from './Navbar/Searchbar';



export const GeneralContext = React.createContext();

function App() {
    const [searchWord, setSearchWord] = useState('')
    const [user, setUser] = useState();
    const [isLogged, setIsLogged] = useState();
    const [loader, setLoader] = useState(true);
    const [snackbar, setSnackbar] = useState('');
    const [roleType, setRoleType] = useState(RoleTypes.none);
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    // const [like, setLike] = useState([]);
    // const [addLike, setAddLike] = useState([]);
    // const [likeStatus, setLikeStatus] = useState(false);

    const snackbarOn = text => {
        setSnackbar(text);
        setTimeout(() => setSnackbar(''), 3 * 1000);
    }

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

                snackbarOn(`מחובר ${user.fullName || user.firstName}`)
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
            user, setUser, isLogged, setIsLogged, setLoader, roleType, setRoleType, cards, setCards, snackbarOn, searchWord, setSearchWord
        }}>
            <div className="App">
                <header className="App-header">
                    {/* <NavbarTop /> */}
                    <NavbarTop2 />
                    <Router />
                </header>
                {loader && <Loader />}
                {snackbar && <Snackbar text={snackbar} />}
                <footer className='fot'>
                    <FooterNav />
                </footer>
            </div>


        </GeneralContext.Provider>
    );
}

export default App;
