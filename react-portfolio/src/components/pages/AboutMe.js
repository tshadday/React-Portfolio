import React from 'react';
import '../../App.css';
import PicMe from '../../images/Pic_Me.png'
import GitHub from '../../images/GitHub.png'
import LinkedIn from '../../images/LinkedIn.png'

function AboutMe() {
    return(
        <div className="content">
            <h1>Hello, I'm Tanner Shadday!</h1>
            <p>I am a full stack developer that specializes in JavaScript. I received a Bachelors of Science Degree in Psychology from the University of South Carolina and went on to pursue coding after graduation. I love all sorts of puzzles and brain teasers and find it relaxing to just take some time to work through them. I also really enjoy all sorts of video games, which is how I got into coding and computer science in the first place. </p>
            <img src={PicMe} alt="Me" height="40%" width="40%"></img>
            <br></br>
            <a href="https://github.com/tshadday" target="_blank">
                <img src={GitHub} alt="GitHub"></img>
            </a>
            <a href="www.linkedin.com/in/tanner-shadday-7648211b8" target="_blank">
                <img src={LinkedIn} alt="LinkedIn"></img>
            </a>
        </div>
    )
}

export default AboutMe;