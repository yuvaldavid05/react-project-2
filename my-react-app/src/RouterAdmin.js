import { Route, Routes } from 'react-router-dom';
import Login from './Navbar/user/Login';
import AdminTable from './Navbar/adminManagement/AdminTable';
import AdminBusinessClient from './Navbar/adminManagement/AdminBusinessClient';




function Router() {
    return (
        <Routes>
            {/* <Route path="/admin-all" element={<AdminTable />} />
            <Route path="/admin-business-card" element={<AdminBusinessClient />} /> */}

        </Routes >
    );
}

export default Router;