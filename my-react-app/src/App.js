import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './navbar/NavbarTop';
import Cards from './card/Cards';
import FooterNav from './footer/FooterNav';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarTop />
        <h1>מרכז העסקים שלי</h1>
      </header>
      <main>

        <Cards />

      </main>

      <footer>
        <FooterNav />
      </footer>
    </div>
  );
}

export default App;
