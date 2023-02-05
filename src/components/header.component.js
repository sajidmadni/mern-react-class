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
import {  getLoggedInUser, isAuthenticate } from '../app/userSlice';

const Header =  () => {
    const getCartCounter = useSelector(selectCount); 
    const loggedInUser = useSelector(getLoggedInUser);  
    const isLoggedIn = useSelector(isAuthenticate);
    const [cartCounter, setCartCounter] = useState(getCartCounter);

    useEffect( () => {
        setCartCounter(getCartCounter)
    },[getCartCounter])

  return (
    <div>  
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">MERN Demo Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                    </Nav>
                    <Navbar.Text style={{ width: "40%"}}>
                        {
                            isLoggedIn ?
                                <div>
                                    <Nav.Link as={Link} to="/logout" style={{marginLeft: "20px", marginRight: "20px", float: "right"}}>Logout</Nav.Link>
                                    <Nav.Link as={Link} to="/add-product" style={{marginLeft: "50px", paddingRight: "10px", float: "right", borderRight: "2px solid #ccc"}}>Add Product</Nav.Link>
                                    
                                </div>
                            :
                                <div style={{ float: "right" }}>
                                    <Nav.Link as={Link} to="/login" style={{marginLeft: "50px", marginRight: "20px", float: "right"}}>Login</Nav.Link>
                                </div>
                        }
                        
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