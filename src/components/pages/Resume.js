import React from 'react';
import '../../App.css';
import Footer from '../sections/footer'
import Resume_Page_1 from '../../images/Tanner_Shadday_Resume_1.png'
import Resume_Page_2 from '../../images/Tanner_Shadday_Resume_2.png'

function Resume() {
    return(
        <div className="content">
            <h1>My Resume</h1>
            <img src={Resume_Page_1} alt="Resume page 1" height="75%" width="75%"/>
            <img src={Resume_Page_2} alt="Resume page 2" height="75%" width="75%"/>
            <Footer />
        </div>
    )
}

export default Resume;