import {useContext, useState} from 'react';
import "./BookSlider.css"
import Rating from './Rating';
import Modal from '../modal/Modal';
import CartContext from '../../context/CartContext';

const BookSlider = ({data}) => {
    const [bookSlider,setBookSlider] = useState(0);
    const [openModal,setOpenModal] = useState(false); // openModal state 
    const [bookData,setBookData] = useState(null); // bookData

 //---------------------------------------------------------------------------------------------
    const {addToCart}= useContext(CartContext); //to using addToCart() method inside CartContext
//----------------------------------------------------------------------------------------------

    const handleModel=(book)=>{ // function that openModal change state and carry bookData
        setOpenModal(true);
        setBookData(book);
        //console.log(book);
    }

    return (
        <div className='book-slide-container'>
            {bookSlider>0 && <i className="bi bi-chevron-left books-arrow-left" onClick={()=>{setBookSlider(bookSlider-1)}}></i>  }
          
          <div style={{transform:`translateX(${bookSlider*-100}vw)`}} className="book-slide-wrapper">
            {data.map((item) => 
                <div key={item.id}className="book-slide-item">
            <img src={`/books/${item.image}`} alt={item.title} className='book-slide-item-img'/>        
                <h3 className="book-slide-item-title">{item.title}</h3>
                <Rating rating={item.rating} reviews={item.reviews}/>
                <div className="book-slide-item-price">${item.price}</div>
                <div className="book-slide-icons-wrapper">
                    <i onClick={()=>handleModel(item)} className="bi bi-eye-fill"></i>
                    <i on onClick={()=>addToCart({...item,quantity:1})} className="bi bi-cart-plus"></i>

                </div>
                </div>
            )}
          </div>
         {bookSlider<(parseInt(data.length/4)) &&  <i className="bi bi-chevron-right books-arrow-right" onClick={()=>{setBookSlider(bookSlider+1)}}></i>}
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal}/>} {/* view Modal if openModal true */}
        </div>
    );
}

export default BookSlider;
