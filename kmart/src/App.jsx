import React, { useEffect } from 'react'
import ApiData from './components/ApiData';
import { getAllProducts } from './services/project-services';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
const App = () => {
  useEffect(()=>{
    getAllProducts().then((data)=>console.log(data))
  },[])
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<ProductsPage />} />
      </Routes>
      </BrowserRouter>
      {/* <ApiData /> */}
    </div>
  )
}

export default App
