import { Route, Routes } from 'react-router-dom';
import Cards from './Card/Cards';
import About from './Navbar/About/About';
import FavoriteCards from './Navbar/FavoritesCard/FavoriteCards';
import ClientsAdmin from './Navbar/ClientsAdmin/ClientsAdmin';
import MyCards from './Navbar/MyCards/MyCards';


function Router() {
    return (
        <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-cards" element={<MyCards />} />
            <Route path="/favorite-cards" element={<FavoriteCards />} />
            <Route path="/clientsAdmin" element={<ClientsAdmin />} />
        </Routes>
    );
}

export default Router;