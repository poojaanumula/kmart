// import React, { useEffect } from 'react'
// import { getAllProducts } from './services/project-services';
// import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import ProductsPage from './pages/ProductsPage';
// import ProductDetail from './components/ProductDetail';
// import ProductContextProvider from './context/ProductContextProvider';
// import Cart from './components/Cart';
// import Navbar from './components/Navbar';
// const App = () => {
//   useEffect(()=>{
//     getAllProducts().then((data)=>console.log(data))
//   },[])
//   return (
//     <div>
//       <BrowserRouter>
//       <ProductContextProvider>
//         <Navbar />
//       <Routes>
//         <Route path="/" element={<ProductsPage />} />
//         <Route path="/product/:id"  element={<ProductDetail />} /> 
//         <Route path= "/cart" element={<Cart />} />
//       </Routes>
//       </ProductContextProvider>
//       </BrowserRouter>
//       {/* <ApiData /> */}
//     </div>
//   )
// }

// export default App
// App.js
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
/* The following line can be included in your src/index.js or App.js file */
import './App.scss';
import { getAllProducts } from './services/project-services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './components/ProductDetail';
import ProductContextProvider from './context/ProductContextProvider';
import Cart from './components/Cart/Cart';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    getAllProducts().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <ProductContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/men" element={<ProductsPage />} />
            <Route path="/women" element={<ProductsPage />} />
            <Route path="/jewelery" element={<ProductsPage />} />
            <Route path="/electronics" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          {/* <Footer /> */}
        </ProductContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
