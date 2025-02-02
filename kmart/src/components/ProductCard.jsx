import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({products}) => {
    console.log("LOOking for id..",products.id)
  return <article style={{width:'300px',height:'300px',color:'red',overflow:'hidden'}}>
         <img style={{width:'100%',height:'70%', objectFit:'contain'}} src={products.image} />
         <h3>{products.title}</h3>
         <Link to ={`/product/${products.id}`}>View the product</Link>
        
  </article>  
}
export default ProductCard
