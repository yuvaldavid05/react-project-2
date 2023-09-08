import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default Router;