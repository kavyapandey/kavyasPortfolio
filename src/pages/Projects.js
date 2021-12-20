import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import Header from '../components/Header';
import ScrollToTop from '../scrollToTop';
import '../stylesheets/projects.css';
import projectsData from './projectsData';

export default function Projects() {
    return(
        <div>
              <ScrollToTop/>
            <Header/>
        <div className="container projects-intro">
<div className='row flex-with-center mt-5'>
<div  data-aos="fade-down" className='col-md-6 n-box2 px-3 py-5' style={{height:'fit-content'}}>
    <div>
        <h1 className='font-bold'>Projects</h1>
        <p className='font-bold'>Skills grow. So will this portfolio.</p>
        <button className='primary-button'><a href="#project-list">Get Started</a></button>
    </div>
</div>
<div className='col-md-6 position-relative'>
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#00F1C9" d="M55.8,-23.3C60.7,-3,45.1,18.8,24.8,33.5C4.4,48.1,-20.7,55.5,-40.1,44C-59.6,32.5,-73.4,2.1,-65.8,-22C-58.2,-46,-29.1,-63.7,-1.8,-63.1C25.4,-62.5,50.9,-43.7,55.8,-23.3Z" transform="translate(100 100)" />
</svg>
<FaLaptopCode color='white' size={120} className='position-absolute top-50 start-50 translate-middle'/>
</div>
</div>
        </div>
        <div className='container project-list' id="project-list">
             <h3 className='font-bold'>Take a look at my projects</h3>
             <hr/>
             <div className='row'>
{projectsData.map(project =>{
    return<div className='col-md-6'>
        <div className='position-relative project'>
            <img src={project.image} alt=""/>
            <div className='project-content'>
                <h3>{project.title}</h3>
                <hr/>
                <p>{project.description}</p>
                <button className='primary-button'><a id="myLink" href={project.link} target="_blank">DEMO</a></button>
            </div>
        </div>
    </div>
})}
             </div>
        </div>
      
        </div>
    );
}