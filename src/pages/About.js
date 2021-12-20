import React from 'react';
import Header from '../components/Header';
import ScrollToTop from '../scrollToTop';
import {BiCaretRight} from 'react-icons/bi';
export default function About(){
    return(
        <div>
            <ScrollToTop/>
            <Header/>
            <div className='row about-top'>
            <h3 className='font-bold text-center mt-5'>Hello ! I am glad that you are here.</h3>
            </div>
            <div class="row">
            <img src="./kavya.jpg" alt="Avatar" className='about-img' style={{width:"200px"}}/>
            </div>
            <div class="row">
            <button className='primary-button-about'><a href="./kavyaResume.pdf" download="kavya-resume">Download Resume</a></button>
            </div>
            <div className="container mt-5">
                
<div className='row flex-with-center'>
<div  data-aos="fade-down" className='n-box2 px-3 py-5' style={{height:'fit-content'}}>
    <div>
        <h4 className='font-bold'>About Me</h4>
       
        <hr/>
        <p>I am <b>Kavya Pandey</b> - an experienced front end developer originally from Dehradun, Uttarakhand and currently based
            in Hyderabad, Telangana. I have worked in tech and on the web for 3 and a half years with experience ranging from Javascript, MERN stack, HTML5, CSS3, Bootstrap and cross browser compatibility for IOS devices.
        </p>
        <p>
            When I am not coding, you can find me spilling colors over the canvas and trying out new food recipes.
        </p>
       
    </div>
</div>
</div>
</div>
<div className='container'>
    <div className='row'>
    <div className='col-md-4'>
    <div data-aos="fade-right" className='n-box2 px-3 py-5 mt-5'>
   <h4 className='font-bold'>EXPERIECNE</h4>
   <hr/>
  
      <BiCaretRight/>
       <p><b>Project Engineer</b> at Wipro Technologies - June 2015 to September 2018</p>
       <BiCaretRight/>
       <p><b>Project Engineer Trainee</b> at Wipro Technologies - February 2015 to May 2015</p>
      
  
    </div>
    </div>
    <div className='col-md-4' style={{marginTop:"200px"}}>
    <img data-aos="fade-up" className='about-top-img mt-5' src="./programmer.svg" alt=""/>
</div>
<div className='col-md-4' style={{marginTop:"350px"}}>
<div data-aos="fade-left" className='n-box2 px-3 py-5 mt-5'>
<h4 className='font-bold'>EDUCATION</h4>
   <hr/>
   <BiCaretRight/>
       <p><b>Bachelor's In Information Technology</b> from Graphic Era University,Dehradun 2011 - 2015</p>
      
</div>
</div>
    </div>
</div>

        </div>
    );
}