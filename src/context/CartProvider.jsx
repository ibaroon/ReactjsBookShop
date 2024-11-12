import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({children}) => {

    const [dynamicCartItems,setDynamicCartItems]=useState([]);
    // Add To Cart Function
    const addToCart=(item)=>{ console.log(item);
        const isExist = dynamicCartItems.find(cart => cart.id===item.id); // find to item is exist or not
      if(isExist)
        {
            setDynamicCartItems(
                dynamicCartItems.map((cartItem)=> cartItem.id===item.id ? item : cartItem)
                // fetch all array item and check if cart item id = to item id (new one) , take the new one id else take the cart item id
            )
        } 
        else{
            setDynamicCartItems(prev =>[...prev,item]); //prev means previus item , and also comming item from prameter
        }
        
    }
    // Remove From Cart Function
    const removeFromCart=(id)=>{ console.log(id);
        const cart=dynamicCartItems.filter(c=>c.id !==id);
        setDynamicCartItems(cart);
    }
    return (
        <CartContext.Provider value={{dynamicCartItems,addToCart,removeFromCart,CartItemsLength:dynamicCartItems.length,}}> {/*value prop contain all methods and vaiables we want to use*/}
            {children}  {/*children means all components that inside the provider = > <App /> note look at index.js page*/}
        </CartContext.Provider>
    );
}
// note : go to index.js and import CartProvider  by <CartProvider><App /></CartProvider>
export default CartProvider;
