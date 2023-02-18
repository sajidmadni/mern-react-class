// import logo from './logo.svg';
import React, { Suspense } from 'react';
import './App.css';
import Header from './components/header.component';
import Footer from './components/footer.component';
// import Home from './pages/home';
// import AboutUs from './pages/about-us';
// import Login from './pages/login';
import Logout from './components/logout.component';
import { Routes, Route } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'

const Home = React.lazy(() => import('./pages/home'))
const AboutUs = React.lazy(() => import('./pages/about-us'))
const Login = React.lazy(() => import('./pages/login'))

function App() {

  return (
    <div className="App">
      <Header />
        <Suspense fallback={<div className='center'><RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Suspense>
      <Footer />
    </div>
  );
}

export default App;
