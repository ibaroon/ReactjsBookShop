import {Link} from 'react-router-dom';
import Rating from "../book-slider/Rating"
import "./Modal.css";
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
const Modal = ({bookData,setOpenModal}) => {
    const {id,image,title,inStock,rating,reviews,author,price}=bookData;

//----------------------------------------------------------------------------------------
const {addToCart}=useContext(CartContext);//to using addToCart() method inside CartContext
const [qty,setQty]=useState(1);// default value for the quantity
//----------------------------------------------------------------------------------------
    return (
        <div onClick={()=>{setOpenModal(false)}} className='modal-container'>
            {/* note : on click on modal-container div make setOpenModal false */}
           <div onClick={(event)=>{event.stopPropagation()}} className="modal-content">
            {/* note: by using stopPropagation we prevent making setOpenModal false on clicking modal-content div */}
            <i onClick={()=>{setOpenModal(false)}} className="bi bi-x-circle-fill modal-icon"></i>
              <div className="modal-content-img">
                     <img src={`/books/${image}`} alt={title} />
              </div>
              <div className="modal-content-info">
                <h5 className="modal-content-info-title"> {title}  </h5>
                <div className="modal-content-info-stock">
                    <b>Status : </b>{inStock ? "in stock" : "not in stock"}
                    <Rating rating={rating} reviews={reviews}/>
                </div>
                <div className="modal-content-info-author">
                    <b>Author : </b>{author}
                </div>
                <div className="modal-content-info-price">
                    <b>Price : </b>${price}
                </div>
                <div className="modal-add-to-cart">
                    <input type="number" min="1" max="100" value={qty} onChange={(e)=>{setQty(e.target.value)}} className='modal-add-to-cart-input' />
                    <button onClick={()=>addToCart({...bookData,quantity:qty})} className="modal-add-to-cart-btn">
                        <i className="bi bi-cart-plus"></i>
                        Add To Cart
                    </button>
                </div>
                <Link to ={`/book/${id}`} className="modal-content-info-link">
                    See More Details
                </Link>
              </div>
                     
            </div> 
        </div>
    );
}

export default Modal;
