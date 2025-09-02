import React from 'react'

function Product({ productName, price, inStock }) {
    return (
        <>
            <h1>Product Info</h1>
            <p>Product Name: {productName}</p>
            <p>Product Price: ${price}</p>
            <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
        </>
    )
}

export default Product