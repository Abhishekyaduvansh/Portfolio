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
           <img src={My} alt="" width={"300vw"} />
        </div>
        <div className='col text-center headings'>
          <h3 className=' ' style={{display:"inline"}}>Hey, It's Me</h3><br/>
          <h1 className=' text-white'  style={{display:"inline"}} >Abhishek Yadav</h1> <br/>
            <h1 className='' style={{display:"inline"}}>And I'm a</h1><br/>
            <h1 ><div className="message"><div className="word1">Full-Stack Developer</div></div></h1>
          

    <div className='container homelink d-flex  justify-content-center align-items-center'>
       <a href="https://www.linkedin.com/in/abhishek-yadav-cse/"><i class='bx bxl-linkedin'></i> </a>
       
        
        <a href="https://github.com/Abhishekyaduvansh"><i class='bx bxl-github'></i></a>
        

        
       <a href="https://www.instagram.com/abhiyaduvansh0/?hl=en"><i class='bx bxl-instagram'></i></a>
    </div>
</div>
</div>
   </div>

   <div className='container-fluid m-0 pt-5 bg-black row justify-content-center' >
    <div className="col-sm-12 col-md-8 text-center features "> 
      <p className="col" style={{color:"#c8bcbc"}}> <i class='bx bxs-quote-alt-left text-white'></i>  I'm a Full-Stack Student with Hands-on experience on projects. My Exprtise is to create website design layout database management, 
        Frontend design, and many more....
        I am Abhishek Yadav, A recent graduated Fresher from the prestigious Accuarte Institute of management and technology (AKTU),
        Gr. Noida in Btech Computer Science Engineering . I love to code and solve problems using programming languages
        . I have always been fascinated by the world of coding and
        technology. My journey in this field began when I was just 18 years old.
        Since then, I have had an incredible journey where I not only learned how to code but
        also developed skills in designing user interfaces, working with databases,
        understanding algorithms and data structures. Working on my skills to grow more. <i class='bx bxs-quote-alt-right text-white'></i></p>
        
        <div className='home'>
          
   <a href="#About" className='btn btn-md-danger mt-5 mb-5 text-white'>More About me</a>

    </div>
    </div>
   
    
   </div>
            </>
  )
}

export default Home