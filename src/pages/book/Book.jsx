import Rating from "../../components/book-slider/Rating"
import {books} from "../../data/books"
import {useParams} from 'react-router-dom';
import "./Book.css";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

const Book = () => {
//----------------------------------------------------------------------------------------
const {addToCart}=useContext(CartContext) //to using addToCart() method inside CartContext
const [qty,setQty]=useState(1); // default value for the quantity
//----------------------------------------------------------------------------------------

const {id} = useParams();
    //const param = useParams();
    
    // find by title 
    // const [filteredBook, setFilteredBook] = useState(books);
    // useEffect(()=>{
    //     const filtered = books.filter(book => book.title.includes("Confess"));
    //     setFilteredBook(filtered);
    //     console.log("ppp",filtered);
    // },[])
   
   // find by id ,but we need to convert id got from url from string to int by using parseInt(id) function or use + 
         const book = books.find(book => book.id=== +id); // parseInt(id)=== +id
         

    
    
    return (
        <div className='book'>
         <div className="book-content">
        <img src={`/books/${book.image}`} alt="book.title" className='book-conent-img'/>    
        <div className="book-content-info">
                <h1 className="book-title"> {book.title}  </h1>
                <div className="book-author">
                    by <span>{book.author}</span> (Author)
                </div>
                <Rating rating={book.rating} reviews={book.reviews}/>
                <div className="book-content-info-stock">
                    <b>Status : </b>{book.inStock ? "in stock" : "not in stock"}
                   
                </div>
               
                <div className="book-content-info-price">
                    <b>Price : </b>${book.price}
                </div>
                <div className="book-add-to-cart">
                    <input type="number" min="1" max="100" className='book-add-to-cart-input' value={qty} onChange={(e)=>setQty(e.target.value)} />
                    <button onClick={()=>addToCart({...book,quantity:qty})} className="book-add-to-cart-btn"> {/*addToCart({...book,quantity:qty}) => we add quantity attribute to the book object , its value comes from qty which is comes from the input */}
                        <i className="bi bi-cart-plus"></i>
                        Add To Cart
                    </button>
                </div>
        </div>
              
        </div>  
    <p className="book-description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi distinctio corporis minus repellat quisquam numquam. Excepturi eum ea maxime voluptate ullam. Consectetur similique ipsum vel exercitationem quos reprehenderit unde!
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat aliquam neque exercitationem unde, laborum sunt possimus voluptates magnam odio soluta nam dignissimos ea nobis veritatis. Officia quod voluptatibus delectus totam?
    </p>       

    <div className="book-icons">
        <div className="book-icon">
         <small>Print Length</small>
         <i className="bi bi-file-earmark-break"></i>
        <b>{book.printLength} pages</b>
        </div>
        <div className="book-icon">
         <small>Language</small>
         <i className="bi bi-globe"></i>
        <b>{book.language}</b>
        </div>
        <div className="book-icon">
         <small>Publication Date</small>
         <i className="bi bi-calendar3"></i>
        <b>{book.PublicationDate}</b>
        </div>    
    </div>     
      
        </div>
    );
}

export default Book;
