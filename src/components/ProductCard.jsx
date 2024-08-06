import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ProductCard = (props) => {
    const dispatch = useDispatch();
    const handleAdd = () => {
        console.log("Added to cart:", props.item);
        // props.setCart((prev) => [...prev, props.item])
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
                    <button onClick={handleAdd}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard;