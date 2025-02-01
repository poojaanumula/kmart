import React from 'react'

const ProductCard = ({products}) => {
  return <article style={{width:'300px',height:'300px',color:'red',background:'orange'}}>
         <h3>{products.title}</h3>
  </article>  
}

export default ProductCard
