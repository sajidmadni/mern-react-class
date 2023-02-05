// import logo from './logo.svg';
import './App.css';
import Header from './components/header.component';
import Footer from './components/footer.component';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';

function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
