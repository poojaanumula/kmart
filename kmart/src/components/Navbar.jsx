import React, { useState } from 'react'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContextProvider';
import { BsCursor } from 'react-icons/bs';
//import {kmartlogo} from '../assets/images/kmartlogo'

const Navbar = () => {
   const { setCategory } = useContext(ProductContext);
  return (
    <>

 <div style={{display:'flex', justifyContent:'space-between', background:'black', padding:'20px', color:'white',cursor:'pointer'}}>
    {/* //<img src= {kmartlogo} /> */}
    <h3>LOGO</h3>
     <ul  style={{display:'flex', gap:'20px', listStyle:'none', cursor:'pointer'}}>
        <li  onClick={() => setCategory('all')}>Home</li>
        <li onClick={() => setCategory("men's clothing")}>Men</li>
        <li onClick={() => setCategory("women's clothing")}>Women</li>
        <li onClick={() => setCategory("jewelery")}>Jewelery</li>
        <li onClick={() => setCategory("electronics")}>Electronics</li>
     </ul>
     <b>Cart</b>
 </div>
<div style={{background:'red'}}>
<form style={{border:'1px solid black', width:'300px', alignItems:'center', margin:'0px auto', display:'flex', padding:'10px'}}>
        <input type='text' style={{width:'100%'}}/>
        <button>Search</button>
     </form>
</div>
    

 </>
  )
}

export default Navbar
