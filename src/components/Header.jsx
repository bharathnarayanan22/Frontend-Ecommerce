import React from "react";
import styles from "./Header.module.css"
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { setCart } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { removeToken } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {

    const cartItems = useSelector((state) => state.cart.items);
    // console.log(cartItems);
    const token = useSelector((state) => state.user.token);

    useEffect(() => {
        if(token){
        getCartItems();
        }
    },[token]);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const getCartItems = async () => {
        const res = await axios.get("http://localhost:3000/cart/getCartItems", {
            headers: {
                Authorization:`Bearer ${token}`
            }
        });
        console.log(res.data);
        dispatch(setCart(res.data.products))
    }

    const handleLogout=async()=>{
        localStorage.removeItem("token");
        dispatch(removeToken(token));
        await toast.success("Logged Out Successfully!");
    }

    return (
        <>
            <div className={styles.outerHead}>
                <div className={styles.logo}>LOGO</div>
                <div className={styles.headerItems}>
                    <Link to="/" style={{paddingTop:"0px", paddingBottom:"0px", margin:"0px"}}>Products</Link>
                    <Link to='' style={{paddingTop:"0px", paddingBottom:"0px", margin:"0px"}}>About</Link>
                    <Link to="/cart" style={{paddingTop:"0px", paddingBottom:"0px", margin:"0px"}}>Cart: {cartItems.length}</Link>
                    {token? (
                        <Link to="/" style={{paddingTop:"0px", paddingBottom:"0px", margin:"0px"}} onClick={handleLogout} >Logout</Link>
                    ): (
                        <Link to="/login" style={{paddingTop:"0px", paddingBottom:"0px", margin:"0px"}}>Login</Link>
                    )}
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Header;