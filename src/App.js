import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div>
     <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
    </div>
  );
}

export default App;
