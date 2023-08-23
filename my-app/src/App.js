import './App.css';
import Router from './Router';
import Header from './components/Header/Header';
import Main from './components/Articles/Articles';
import { HiOutlineCursorArrowRays } from "react-icons/hi2";

function App() {
    return (
        <div>

            <div className="App">

                <Header />
                <Router />
                <div className="frame">

                    <div className='opening'>
                        <div className='left'>
                            <h1>אתר העסקים הגדול</h1>
                        </div>
                        <div className='right'>
                            <HiOutlineCursorArrowRays />
                        </div>
                    </div>
                    <Main />

                </div>
            </div>

        </div>
    );
}

export default App;
