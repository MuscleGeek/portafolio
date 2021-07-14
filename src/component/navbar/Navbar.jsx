import React from 'react'
import "./Navbar.css";

const Navbar = ({isScrolling}) => {
    /*funcion que cuando hace click en el nav-logo nos lleva arriba de la página*/
    const  toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }
    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>  
            <div className="navbar-logo" onClick={toTheTop}>
                    MuscleGeek
            </div>
            
        </nav>
    )
}

export default Navbar
/*Linea 6 > Se llama a la clase css "scrolling* cuando el prop es mayor a 20 lo que hace es dar
/dar fondo negro con transición*/ 