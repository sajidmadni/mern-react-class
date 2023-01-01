// import logo from './logo.svg';
import './App.css';
// import Users from './users.component';
import Header from './components/header.component';
import Footer from './components/footer.component';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// Import redux providers
import { Provider } from 'react-redux';
// import redux store
import { store } from './store/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        
            {/* <BrowserRouter> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
              </Routes>
            {/* </BrowserRouter> */}
          
        <Footer />
      </Provider>
    </>
  );
}

export default App;
