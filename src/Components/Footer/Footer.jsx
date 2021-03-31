import React from 'react';

import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import './Footer.css'

const Footer = ({ footerSec }) => {

    const sendEmails = (e) => {
        e.preventDefault();
        var templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value

        }
        emailjs.send('service_wtjjkho', 'template_4rj86vd', templateParams, 'user_owrRHGAqfIOuJdrUWYpZt')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        e.target.reset();


    }
    return (
        <div>
            <section id="contact" ref={footerSec}>
                <form className="contact__form" id="contact" onSubmit={sendEmails}>
                    <input type="text" id="name" placeholder="Name" name="name" />
                    <input type="email" id="email" placeholder="Email" name="email" />
                    <input type="text" id="subject" placeholder="Subject" name="subject" />
                    <textarea name="message" id="message" placeholder="Message" name="message"></textarea>
                    <input type="submit" value="Send message" />
                </form>
            </section>
        </div>
    )
}

export default Footer
