import React from "react";
import { PRODUCTS } from "../constants";
import ProductCard from "./ProductCard";

const Products = (props) => {
    return(
        <>
        <div className="products">
            {PRODUCTS.map((product) => (
                <ProductCard key={product.id} item={product} setCart={props.setCart}/>
            ))}
        </div>
        </>
    )
}

export default Products;