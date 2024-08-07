import React from "react";
import styles from "./Header.module.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {

    const cartItems = useSelector((state) => state.cart.items);
    // console.log(cartItems);
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