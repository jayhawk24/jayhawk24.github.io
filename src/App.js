import './App.css';
import Navbar from './components/main/navbar/Navbar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/about';
import Projects from './components/pages/projects/projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
