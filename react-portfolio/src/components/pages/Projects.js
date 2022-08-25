import React from 'react';
import '../../App.css';
import GitHub from '../../images/GitHub.png'
import LinkedIn from '../../images/LinkedIn.png'

function Projects() {
    return(
        <div className="content">
            <h1>My Projects</h1>
            <a href="https://github.com/tshadday" target="_blank">
                <img src={GitHub} alt="GitHub"></img>
            </a>
            <a href="www.linkedin.com/in/tanner-shadday-7648211b8" target="_blank">
                <img src={LinkedIn} alt="LinkedIn"></img>
            </a>
        </div>
    )
}

export default Projects;