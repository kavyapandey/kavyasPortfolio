import React from 'react';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Particle from '../components/Particle';
import ScrollToTop from '../scrollToTop';
import '../stylesheets/home.css';

export default function Home() {
    return(
        <div>
             <ScrollToTop/>
            <Header/>
          <div className='introduction flex-width-center' style={{backgroundImage:`url(./home-bg.svg)`}}>
              <div>
                  <h1 data-aos="fade-up">Kavya</h1>
                  <div className='intro-content d-flex justify-content-between'>
                      <p>MERN stack <br/>Developer</p>
                      <button className='primary-button font-bold'><a href="#carousel">GET STARTED</a></button>
                  </div>
              </div>
              
          </div>
        <Carousel/>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#021D38" fill-opacity="1" d="M0,224L60,197.3C120,171,240,117,360,112C480,107,600,149,720,186.7C840,224,960,256,1080,234.7C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
        <div className='container'>
        <div className='row flex-with-center mt-5'>
            <div className='col-md-6'>
                 <h4 className='font-bold text-center'>Who is Kavya?</h4>
                <div className='who-is-kavya-blob flex-with-center' style={{backgroundImage:`url('./aboutBackground.svg')`}}>
                   
                 <div className='text-home'>
                     <h3>Hello !</h3>
                     <hr/>
                     <p>
                         <pre>
                      {
                          JSON.stringify({
                                          name : "Kavya Pandey",
                                          from : "Hyderabad, India",
                                          age : 27,
                                          gender : "female"
                          },null,2)
                      }
                         </pre>
                     </p>
                 </div>
                </div>
            </div>
        <div className='col-md-6'>
        <img className="who-is-kavya" data-aos="fade-up" src="./homePage.svg" alt=""/>
</div>
        </div>  
        </div>
       
      
        </div>
    );
}