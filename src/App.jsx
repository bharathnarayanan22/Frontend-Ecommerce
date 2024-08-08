import React, { useState } from "react"
import { Provider, useDispatch } from "react-redux";
import Products from "./components/Products";
import HomeLayout from "./components/HomeLayout";
import "./App.css"
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  //const [cartList, setCartList] = useState([])
    
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path='/' element={<Products />} />
            <Route path='/cart' element={<Cart/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;