const CartItems = ({item,removeFromCart,addToCart}) => {
    
    return (
        <div className='cart-item'>
        <img src={`/books/${item.image}`}alt={item.title} className='cart-item-img' />
        <div className="cart-item-info">
            <div className="cart-item-book-title"><b>Title:</b> {item.title}</div>
            <div className="cart-item-author"><b>Author:</b>{item.author}</div>
    
            <div>
            <div className="cart-item-quantity">
            <button onClick={()=>addToCart({...item,quantity:parseInt(item.quantity) + 1})}><i className="bi bi-plus-lg"></i></button>
            <b>{item.quantity}</b>
            <button onClick={()=>addToCart({...item,quantity: item.quantity>1 ? parseInt(item.quantity) - 1 : parseInt(item.quantity)})}><i className="bi bi-dash-lg"></i></button>
            </div>

            <div className="cart-items-price">${(item.price * item.quantity).toFixed(2)}</div>
            <i onClick={()=>{removeFromCart(item.id)}} className="bi bi-trash-fill"></i>
            </div>

        </div>

    </div>
    );
}

export default CartItems;
