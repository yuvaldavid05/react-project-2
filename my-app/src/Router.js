import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import ArticlePage from './components/Main/ArticlePage';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
}

export default Router;