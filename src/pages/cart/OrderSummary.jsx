const OrderSummary = ({totalPrice}) => {
   
    return (
        <div className="cart-order-summary">
        <div className="order-summary-title">ORDER SUMMARY</div>
        <div className="order-summary-item">
            <span>Subtotal</span>
            <span>${totalPrice}</span>  
        </div>
        <div className="order-summary-item">
            <span>Hopping Cost</span>
            <span>0</span> 
        </div>
        <div className="order-summary-item">
            <span>Discount</span>
            <span>0</span> 
        </div>
        <div className="order-summary-item">
            <span>Total</span>
            <span>${totalPrice}</span>
        </div>
    </div>
    );
}

export default OrderSummary;
