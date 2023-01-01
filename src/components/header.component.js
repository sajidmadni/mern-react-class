import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Redux
import { useSelector } from 'react-redux';
import { 
    selectCount
} from '../app/productsSlice';


const Header =  () => {
    const getCartCounter = useSelector(selectCount);    
    const [cartCounter, setCartCounter] = useState(getCartCounter);

    useEffect( () => {
        setCartCounter(getCartCounter)
    },[getCartCounter])

  return (
    <div>  
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="">MERN Demo Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        Cart Counter <span style={{color: "red", fontSize: "16px", fontWeight: "bold"}}>{cartCounter}</span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
    </div>
  )
}

export default Header;