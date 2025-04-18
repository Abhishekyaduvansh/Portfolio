

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7prxgpi', 'template_9x99c3k', form.current, 'Jc0ouFOr1ZbbNP0LL')
      .then((result) => {

          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  function submitted(){
    alert("Message Sent!");
  }

  return (
    <>
    

<section className='container-fluid bg-black p-5 text-center m-auto mb-0' id='contact' style={{
  background: ' linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(23, 17, 17, 1) 100%)',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)'
}}> 
  
    <h1  style={{display:"inline"}}  className='text-center   fw-bold fs-1 mt-5 m-auto '>Contact Me<span className='text-danger'>.</span></h1>
  <div className='container d-flex ' >
<form ref={form} onSubmit={sendEmail} className='row  m-auto  p-5 text-white' >
  
   <input type="text" name="user_name" id="" placeholder='Enter Your Name' className='form-control place bg-transparent text-danger'  />
   
    <input type="email" name="user_email" id="" className='form-control text-white bg-transparent place m-auto mt-4' placeholder='Enter Your Email'/>
    
    <textarea name="message" id="" cols="20" rows="4" placeholder='Enter Your Message' className='form-control place text-white bg-transparent m-auto mt-4'></textarea>
    <div className='mt-4'>
    <input className='btn btn-outline-light' type='submit' value="send" onClick={submitted}></input>
    </div>
    </form>
    </div>

    <div className='container mt-5 d-flex flex-wrap justify-content-center gap-3'>
  <a
    href='mailto:abhiyaduvanshi098@gmail.com'
    className='text-decoration-none'
    target='_blank'
    rel='noopener noreferrer'
  >
    <div
      className='card bg-dark text-white p-2 glow-card'
      style={{ width: '20rem', fontSize: '0.5rem' }}
    >
      <div className='card-body text-center'>
        <h6 className='card-title mb-2'>📧 Email</h6>
        <p className='card-text mb-0 ' style={{ wordBreak: 'break-word',fontSize: '0.9rem'  } }>
          abhiyaduvanshi098@gmail.com
        </p>
      </div>
    </div>
  </a>

  <a
    href='tel:+919140954440'
    className='text-decoration-none'
  >
    <div
      className='card bg-dark text-white p-2 glow-card'
      style={{ width: '14rem', fontSize: '0.9rem' }}
    >
      <div className='card-body text-center'>
        <h6 className='card-title mb-2'>📞 Contact No.</h6>
        <p className='card-text mb-0'  style={{ wordBreak: 'break-word',fontSize: '0.9rem'  } }>+91 9140954440</p>
      </div>
    </div>
  </a>
</div>

  </section>
</>
  );
};


export default Contact;