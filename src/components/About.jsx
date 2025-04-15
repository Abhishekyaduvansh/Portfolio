import React, { useEffect } from 'react';
import My from '../Images/My1.jpg';
import html from '../icons/html.webp';
import css from '../icons/css.webp';
import js from '../icons/js.webp';
import bs from '../icons/bootstrap-logo.png';
import re from '../icons/reactimg.png';
import java from '../icons/java.png';
import sql from '../icons/mySql.png';
import oracle from '../icons/oracle.png';
import spring from '../icons/spring-boot-logo.png';
import R from '../icons/R.png';
import tomcat from '../icons/tomcat.png';
import kali from '../icons/kali.jpg';
import 'animate.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

function About() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 100
    });
  }, []);

  return (
    <>
      {/* About Me Section */}
      <div>
        <div className='box bg-black' style={{ height: "200px" }} id="About"></div>

        <div className="container-fluid row bg-white m-auto p-0">
          <div className='col-md-3 text-center m-auto mt-0 col-sm-12'>
            <h1 className='mb-2 mt-2' style={{ display: "inline" }}>
              About <span style={{ color: "#9f1313" }} >Me </span>:
            </h1>
            <p className='mt-3' data-aos="zoom-in">
              Hi! I am a Full-Stack Developer with experience in building dynamic and responsive web applications using Java, Spring Boot, MySQL, and React.js.
              I have hands-on experience developing both frontend and backend systems, working with technologies like JavaScript, HTML, CSS, Bootstrap, and RESTful APIs.
              I’ve completed several projects using Java, JDBC, Servlets, MySQL, HTML, CSS, Bootstrap, and JavaScript, and I'm currently expanding my skills in React.js and modern frontend frameworks.
              Passionate about clean, efficient code and building applications that deliver great user experiences.
            </p>
          </div>

          <div className='col-md-6 imageDark m-auto p-3 rounded-5' data-aos="zoom-out">
            <img src={My} alt="Profile Pic" width="280px" />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className='bg-black text-white mt-5'>
  <div className="container-fluid d-flex justify-content-end">
    <h1 style={{ width: "300px" }} className='mt-5 animate__animated animate__fadeInLeft animate__delay-2s animate__slow-3s'>
      Skills<span className='text-danger'>.</span>
    </h1>
  </div>

  <div className="container mt-5">
    <div className="row justify-content-center text-center g-4">

      {/* Single Skill Card */}
      {[
        { img: html, label: 'HTML' },
        { img: css, label: 'CSS' },
        { img: js, label: 'JavaScript' },
        { img: bs, label: 'Bootstrap' },
        { img: re, label: 'ReactJs' },
        { img: java, label: 'Java' },
        { img: spring, label: 'SpringBoot' },
        { img: sql, label: 'MySQL' },
        { img: R, label: 'Hibernate' },
        { img: tomcat, label: 'Tomcat' },
        { img: kali, label: 'Kali Linux' },
        { img: oracle, label: 'Oracle SQL' }
      ].map((skill, idx) => (
        <div key={idx} className="col-6 col-md-3 col-lg-2 mb-5">
          <div className="skill-card p-2 "data-aos="zoom-in">
            <img src={skill.img} alt={skill.label} data-aos="fade-down" width="80px" />
            <p style={{ textShadow: "0 0 10px whitesmoke", marginTop: "10px" }}>{skill.label}</p>
          </div>
        </div>
      ))}

    </div>
  </div>

      </div>
    </>
  );
}

export default About;
