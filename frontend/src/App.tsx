import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './pages/global/Footer';
import Navbar from './pages/global/Navbar';

const Home = lazy(() => import('./pages/Home/Home'))
const Login = lazy(() => import('./pages/Login/Login'))
const Register = lazy(() => import('./pages/Register/Register'))

function App() {
  return (
    <div className='app'>
      <Suspense fallback={<div>...loading</div>}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
