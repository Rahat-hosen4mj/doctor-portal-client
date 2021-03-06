import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Navbar from './pages/Shared/Navbar';
import Signup from './pages/Login/Signup';
import RequireAuth from './pages/Shared/RequireAuth';
import Appointment from './pages/Appointment/Appointment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReview from './pages/Dashboard/MyReview';
import MyHistory from './pages/Dashboard/MyHistory';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
     <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/appointment" element={<RequireAuth>
        <Appointment />
      </RequireAuth>}></Route>

      <Route path="/dashboard" element={<RequireAuth>
        <Dashboard />
      </RequireAuth>}>
      <Route index element={<MyAppointment></MyAppointment>}></Route>
      <Route path='myReview' element={<MyReview></MyReview>} ></Route>
      <Route path='history' element={<MyHistory />} ></Route>
      </Route>

      <Route path="/about" element={
        <RequireAuth><About /></RequireAuth>
      }></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>

    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
