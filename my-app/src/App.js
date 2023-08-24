import './App.css';
import Router from './Router';
import Header from './components/Header/Header';

function App() {
    return (
        <div>
            <div className="App">
                <div className="frame">
                    <Header />
                    <Router />
                </div>
            </div>
        </div>
    );
}

export default App;
