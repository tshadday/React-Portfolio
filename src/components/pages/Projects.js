import React from 'react';
import '../../App.css';
import Footer from '../sections/footer'

function Projects() {
    return(
        <div className="content">
            <h1>My Projects</h1>

            <div className='container'>
                <div className='row'>
                    <div className='project col m-3' id='Coeus'>
                        <a href="https://Coeus.chat" target="_blank" rel="noreferrer">
                            <p>Coeus by Data Fusion Specialists</p>
                        </a>
                    </div>

                    <div className='project col m-3' id='Troogle'>
                        <a href="https://gabefando.github.io/travel-website/index.html" target="_blank" rel="noreferrer">
                            <p>Troogle: A Travel Website</p>
                        </a>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='project col m-3' id='UnsubHub'>
                        <a href="https://github.com/tshadday/Subscription-Tracker-Service" target="_blank" rel="noreferrer">
                            <p>UnsubHub: A Subscription Tracker Service</p>
                        </a>
                    </div>

                    <div className='project col m-3' id='Paws-N-Play'>
                        <a href="https://github.com/tshadday/Paws-N-Play" target="_blank" rel="noreferrer">
                            <p>Paws N Play: A Pet Playdate Finder App</p>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects;