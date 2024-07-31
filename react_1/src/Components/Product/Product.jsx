import React, { useState } from 'react'

export const Product = (props) => {
    // console.log(props.products);
    // const products = props.products;
    // console.log(products)

    const [price,setPrice]=useState(10);

    const priceHandle = () =>{
       const newPrice = price+1;
        setPrice(newPrice)
    }
    const d=()=>{
        const newPrice = price-1;
        setPrice(newPrice)
    }
  return (
    <div>
        {/* <p>Product : {props.products[0]}</p>
        <p>Product : {props.products[1]}</p> */}
        
        {/* {products.map((product, index) => (
                <p key={index}>Product: {product}</p>
            ))} */}


            <p>Price: { price }</p>
            <p>Price: { price }</p>
            <p>Price: { price }</p>
            <button onClick={ priceHandle }>Increase</button> &nbsp;
            <button onClick={ d }>Decrease</button>
        

    </div>
  )
}
