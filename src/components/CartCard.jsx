import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const CartCard = (props) => {
    const { item, cartData } = props
    const token = useSelector(state => state.user.token);
    console.log(cartData);


    let initialQuantity = 1;
    if (cartData && cartData.products && cartData.products.length > 0) {
        for (const product of cartData.products) {
            if (product.product_id === item.product_id) {
                console.log(product.quantity)
                initialQuantity = product.quantity;
                break;
            }
        }
    }
    console.log(initialQuantity);
    const [quantity, setQuantity] = useState(initialQuantity);

    const incrementItem = async () => {
        console.log(item.product_id)
        const payload = {
            products: [{
                product_id: props.item.product_id,
                quantity: quantity + 1,
            }]
        }
        await axios.post("http://localhost:3000/cart/addToCart", payload, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });

        setQuantity(quantity + 1);
        console.log(quantity)
        // console.log(res.data)
    }

    const decrementItem = async () => {
        if (quantity > 1) {
            const payload = {
                products: [{
                    product_id: props.item.product_id,
                    quantity: quantity - 1,
                }]
            }
            const res = await axios.post("http://localhost:3000/cart/addToCart", payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            setQuantity(quantity - 1);
            console.log(res.data)
        }
    }

    return (
        <div className="cart-card">
            <img src={item.image} />
            <div>
                <div className="title">{item.title}</div>
                <div className="quantity">
                    <button style={{ padding: '0px', backgroundColor: "#fff", fontSize: "20px" }} onClick={decrementItem}>-</button>
                    &nbsp;{quantity}&nbsp;
                    <button style={{ padding: '0px', backgroundColor: "#fff", fontSize: "20px" }} onClick={incrementItem}>+</button>
                </div>
                <div className="price">${item.price}</div>
            </div>
        </div>
    )
}

export default CartCard;