import React, { useState } from "react";
import { PRODUCTS } from "../constants";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect } from "react";

const Products = (props) => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        getProducts();
    },[]);

    const getProducts = async () => {
        // const res = await axios.get("https://fakestoreapi.com/products");
        const res = await axios.get("http://localhost:3000/products");
        console.log(res.data);
        setProductList(res.data);
    }
    return(
        <>
        <div className="products">
            {productList.map((product) => (
                <ProductCard key={product.id} item={product} setCart={props.setCart}/>
            ))}
        </div>
        </>
    )
}

export default Products;