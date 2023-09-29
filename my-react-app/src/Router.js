import { Route, Routes } from 'react-router-dom';
import Cards from './Navbar/Card/Cards';
import About from './Navbar/about/About';
import FavoriteCards from './Navbar/favoritesCards/FavoriteCards';
import AdminManagement from './Navbar/adminManagement/AdminManagement';
import MyCards from './Navbar/myCards/MyCards';
import CardPage from './Navbar/Card/cardOnePage/CardPage';
import Login from './Navbar/user/Login';
import Signup2 from './Navbar/user/Signup2';
import Account from './Navbar/user/Account';
import AddCard from './Navbar/Card/addedCard/AddCard';
import AdminEditClient from './Navbar/adminManagement/AdminEditClient';
import AdminTable from './Navbar/adminManagement/AdminTable';
import ErrorPage from './Navbar/errorPage/ErrorPage';



function Router() {
    return (
        <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/about" element={<About />} />
            <Route path="/business/cards" element={<MyCards />} />
            <Route path="/cards/favorite" element={<FavoriteCards />} />
            {/* <Route path="/AdminManagement" element={<AdminManagement />} /> */}
            <Route path="/account" element={<Account />} />
            <Route path="/cards/:id" element={<CardPage />} />
            <Route path="/business/cards/:id" element={<AddCard />} />
            <Route path="/admin/clients" element={<AdminTable />} />
            <Route path="/admin/clients/:id" element={<AdminEditClient />} />


            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup2 />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
}

export default Router;