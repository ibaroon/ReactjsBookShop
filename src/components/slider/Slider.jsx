import {useState} from 'react';
import "./slider.css";
import FirstBookImg from "../../images/book1.png";
import SecondBookImg from "../../images/book2.png";
import ThirdBookImg from "../../images/book3.png";

const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0)
    return (
       <div className="slider-container">
        <i className="bi bi-chevron-double-left arrow-left" onClick={()=>{if(slideIndex===0){setSlideIndex(2)}else{setSlideIndex(slideIndex-1)}}}></i>
<div style={{transform:`translateX(${slideIndex*-100}vw)`}} className="slider-wrapper">
    <div className="slide first-slide">
 <div className="slide-img-wrapper">
    <img src={FirstBookImg} alt=""/>
    </div> 
    <div className="slide-info-wrapper">
        <h1 className="slide-info-title">Book Store</h1>
    <p className="slide-info-desc">
        It's not just reading. It's living the adventure
    </p>
    </div>     
    </div>

    <div className="slide second-slide">
 <div className="slide-img-wrapper">
    <img src={SecondBookImg} alt=""/>
    </div>  
    <div className="slide-info-wrapper">
        <h1 className="slide-title-info-title">The Books For EveryOne</h1>
    <p className="slide-info-desc">
       You can read at home or at the bookstore
    </p>
    </div>     
    </div>

    <div className="slide third-slide">
 <div className="slide-img-wrapper">
    <img src={ThirdBookImg} alt=""/>
    </div>  
    <div className="slide-info-wrapper">
        <h1 className="slide-title-info-title">Checkout the new titles</h1>
    <p className="slide-info-desc">
        We Send the book you want at home
    </p>
    </div>     
    </div>
</div>
        <i className="bi bi-chevron-double-right arrow-right"onClick={()=>{if(slideIndex===2){setSlideIndex(0)}else{setSlideIndex(slideIndex+1)}}}></i>
       </div>
    );
}

export default Slider;
