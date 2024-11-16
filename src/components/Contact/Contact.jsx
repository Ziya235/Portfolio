import React, { useState } from 'react';
import "./Contact.css";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';  // Correct imports
import 'react-toastify/dist/ReactToastify.css';  // Required CSS for Toastify

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,  // Show the progress bar
            pauseOnHover: true,      // Pause the toast when hovered
            draggable: true,         // Allow dragging of the toast
            closeButton: true,       // Show the close button
            className: 'my-toast',   // Add custom class for custom styles
          });

        // Clear the form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div id='contact'>
            <div className='contact-word'>
                <h1>Contact me</h1>
            </div>

            <div className="contact-container">
                <div className="contact-left">
                    <div className="mail">
                        <CiMail className='mail-icon' />
                        <p>Ziyeddinmustafa@gmail.com</p>
                    </div>
                    <div className="mail">
                        <FaGithub className='mail-icon' />
                        <a href="https://github.com/Ziya235" target="_blank" rel="noreferrer noopener">https://github.com/Ziya235 </a>
                    </div>
                </div>

                <div className="contact-right">
                    <form onSubmit={handleSubmit}>
                        <div className="name-container">
                            <input 
                            required
                                type="text" 
                                placeholder='First Name' 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} 
                            />
                            <input 
                            required
                                type="text" 
                                placeholder='Last Name' 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} 
                            />
                        </div>

                        <input 
                        required
                            type="email" 
                            placeholder='Email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <textarea 
                        required
                            rows="4" 
                            placeholder='Message' 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} 
                        ></textarea>

                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

            {/* Toast container should be placed here */}
            <ToastContainer />
        </div>
    );
};

export default Contact;
