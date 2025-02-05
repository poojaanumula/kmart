
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ProductContext } from '../../context/ProductContextProvider';
import logo from '../../assets/logo.png'
import Classes from './Navbar.module.scss';
const Navbar = () => {
  const { setCategory, cart } = useContext(ProductContext);
  return (
    <div className= {Classes.navbar}>
      {/* <h3 style={{fontFamily:'cursive', fontSize:'20px', marginLeft:'30px'}}>KMART</h3> */}
      <img src={logo} className = {Classes.navbar_logo}/>
      <ul className= {Classes.ul}>
        <li >
          <Link
            to="/"
            className={Classes.link}
            onClick={() => setCategory('all')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/men"
            className={Classes.link}
            onClick={() => setCategory("men's clothing")}
            
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            to="/women"
            className={Classes.link}
            onClick={() => setCategory("women's clothing")}
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            to="/jewelery"
            className={Classes.link}
            onClick={() => setCategory('jewelery')}
          >
            Jewelery
          </Link>
        </li>
        <li>
          <Link
            to="/electronics"
            className={Classes.link}
            onClick={() => setCategory('electronics')}
          >
            Electronics
          </Link>
        </li>
      </ul>
      <Link to="/cart" 
      className={Classes.icon}
     >
        <b><span style={{color:'red'}}></span></b>
        <ShoppingCartIcon 
       
        fontSize="large" />
        <span 
       >
           <span style={{color:'red', fontSize:'20px'}}>{cart.length}</span> 
        </span>
      </Link>
    </div>
  );
};

export default Navbar;