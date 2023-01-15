import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
// Redux
import { useSelector, useDispatch } from 'react-redux';
// import { usersAsync } from '../app/userSlice';
import { 
    productsAsync, 
    selectProducts,
    increment
} from '../app/productsSlice';


const Home =  () => {
    const getInitialProducts = useSelector(selectProducts);
    
    const [currentProducts, setCurrentProducts] = useState([]);
    const dispatch = useDispatch();
    // dispatch(usersAsync())
    const getProducts = localStorage.getItem("product")
    console.log("Get local storage data");
    const parseData = JSON.parse(getProducts)
    console.log(getProducts)
    console.log(parseData)
    // parseData.map()

    useEffect(() =>{
        // console.log("API UseEffect fired!!!")
        // fetch("https://dummyjson.com/products")
        // .then(response => response.json())
        // .then((data) => {
        //     console.log("Get data from API")
        //     console.log(data.products)
        //     setCurrentProducts(data.products);
            
        // })
        dispatch(productsAsync())
        console.log("Get local storage items");
        const prodObj = {
            brand: "New Value",
            category: "Test One",
            description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
            discountPercentage: 4.09,
            id: 31,
            images: ["https://i.dummyjson.com/data/products/17/1.jpg", "https://i.dummyjson.com/data/products/17/2.jpg"],
            price: 12,
            rating: 4.52,
            stock: 78,
            thumbnail: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
            title: "Tree Oil 30ml"
        };
        localStorage.setItem("product", JSON.stringify(prodObj));
        localStorage.setItem("test", "abc");
    }, []);

    useEffect(() =>{
        setCurrentProducts(getInitialProducts)
    }, [getInitialProducts]);

    const addToCart = () => {
        // Update cart counter state
        dispatch(increment())
        console.log("Click to add cart")
    }
        

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
                                            <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
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