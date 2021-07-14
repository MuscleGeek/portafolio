import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from "./component/cover/Cover.jsx";
import Navbar from './component/navbar/Navbar';
import About from "./component/about/About";
import Slider from "./component/slider/Slider";
import Info from "./component/info/Info";
import Footer from './component/footer/Footer.jsx';

function App() {
  /*cual es la posicion de nuestro scroll*/
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const pos = window.pageYOffset;
    setScrollHeight(pos);
  };

  useEffect(() => { 
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);
  return (
    <div className="App">
        <Navbar isScrolling={scrollHeight}/>
        <Cover/>
        <About/>
        <Slider/>
        <Info/>
        <Footer/>
    </div>
  );
}

export default App;
