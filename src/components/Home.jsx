import React, { useEffect} from 'react'
import '../Style/Styles.css'
import My from '../Images/My1.jpg'


import 'aos/dist/aos.css';
import Aos from "aos";
function Home() {
  
  
  useEffect(()=>
  {
    Aos.init({duration:2000,
    offset:100});
    
  },[])
  return (
    <>
    <div className=' p-5 bg-black justify-content-space-evenly align-items-center text-white ' id='home'>
      <div className='row  d-flex '>
        <div className='col-md-5 image'>
           <img src={My} alt="" width={"300vw"}data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200" />
        </div>
        <div className='col text-center headings' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200">
          <h3 className=' ' style={{display:"inline"}}>Hey, It's Me</h3><br/>
          <h1 className=' text-white'  style={{display:"inline"}} >Abhishek Yadav</h1> <br/>
            <h1 className='' style={{display:"inline"}}>And I'm a</h1><br/>
            <h1 ><div className="message"><div className="word1">Full-Stack Developer</div></div></h1>
          

    <div className='container homelink d-flex  justify-content-center align-items-center' >
       <a href="https://www.linkedin.com/in/abhishek-yadav-cse/"><i class='bx bxl-linkedin'></i> </a>
       
        
        <a href="https://github.com/Abhishekyaduvansh"><i class='bx bxl-github'></i></a>
        

        
       <a href="https://www.instagram.com/abhiyaduvansh0/?hl=en"><i class='bx bxl-instagram'></i></a>
    </div>
</div>
</div>
   </div>

   <div className='container-fluid m-0 pt-5 bg-black row justify-content-center' >
    <div className="col-sm-12 col-md-8 text-center features "> 
      <p className="col" style={{color:"#c8bcbc"} } data-aos="fade-out" data-aos-duration="1500" data-aos-delay="200"> <i class='bx bxs-quote-alt-left text-white'></i> I’m a Full-Stack Developer with 1+ year of professional experience working on real-time projects and application development. My expertise includes website design, API development, database management, microservices architecture, and frontend development.

I am Abhishek Yadav, a B.Tech Computer Science Engineering graduate from the Accurate Institute of Management and Technology (AKTU), Greater Noida.

Passionate about coding, problem-solving, and delivering scalable, high-performance applications, I began my journey in technology at the age of 18. Since then, I’ve built a strong foundation in Java, Spring Boot, React.js, MySQL, HTML, CSS, JavaScript, and REST APIs. I’ve also gained hands-on experience working with Microservices, Spring Security, and Spring Cache to enhance system security, performance, and modularity.

Over time, I’ve honed my skills in user interface design, database optimization, algorithms, and data structures. I’m dedicated to continuously evolving as a developer by learning new technologies, improving existing skills, and staying current with industry best practices.

Driven by curiosity and a genuine love for building meaningful digital solutions, I'm always eager to take on new challenges, contribute to impactful projects, and grow in the world of software development..<i class='bx bxs-quote-alt-right text-white'></i></p>
        
        <div className='home'>
          
   <a href="#About" className='btn btn-md-danger mt-5 mb-5 text-white'>More About me</a>

    </div>
    </div>
   
    
   </div>
            </>
  )
}

export default Home