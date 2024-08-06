import React, { useState } from "react"
import { Provider } from "react-redux";
import Header from "./components/Header";
import Products from "./components/Products";
import "./App.css"
import store from "./redux/store";

const App = () => {
  const [cart, setCart] = useState([])
  return (
    <Provider store={store}>
      <Header cartLength={cart.length} />
      <Products setCart={setCart} />
    </Provider>
  )
}

export default App;