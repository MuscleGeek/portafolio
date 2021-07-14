import React from 'react'
import "./About.css"
import Pic from "./about.jpg";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-description">
                <h3>Tell me something...</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem.
                </p>
            </div>
            <div className="about-image">
                <img src={Pic} alt="about"/>
            </div>
        </div>
    )
}

export default About
