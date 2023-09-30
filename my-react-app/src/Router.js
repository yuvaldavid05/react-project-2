import { Route, Routes } from 'react-router-dom';
import Cards from './Pages/Card/Cards';
import About from './Pages/about/About';
import FavoriteCards from './Pages/favoritesCards/FavoriteCards';
import MyCards from './Pages/myCards/MyCards';
import CardPage from './Pages/Card/cardOnePage/CardPage';
import Login from './Pages/user/Login';
import Signup from './Pages/user/Signup';
import AddCard from './Pages/Card/addedCard/AddCard';
import AdminTable from './Pages/adminManagement/AdminTable';
import ErrorPage from './Pages/errorPage/ErrorPage';



function Router() {
    return (
        <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/about" element={<About />} />
            <Route path="/business/cards" element={<MyCards />} />
            <Route path="/cards/favorite" element={<FavoriteCards />} />
            <Route path="/cards/:id" element={<CardPage />} />
            <Route path="/business/cards/:id" element={<AddCard />} />
            <Route path="/admin/clients" element={<AdminTable />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
}

export default Router;