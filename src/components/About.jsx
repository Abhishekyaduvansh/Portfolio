import React, { useEffect } from 'react'
import My from '../Images/My1.jpg'
import html from '../icons/html.webp'
import css from '../icons/css.webp'
import js from '../icons/js.webp'
import bs from '../icons/bootstrap-logo.png'
import re from '../icons/reactimg.png'
import java from '../icons/java.png'
import sql from  '../icons/mySql.png'
import oracle from '../icons/oracle.png'
import spring  from '../icons/spring-boot-logo.png'
import R from '../icons/R.png'

import tomcat from '../icons/tomcat.png'
import kali from '../icons/kali.jpg'
import 'animate.css';
import 'aos/dist/aos.css';
import Aos from "aos";

function About() {

  useEffect(()=>
  {
    Aos.init({duration:2000,
    offset:100});
    
  },[])

  return (
    <>
    <div >
      <div className='box bg-black ' style={{height:"200px"}} id="About">

      </div>

    <div className="container-fluid row  bg-white m-auto p-0 " >
        <div className='col-md-3  text-center  m-auto mt-0  col-sm-12'>
        <h1 style={{display:"inline"} } className='mb-2 mt-2'>About <span style={{color:"#9f1313"}}>Me </span>:-</h1>
        <p  className='mt-3' data-Aos ="zoom-in">Hi! I am a Full-stack developer with experience in building websites and applications
            using JavaScript, MySQL, HTML/CSS, Bootstrap and responsive design.
            I have Knowledge as well as hands-on Java Full-Stack, I have done some projects Using Java, JDBC, Servlets, MySql, Html, Css, BootStrap and JavaScript.
        </p>
           
        </div>
        <div className='col-md-6 imageDark  m-auto p-3 rounded-5 ' >
            <img src={My} alt="Profile Pic" width={"280px"} />
        </div>

       
    </div>
    
    </div>
    <div  className='bg-black text-white mt-5 '>
      <div class="container-fluid  d-flex justify-content-end ">
         <h1 style={{width:"300px"}} className='mt-5 animate__animated animate__fadeInLeft animate__delay-2s animate__slow-3s'>Skills<span className='text-danger '>.</span></h1>
      </div>
      <div className='container row text-white m-auto  text-center skills mt-5'>
        <span className=' col-2 '>
        <img src={html} alt=""   data-aos="fade-down" width={"100px"}/>
        <p style={{textShadow:"0 0 10px whitesmoke"}}>HTML</p>
        </span>
      
      <span className="col-2 "> <img src={css} alt=""   data-aos="fade-down" width={"100px"}/><p style={{textShadow:"0 0 10px whitesmoke"}}>CSS</p></span>
      <span className="col-2 "> <img src={js} alt=""  data-aos="fade-down" width={"100px"}/><p style={{textShadow:"0 0 10px whitesmoke"}}>JavaScript</p></span>
       <span className="col-2  mt-3"> <img src={bs} alt=""   data-aos="fade-down" width={"90px"}/><p style={{textShadow:"0 0 10px whitesmoke"}}>BootStrap</p></span>
      </div>

      <div className='container row text-white m-auto  text-center skills mt-5'>
        
        <span className=' col-2 '><img src={re} alt=""   data-aos="fade-down" width={"100px"}/><p style={{textShadow:"0 0 10px whitesmoke"}}>ReactJs</p></span>
      
      <span className="col-2 "> <img src={java} alt=""   data-aos="fade-down" width={"100px"}/><p style={{textShadow:"0 0 10px whitesmoke"}}>Java</p></span>
      <span className="col-2 mt-1"> <img src={spring} alt=""   data-aos="fade-down" width={"100px"}/><p style={{textShadow:"0 0 10px whitesmoke"}}>SpringBoot</p></span>
       <span className="col-2  "> <img src={sql} alt=""   data-aos="fade-down"  width={"90px"}/><p style={{textShadow:"0 0 10px whitesmoke"}}>MySQL</p></span>
      </div>
      
      <div className='container row text-white m-auto  text-center skills mt-5'>
        
        <span className=' col-2 '><img src={R} alt=""   data-aos="fade-down" width={"100px"}/><p style={{textShadow:"0 0 10px whitesmoke"}}>Hibernate</p></span>
      
      <span className="col-2 "> <img src={tomcat} alt=""   data-aos="fade-down" width={"100px"}/><p style={{textShadow:"0 0 10px whitesmoke"}}>Tomcat</p></span>
      <span className="col-2 mt-1"> <img src={kali} alt=""   data-aos="fade-down" width={"100px"}/><p style={{textShadow:"0 0 10px whitesmoke"}}>Kali Linux</p></span>
       <span className="col-2  "> <img src={oracle} alt=""   data-aos="fade-down"  width={"90px"}/><p style={{textShadow:"0 0 10px whitesmoke"}}>Oracel SQL</p></span>
      </div>
        </div>
       
       

    </>
  )
}

export default About