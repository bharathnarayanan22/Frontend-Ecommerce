import React from "react";
import styles from "./Header.module.css"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { setCart } from "../redux/cartSlice";
const Header = () => {

    const cartItems = useSelector((state) => state.cart.items);
    // console.log(cartItems);

    useEffect(() => {
        getCartItems();
    },[]);

    const dispatch = useDispatch();

    const getCartItems = async () => {
        const res = await axios.get("http://localhost:3000/cart/getCartItems", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmE4YTUwZDY3MmQ4YzI5ODY4YjhhYzYiLCJpYXQiOjE3MjMxMzAzNDIsImV4cCI6MTcyMzIxNjc0Mn0.sPzDym78E4mAj_DvEImA-uN-tRMAVpL_YrvqbsVW7BA"
            }
        });
        console.log(res.data);
        dispatch(setCart(res.data.products))
    }

    return (
        <>
            <div className={styles.outerHead}>
                <div className={styles.logo}>LOGO</div>
                <div className={styles.headerItems}>
                    <Link to="/">Products</Link>
                    <span>About</span>
                    <Link to="/cart">Cart: {cartItems.length}</Link>
                </div>
            </div>
        </>
    )
}

export default Header;