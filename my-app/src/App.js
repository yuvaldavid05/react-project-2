import './App.css';
import Router from './Router';
import Header from './components/Header/Header';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App() {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <div>
                <div className="App">
                    <div className="frame">
                        <Header />
                        <Router />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
