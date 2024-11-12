import { useState } from "react";
import "./Contact.css";
const Contact = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [subject,setSubject]=useState("");
    const [message,setMessage]=useState("");

    const sendHandler = (e)=>{
       e.preventDefault();

       if(name.trim()==="") return; // validate name
       if(email.trim()==="") return; // validate email
       if(subject.trim()==="") return; // validate subject
       if(message.trim()==="") return; // validate message

      console.log({name,email,subject,message});
    }

    return (
        <section className='contact'>
            <div className="contact-wrapper">
            <div className="contact-item">
                <div className="contact-item-icon">
                    <i className="bi bi-house-fill"></i>
                    Address
                </div>
                <p className="contact-item-text">Oman - Muscat - Alamerat</p>
                </div>

                <div className="contact-item">
                <div className="contact-item-icon">
                    <i className="bi bi-telephone-fill"></i>
                    Phone
                </div>
                <p className="contact-item-text">123-456-789</p>
                </div>

                <div className="contact-item">
                <div className="contact-item-icon">
                    <i className="bi bi-envelope-fill"></i>
                    Email
                </div>
                <p className="contact-item-text">ahmeds7010@gmail.com</p>
                </div>
            </div>
            <form onSubmit={sendHandler} className="contact-form">
                <h2 className="contact-from-title">Contact Us Form</h2>
                <div className="contact-input-wrapper">
                    <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Name *"/>
                    <input value={subject} onChange={e=>setSubject(e.target.value)}type="text" placeholder="Subject *"/>
                    <input value={email} onChange={e=>setEmail(e.target.value)}type="email" placeholder="Email *"/> 
                </div>
                <textarea value={message} onChange={e=>setMessage(e.target.value)} className="contact-textarea" placeholder="Your Message *" rows="5"></textarea>
                <button className="contact-btn">Send</button>
            </form>
            
        </section>
    );
}

export default Contact;
