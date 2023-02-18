import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// Redux
import { useDispatch } from 'react-redux';
import {  logoutUser } from '../app/userSlice';

const Logout =  () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logoutUser())
        navigate("/");
    }, []);
}

export default Logout;



