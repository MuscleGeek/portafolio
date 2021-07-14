import React from 'react';
import "./Slider.css";

const slidesInfo = [
    {
        src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_1280.jpg",
        alt: "Project 1",
        desc: "Project 1"
    },
    {
        src: "https://cdn.pixabay.com/photo/2017/07/01/19/48/background-2462434_1280.jpg",
        alt: "Project 2",
        desc: "Project 2"
    },
    {
        src: "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg",
        alt: "Project 3",
        desc: "Project 3"
    },
    

]

const slides =  slidesInfo.map(slidez => (
    <div className="slide-container">
        <img src={slidez.src} alt={slidez.alt}/>
        <div className="slide-description">
            <span>{slidez.desc}</span>
        </div>
    </div>
))

export default slides;