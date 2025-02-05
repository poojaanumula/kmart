import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import { PiX } from "react-icons/pi";
import { border } from "@mui/system";
import Classes from "./Cart.module.scss";
const Cart = () => {
  const { cart, removeFromCart, total, handleQuantityChange } =
    useContext(ProductContext);

  return (
    <div>
      {cart.length === 0 ? (
        <h3 className={Classes.title}>Your cart is empty</h3>
      ) : (
        <>
          <h1 className={Classes.titleTwo}>Items in your bag</h1>
          {cart.map((item) => (
            <li key={item.id} className={Classes.list}>
              <div  className={Classes.desc}>
                  <h4  className={Classes.somePadding}>{item.name}</h4>
                  <p className={Classes.somePadding}>Price: ${item.price}</p>
                  <p className={Classes.somePadding}>Quantity: {item.quantity}</p>
                <div style={{ display: "flex", gap: "5px" }}>
                  <button
                    className={Classes.btn}
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                  <button
                    className={Classes.btn}
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                </div>
                {/* //<button style={{ width:'50px', margin:'2px'}} onClick={() => removeFromCart(item.id)}>Delete</button> */}
                <DeleteIcon
                 
                  className={Classes.delete}
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
            </li>
          ))}
          <h3 className={Classes.total}>
            Total: ${total}
          </h3>
        </>
      )}
    </div>
  );
};

export default Cart;
