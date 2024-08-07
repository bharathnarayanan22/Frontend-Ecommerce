import React from "react";

const CartCard = (props) => {
    const { item } = props
    return (
            <div className="cart-card">
                <img src={item.image} />
                <div>
                    <div className="title">{item.title}</div>
                    <div className="quantity">
                        <button>-</button>
                        &nbsp;{item.quantity || 1}&nbsp;
                        <button>+</button>
                    </div>
                    <div className="price">${item.price}</div>
                </div>
            </div>
    )
}
export default CartCard;