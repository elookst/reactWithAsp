import BurgerMenu from './BurgerMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

function App() {

    return (
        <BrowserRouter>
            <div id="top-menu">
                <a id="home" href="/">Home</a>
                <a id="about" href="/about">About</a>
                <a id="menu" href="/menu">Menu</a>
                <a id="contact" href="/contact">Contact</a>
            </div>
            <BurgerMenu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu /> }/>
                <Route path="/contact" element={<Contact /> } />
            </Routes>
        </BrowserRouter>
            
            
        
    );
}

export default App;