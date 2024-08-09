import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductCard = (props) => {
    const cartItems = useSelector((state) => state.cart.items);
    const isInCart = cartItems.find((el) => el.id === props.item.id);
    const token = useSelector((state) => state.user.token)
    const dispatch = useDispatch();
    const payload = {
        products: [{
            product_id: props.item.id,
            quantity: 1
        }]
    }
    const handleAdd = async () => {
        const res = await axios.post("http://localhost:3000/cart/addToCart", payload, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        console.log(res.data)
        dispatch(addItem(props.item));
    }
    return (
        <>
            <div className="product-card">
                <div>
                    <img src={props.item.image} />
                    <h3>{props.item.title}</h3>
                </div>
                <p>{props.item.description}</p>
                <div style={{ textAlign: "center" }}>
                    <div>Price: ${props.item.price}</div>
                    {isInCart ? (
                        <Link className='but' to='/cart'>Go to Cart</Link>
                    ) : (<button className="but" onClick={handleAdd}>Add to Cart</button>)}
                </div>
            </div>
        </>
    )
}

export default ProductCard;