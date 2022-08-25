import React from 'react';
import '../../App.css';
import GitHub from '../../images/GitHub.png'
import LinkedIn from '../../images/LinkedIn.png'

function Contact() {
    return(
        <div className="content">
            <h1>Contact Me!</h1>
            <h2>📧 Tshadday99@gmail.com</h2>
            <h2>📞 (706)728-8781</h2>
            <a href="https://github.com/tshadday" target="_blank">
                <img src={GitHub} alt="GitHub"></img>
            </a>
            <a href="www.linkedin.com/in/tanner-shadday-7648211b8" target="_blank">
                <img src={LinkedIn} alt="LinkedIn"></img>
            </a>
        </div>
    )
}

export default Contact;