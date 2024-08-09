import { useSelector } from "react-redux";
import React from 'react'

const CartCheckout = () => {
  const deliveryPrice = 70;
    const cartItems = useSelector((state)=>state.cart.items);
  const totalPrice = cartItems.reduce((acc,item)=> acc + item.price + deliveryPrice,0);
  const orderDate = new Date();
  const deliveryDays = 7;
  
  const deliveryDate = new Date(orderDate);
  deliveryDate.setDate(orderDate.getDate() + deliveryDays);
  const orderDateString = orderDate.toLocaleDateString();
  const deliveryDateString = deliveryDate.toLocaleDateString();
  return (
    <div className='cart-checkout'>
      <p>Price: $ {totalPrice}</p>
      <p>Items: {cartItems.length}</p>
      <p>Delivery Price: $ {deliveryPrice}</p>
      <div><p>Order Date: {orderDateString}</p>
      <p>Delivery Date: {deliveryDateString}</p></div>
      <button>Checkout</button>
      </div>
  )
}

export default CartCheckout