import React from 'react';
import '../../App.css';
import GitHub from '../../images/GitHub.png'
import LinkedIn from '../../images/LinkedIn.png'

function Projects() {
    return(
        <div className="content">
            <h1>My Projects</h1>

            <div className='project' id='Troogle'>
                <a href="https://gabefando.github.io/travel-website/index.html">
                    <p>Troogle: A Travel Website</p>
                </a>
            </div>

            <div className='project' id='UnsubHub'>
                <a href="https://github.com/tshadday/Subscription-Tracker-Service">
                    <p>UnsubHub: A Subscription Tracker Service</p>
                </a>
            </div>

            <div className='project' id='Paws-N-Play'>
                <a href="https://github.com/tshadday/Paws-N-Play">
                    <p>Paws N Play: A Pet Playdate Finder App</p>
                </a>
            </div>

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