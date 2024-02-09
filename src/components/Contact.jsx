

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
    

<section className='container-fluid bg-black p-5 text-center m-auto mb-0' id='contact'> 
  
    <h1  style={{display:"inline"}}  className='text-center  text-white fw-bold fs-1 mt-5 m-auto '>Contact Me<span className='text-danger'>.</span></h1>
  <div className='container d-flex ' >
<form ref={form} onSubmit={sendEmail} className='row  m-auto  p-5 ' >
   <input type="text" name="user_name" id="" placeholder='Enter Your Name' className='form-control bg-transparent text-white mt-4'/>
    <input type="email" name="user_email" id="" className='form-control text-white bg-transparent m-auto mt-4' placeholder='Enter Your Email'/>
    <textarea name="message" id="" cols="20" rows="4" placeholder='Enter Your Message' className='form-control text-white bg-transparent m-auto mt-4'></textarea>
    <div className='mt-4'>
    <input className='btn btn-outline-light' type='submit' value="send" onClick={submitted}></input>
    </div>
    </form>
    </div>
  </section>
</>
  );
};


export default Contact;