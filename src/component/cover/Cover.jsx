import React from 'react'
import "./Cover.css";
import coverVid from "../media/coverVid.mp4";

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVid} autoPlay loop muted></video>
            <h1>Jonathan Villalobos Mora</h1>
            <p>Computer Science Engineer | Pentester Enthusiast | Techie Dude</p>
        </div>
    )
}

export default Cover
