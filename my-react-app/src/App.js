import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './Navbar/NavbarTop';
import FooterNav from './Footer/FooterNav';
import Router from './Router';



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavbarTop />
                <Router />
            </header>

            <footer className='fot'>
                <FooterNav />
            </footer>
        </div>
    );
}

export default App;
