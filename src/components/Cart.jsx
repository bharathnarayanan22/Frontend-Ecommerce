import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems);
    return (
        <div className="cartItems">
            <div className="cart">
                {cartItems.map((product) => (
                    <CartCard key={product.id} item={product} />
                ))}
            </div>
            <div className="priceDetails">
                <div>Price details</div>
                <hr />
                <div>Shopping Price: $10000</div>
                <div>(5 items)</div>
                <div>Delivery Price: $200</div>
                <hr />
                <div>Total: $10200</div>
            </div>
        </div>
    )
}

export default Cart;
