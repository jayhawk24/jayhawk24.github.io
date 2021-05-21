import logo from './logo.svg';
import './App.css';
import Navbar from './components/main/navbar/Navbar';
import Home from './components/pages/home/Home';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
        </div>
    );
}

export default App;
