import React, { useState } from "react"
import { Provider } from "react-redux";
import Products from "./components/Products";
import HomeLayout from "./components/HomeLayout";
import "./App.css"
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

const App = () => {
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