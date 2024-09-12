import React from 'react'
import "./Contact.css"
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
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

                    <form action="">
                        <div className="name-container">
                            <input type="text" placeholder='First Name'/>
                            <input type="text" placeholder='Last Name'/>
                        </div>

                        <input type="text" placeholder='Email' />
                        <textarea rows="4" placeholder='Message' ></textarea>

                        <button>Send</button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact