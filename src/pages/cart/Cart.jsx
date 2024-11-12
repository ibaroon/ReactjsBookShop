import {cartInfo}from "../../data/cart";
import "./Cart.css";
import OrderSummary from './OrderSummary';
import CartItems from './CartItems';
import { useContext } from "react";
import CartContext from "../../context/CartContext";
const Cart = () => {
    const {dynamicCartItems,addToCart,removeFromCart} = useContext(CartContext) // to use dynamicCartItems from CartContext
    //console.log(cartInfo)
    const totalPrice= (dynamicCartItems.reduce((accumlative,current)=> accumlative + current.price * current.quantity , 0)).toFixed(2); 
    /*reduce function use to sum the total price , this function accept 2 prameters , first is function that calculat total , second is initial total sum  */
   
    return (
    <div className='cart'>

        <div className="cart-title">Your Shopping Cart</div>
           <div className="cart-wrapper">
                <div className="cart-items">
                    {dynamicCartItems.map((item => 
                       <CartItems key={item.id} item={item} removeFromCart={removeFromCart} addToCart={addToCart}/>
                    ))}
                </div>

      <OrderSummary totalPrice={totalPrice}/>

           </div>
          
        </div>
    );
}

export default Cart;
