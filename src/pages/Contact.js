import React, { useState } from 'react';
import Header from '../components/Header';
import ScrollToTop from '../scrollToTop';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_k46LUWJNc3dRB2SgQ6BzE");

export default function Contact() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] =useState("");
    const [emailSent, setEmailSent] = useState(false);

    const onSubmit =()=>{
        if (name && email && message) {
            const serviceId = 'service_rr2v3bj';
            const templateId = 'template_my2a38n';

            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    
    return(
        <div>
             <ScrollToTop/>
            <Header/>
           <div className='container contact mt-5'>
               <div className='row pt-5'>
                  <div className='col-md-6 p-5'>
                      <img src="./work.svg" alt=""/>
                  </div>
                  <div className='col-md-6'>
                      <form className='contact-form m-2 p-5 n-box2'>
                          <h3 className='font-bold'>Contact Me</h3>
                          <hr/>
                          <input type="text" className='form-control'value={name} onChange={e => setName(e.target.value)} placeholder='name'/>
                          <input type="text" className='form-control' value={email} onChange={e => setEmail(e.target.value)}placeholder='email'/>
                          <textarea type="text" className='form-control' rows='3' value={message} onChange={e => setMessage(e.target.value)} multiValue={""}/>
                          <button className='primary-button mt-3' onClick={onSubmit}>SUBMIT</button>
                          <span className={emailSent ? 'visible' : 'not-visible'}>Thank you for your message, we will be in touch in no time!</span>
                      </form>
                  </div>
               </div>
           </div>
          
        </div>
    );
}