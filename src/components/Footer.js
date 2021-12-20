import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa';

export default function Footer(){
    return(
        <div>
            <div className='footer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#021D38" fill-opacity="1" d="M0,96L1440,192L1440,320L0,320Z"></path></svg>
            <div className='row justify-content-center footer-content'>
              <div className='col-md-6'>
                 <div className='div'>
                     <p>Designed and Developed by</p>
                     <hr/>
                     <div className='d-flex justify-content-between px-2'>
                     <a href="https://www.instagram.com/kavya.pandey/"> <FaInstagram className='footer-icons'/></a>
                        <a href="mailto:pandeykavya2@gmail.com"> <FaMailBulk className='footer-icons'/></a>
                        <a href="https://www.linkedin.com/in/kavya-pandey-8194b1135"><FaLinkedin className='footer-icons'/></a>
                        <a href="https://github.com/kavyapandey"> <FaGithub className='footer-icons'/></a>
                       
                     </div>
                     <hr/>
                    
                     <p>Kavya Pandey</p>
                 </div>
              </div>
            </div>
            </div>
        </div>
    );
}