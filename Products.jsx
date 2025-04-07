import React from "react";

function Products({name, price}) {
    return(
        <div>
            <p>Product name: {name}</p>
            <p>Product price: {price}</p>
            <button>Add to cart</button>
            <button>Remove from cart</button>
            <button>Buy Now</button>
        </div>
    );
}
export default Products;