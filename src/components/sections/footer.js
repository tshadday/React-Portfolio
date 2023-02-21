import React from "react";
import GitHub from '../../images/GitHub.png'
import LinkedIn from '../../images/LinkedIn.png'

export default function Footer() {
    return (
        <div>
            <a href="https://github.com/tshadday" target="_blank" rel="noreferrer">
                <img src={GitHub} alt="GitHub"></img>
            </a>
            <a href="www.linkedin.com/in/tanner-shadday-7648211b8" target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="LinkedIn"></img>
            </a>
        </div>
    );
}