import './App.css';
import AppNavbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Piano from './components/Piano';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/ReactApp/home" element={<Home />} />
        <Route path="/ReactApp/piano" element={<Piano/>} />
        <Route path="/ReactApp/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
