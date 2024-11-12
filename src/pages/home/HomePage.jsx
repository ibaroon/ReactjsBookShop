import React ,{ useState, useEffect } from "react";
import Services from '../../components/services/Services';
import BookSlider from '../../components/book-slider/BookSlider';
import Slider from '../../components/slider/Slider';
import {books} from "../../data/books"
import HeadingTitle from '../../components/heading-title/HeadingTitle';
const HomePage = () => {
    const [productState,setProductState]=useState([])
    useEffect(()=>{
  
      fetch('https://fakestoreapi.com/products')
                .then((res)=>res.json())
                .then((json)=>{
                    const newProducts =  json.map((product)=>{
                    return product
                    
                  })
                  setProductState(newProducts)
                 // console.log(setProductTwoState)
                })
    
    },[])
    //console.log("api",productState)
    return (
        <div className='home'>
 <Slider/>
 <Services/>
 <HeadingTitle title={"Most Gifted"}/>
 <BookSlider data={books}/>
 <HeadingTitle title={"Best Seller"}/>
 <BookSlider data={books}/>
 <HeadingTitle title={"Most Wished For"}/>
 <BookSlider data={books}/>   
        </div>
    );
}

export default HomePage;
