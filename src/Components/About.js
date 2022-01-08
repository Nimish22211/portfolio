import React from 'react'
import './About.css'
function About() {
    return (
        <div className="about" id="about">
            <div className="about-container">
                <h1>About Me</h1>
                <p className="about-desc">Hi I am Nimish and I am 16 years old, a self-taught programmer. Aspiring to be a software developer. I am Interested in Web development, Blockchain, Artificial Inteligence. I have a good experience with javascript and reactjs. I can work with google firebase. I started learning to code when I was 13 but initially I didnt have much interest as I am interested today, putting hours into it. <br /><br /> I am ready to learn new upcoming technologies currently i am learning Nodejs MongoDB. I try to learn a new thing each day, new skills. I also have a youtube channel about tutorials on Rubiks Cube tutorials</p>
                <div className="tech-logos">
                    <img src="/Images/Javascript-logo.png" className="js-logo" alt='js-logo' />
                    <img src="/Images/React-logo.png" className="react-logo" alt="react-logo" />
                </div>
            </div>
        </div>
    )
}

export default About
