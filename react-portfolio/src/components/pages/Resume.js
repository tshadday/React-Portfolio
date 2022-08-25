import React from 'react';
import '../../App.css';
import GitHub from '../../images/GitHub.png'
import LinkedIn from '../../images/LinkedIn.png'

function Resume() {
    return(
        <div className="content">
            <h1>Skills</h1>
            <div className='skills'>
                <h3>JavaScript</h3>
                <h3>React</h3>
                <h3>Node.js</h3>
                <h3>Express.js</h3>
                <h3>MySQL</h3>
                <h3>MongoDB</h3>
                <h3>GitHub</h3>
            </div>
            <br></br>
            <a href="https://drive.google.com/file/d/1CXRzBY8ZEcectPnHk09INXLtlBVqovhz/view?usp=sharing" target="_blank"><h3>View My Resume</h3></a>
            <a href="https://github.com/tshadday" target="_blank">
                <img src={GitHub} alt="GitHub"></img>
            </a>
            <a href="www.linkedin.com/in/tanner-shadday-7648211b8" target="_blank">
                <img src={LinkedIn} alt="LinkedIn"></img>
            </a>
        </div>
    )
}

export default Resume;