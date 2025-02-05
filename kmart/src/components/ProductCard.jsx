import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({products}) => {
    console.log("Looking for id..",products.id)
  return <article 
  style=
  {{
    width:'250px',height:'330px',padding:'10px',color:'red',
    overflow:'hidden', display:'flex', 
    flexDirection:'column', justifyContent:'center', alignItems:'center', background:'white',
    boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.2)'
    }}>

         <img style={{width:'70%',height:'50%', objectFit:'contain'}} src={products.image} />
         <h3 style={{fontSize:'13px', padding:'10px', fontFamily:'cursive', color:'black'}}>{products.title}</h3>
         <Link to ={`/product/${products.id}`} style={{width:'100px', background:'red', padding:'10px', color:'white', textAlign:'center', textDecoration:'none', borderRadius:'10px', marginBottom:'20px', marginTop:'15px'}}>Shop Now</Link>
        
  </article>  
}
export default ProductCard
