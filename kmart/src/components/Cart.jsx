import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContextProvider'

const Cart = () => {
    const {addToCart, total, cart, removeFromCart}= useContext(ProductContext)
    const [quan, setQuan]=useState(1)
  return (
    <div>

 {cart.map((item) => (
            <li key={item.id}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Delete</button>
            
            </li>
          ))}
            <h3>Total: ${total}</h3>
            {cart.length > 0 &&
            <div>
            <h3>quan: {quan}</h3>
            
            <button onClick={()=> setQuan(quan+1)}>+</button>
            <button onClick={()=> {
              if(quan>=1)
              {
                setQuan(quan-1)
              }
              }
            }
            >-</button>
     </div>

            } 
    </div>
  )
}

export default Cart
