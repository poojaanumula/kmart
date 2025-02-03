import React from 'react'
//import {kmartlogo} from '../assets/images/kmartlogo'

const Navbar = () => {
  return (
    <>

 <div style={{display:'flex', justifyContent:'space-between', background:'black', padding:'20px', color:'white'}}>
    {/* //<img src= {kmartlogo} /> */}
    <h3>LOGO</h3>
     <ul  style={{display:'flex', gap:'20px', listStyle:'none'}}>
        <li>Home</li>
        <li>Men</li>
        <li>Woman</li>
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
