import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({products}) => {
  return <>
  <div style={{display:'flex',gap:'30px', width:'80%', justifyContent:'center', alignItems:'center', margin: 'auto', marginTop:'6%', padding:'20px', flexWrap:'wrap'}}>
  {products.map(each=><ProductCard key={each.id} products={each} />)}
  </div>
  </>
}
export default ProductsList
