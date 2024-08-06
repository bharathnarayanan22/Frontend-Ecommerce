import React from "react";
import styles from "./Header.module.css"
import { useSelector } from "react-redux";

const Header = () => {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);
    return (
        <>
            <div className={styles.outerHead}>
                <div className={styles.logo}>LOGO</div>
                <div className={styles.headerItems}>
                    <span>Products</span>
                    <span>About</span>
                    <span>Cart: {cartItems.length}</span>
                </div>
            </div>
        </>
    )
}

export default Header;