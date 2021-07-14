import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-info">
                <h1>Jonathan Villalobos Mora</h1>
                <p>Costarrican Dude</p>
            </div>
            <div className="footer-contact">
                <h3>Contact Me</h3>
                <p>Let's get in touch! <a href="mailto:0xbash@protonmail.com"><i className="fa fa-envelope envelope"></i></a></p>
            </div>
            <div className="footer-socialize">
                <div className="created-by">
                    MuscleGeek
                </div>
                <div className="footer-socialize-net">
                    <a href="https://www.linkedin.com/in/jonathan-villalobos-mora/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin linkedin"></i></a>
                    <a href="https://www.facebook.com/f0rb1dd3np0is0n" target="_blank" rel="noreferrer"><i className="fab fa-facebook facebook"></i></a>
                    <a href="https://github.com/MuscleGeek" target="_blank" rel="noreferrer"><i className="fab fa-github github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
