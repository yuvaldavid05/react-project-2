import { Route, Routes } from 'react-router-dom';
import Main from './components/Articles/Articles';
import ArticlePage from './components/Articles/ArticlePage';
import About from './components/Navbar/About/About';
import ErrorPage from './components/Navbar/ErrorPage/ErrorPage';
import Signup from './components/Navbar/Signup/Signup';
import Login from './components/Navbar/Login/Login';


function Router() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
}

export default Router;