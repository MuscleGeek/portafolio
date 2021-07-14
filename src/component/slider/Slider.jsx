import React from 'react'
import Carousel , {slidesToShowPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./Slider.css";
import Slides from './Slides';


const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>My Projects</h2>
            </div>
                    {/*usando la libreria brainhebeu*/}
            <Carousel plugins={[
                'centered',
                'arrows',
                'infinite',
                {resolve: slidesToShowPlugin, 
                    options: {
                        numberOfSlides: 3
                    }
                },
                ]}
                animationSpeed={200}
                offset={50} 
                itemWidth={420}
                slides={Slides}
                breakpoints = {{
                    960:{
                        slidesPerPage: 1,
                        arrows: false,
                        itemWidth: 250,
                    }
                }}
                
            
            ></Carousel> 
           

            
        </div>
    )
}

export default Slider
/*offset = distancia entre cada diapositiva*/
/*breakpoints = usado cuando cuando el responsive es a nivel de dispositivo */