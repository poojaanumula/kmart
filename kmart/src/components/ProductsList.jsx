import React from 'react'
import ProductCard from './ProductCard'

const ProductsList = ({products}) => {
  return <>
  <div style={{display:'flex',gap:'30px'}}>
  {products.map(each=><ProductCard key={each.id} products={each} />)}
  </div>

  </>
}

export default ProductsList
