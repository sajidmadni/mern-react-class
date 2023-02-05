import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from 'react-redux';
import {  loggedInUser } from '../app/userSlice';

const Login =  () => {
    const [validated, setValidated] = useState(false);
    const [ errors, setErrors ] = useState([])
    const [file, setFile] = useState();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [ formDataValues, setFormDataValues ] = useState({
        email: '',
        password: ''
    })

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        // console.log(form.checkValidity())
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        event.preventDefault();
        const formData = new FormData();
        formData.append("email", formDataValues.email);
        formData.append("password", formDataValues.password);
        formData.append("image", file);
        // console.log(formData.get('email'))

        fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify(formDataValues)
            body: formData
        })
        .then(res => {
            if (res.ok) {
                res.json().then((data) => {
                    console.log("response is ok")
                    // console.log(data)
                    // console.log(data.user)
                    if(data.user && data.user.length === 0){
                        console.log("User not found.")
                    } else {
                        console.log("User found.")
                        dispatch(loggedInUser(data.user))
                        navigate("/");               
                    }
                })
                               
            } else {
                res.json().then(errorResponse => setErrors(errorResponse.errors))
            }
        })
    };

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormDataValues({...formDataValues, [key]: value})
    }

  return (
    <div>
        <Container>
            <Row className='mt-30'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <div className="form-group">
                            <input type="file" name='image' accept="image/*" onChange={handleFileChange} />
                        </div>
                        {errors.length > 0 ? <div className="error-container">{errors.map(error => <p className="error" key={error}>{error}</p>)}</div> : <div></div>}
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>              
            </Row>
        </Container>
    </div>    
  )
}

export default Login;