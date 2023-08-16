import React, { useRef, useState } from "react";
import './ContactPage.css';
import emailjs from '@emailjs/browser';


function ContactPage() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_79js3m6', 'voice_u51c8xy', form.current, 'P7bYMIcWgX18p10TQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          }
          );
          e.target.reset();
    };
    return (
        <section className="contact-page-wrapper">
            <h2>Make that Connection</h2>
            <div className="form-wrapper">
                <p className="form-info">Get in touch with me via email using the form below, <br></br>
                    alternatively feel free to contact me on the social platforms above.<br></br>
                    I look forward to speaking with you!
                </p>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Full Name" 
                    name="user_name" required/>

                    <input type="email" placeholder="Email" 
                    name="user_email" required/>

                    <input type="text" placeholder="Subject" 
                    name="subject" required/>

                    <textarea name="message" cols="30" rows="10" ></textarea>
                    <button className="contact submit" type="submit">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default ContactPage;