import react from "react";
import '../stylesheets/carousel.css';
import {FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact} from 'react-icons/fa';
export default function Carousel(){
    return(
        <div>
        <div className="carousel-parent position-relative" id="carousel">
        <h1 className=" position-absolute top-0 start-0 end-0 text-center mt-5">Technologies I use</h1>
        <div className="gallery">
         <span style={{'--i' : 1}}><FaReact color="cyan"/></span>
         <span style={{'--i' : 2}}><FaHtml5 color="orange"/></span>
         <span style={{'--i' : 3}}><FaCss3Alt color="blue"/></span>
         <span style={{'--i' : 4}}><FaBootstrap color="blue"/></span>
         <span style={{'--i' : 5}}><FaNodeJs color="green"/></span>
         <span style={{'--i' : 6}}><FaJsSquare color="yellow"/></span>

        </div>
        </div>
        </div>
    );
}