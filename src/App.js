
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './pages/home/HomePage';
import Authors from './pages/authors/Authors';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Register from './pages/forms/Register';
import Login from './pages/forms/Login';
import Book from './pages/book/Book';
import Cart from './pages/cart/Cart';

function App() {
 
  return (
    <BrowserRouter >
    <Header/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/authors" element={<Authors/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/book/:id" element={<Book/>}/>
        <Route path="*" element={<><br/><br/><br/><center><h1 style={{color:"#585958"}}>Page Not Found !</h1></center><br/><br/><br/></>}/>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
