import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getProducts, setProducts, setProducts2 } from '../store/product.action';

const Home =  () => {
    const dispatch = useDispatch();
    const [currentProducts, setCurrentProducts] = useState([]);
    // dispatch(setProducts2())
    
    // dispatch(setProducts(productsObj));

    useEffect(() =>{
        console.log("API UseEffect fired!!!")
        fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then((data) => {
            console.log("Get data from API")
            console.log(data.products)
            setCurrentProducts(data.products);
            // const allProductObjects = Object.assign({}, ...data.products);
            // console.log(allProductObjects)
            dispatch(setProducts(data.products))

        })
    }, []);

        
  return (
    <div>
        <Container>
            <Row className='mt-30'>
                {
                    currentProducts.map( product => {
                        return <Col key={product.id} sm="3">
                                    <Card  style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={product.thumbnail} style={{height: "200px", width: "auto"}} />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>{product.description}</Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>      
                    })
                }                
            </Row>
        </Container>
    </div>    
  )
}

export default Home;
