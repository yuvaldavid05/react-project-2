import { Route, Routes } from 'react-router-dom';
import Cards from './Navbar/Card/Cards';
import About from './Navbar/About/About';
import FavoriteCards from './Navbar/FavoritesCard/FavoriteCards';
import AdminManagement from './Navbar/AdminManagement/AdminManagement';
import MyCards from './Navbar/MyCards/MyCards';
import CardPage from './Navbar/Card/CardPage';
import Login from './Navbar/User/Login';
import Signup2 from './Navbar/User/Signup2';
import Account from './Navbar/User/Account';



function Router() {
    return (
        <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-cards" element={<MyCards />} />
            <Route path="/favorite-csards" element={<FavoriteCards />} />
            <Route path="/AdminManagement" element={<AdminManagement />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cards/:id" element={<CardPage />} />


            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup2 />} />
        </Routes>
    );
}

export default Router;