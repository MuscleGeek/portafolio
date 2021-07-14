import React from 'react'
import "./About.css"
import Pic from "./about.jpg";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-description">
                <h3>It's me!...</h3>
                <p>I am a passionate dude for computer science who loves coding,<br/>
                 solving problems and loves being Pentesting Enthusiast!<br/>
                 Step by step learning how to became a better person and professional.
                </p>
                <hr/>
            </div>
            <div className="about-image">
                <img src={Pic} alt="about"/>
            </div>
        </div>
    )
}

export default About
