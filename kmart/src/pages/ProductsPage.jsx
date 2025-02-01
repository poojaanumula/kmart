import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../services/project-services'
import { useSearchParams } from 'react-router-dom'
import ProductsList from '../components/ProductsList'
const ProductsPage = () => {
    const [products, setProducts]=useState([])
    const [error,setError]=useState(null)
    useEffect(()=>{
      getAllProducts().then((data)=>{
        setProducts(data)
      }).catch((e)=>{
        setError(e)
      })
    },[])
  return (
    <div>
      <h1>Products Page...</h1>
      <ProductsList products={products} />
    </div>
  )
}

export default ProductsPage
