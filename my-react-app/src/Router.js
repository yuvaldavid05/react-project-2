import { Route, Routes } from 'react-router-dom';
import Cards from './Navbar/Card/Cards';
import About from './Navbar/About/About';
import FavoriteCards from './Navbar/FavoritesCard/FavoriteCards';
import ClientsAdmin from './Navbar/ClientsAdmin/ClientsAdmin';
import MyCards from './Navbar/MyCards/MyCards';
import CardPage from './Navbar/Card/CardPage';
import Login from './Navbar/User/Login';
import Signup from './Navbar/User/Signup';


function Router() {
    return (
        <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-cards" element={<MyCards />} />
            <Route path="/favorite-cards" element={<FavoriteCards />} />
            <Route path="/clientsAdmin" element={<ClientsAdmin />} />
            <Route path="/cards/:id" element={<CardPage />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default Router;