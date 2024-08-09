import React, { useState } from "react"
import { Provider, useDispatch } from "react-redux";
import Products from "./components/Products";
import Register from "./components/Register";
import HomeLayout from "./components/HomeLayout";
import "./App.css"
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setToken } from "./redux/userSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    const token = localStorage.getItem('token');
    dispatch(setToken(token))
  }, [])
    
  return (
    // <Provider store={store}>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path='/' element={<Products />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='login' element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    // </Provider>
  )
}

export default App;