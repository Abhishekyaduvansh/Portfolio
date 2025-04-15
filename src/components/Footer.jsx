import React from 'react'

function Footer() {
  return (
    <>
    <section className='bg-dark text-white'>
        <div className="container-fluid row ">
            <div className='col-md-3 mb-3  text-start mt-5 m-auto'>
                
                
            <h1 className='mt-2'>Portfolio.</h1>
      <hr />
      <p>&copy; 2024 - My Personal Portfolio Website</p>
      <small>
        Designed with ❤️ by
        <a href="https://github.com/AbhishekYaduvansh" className='link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'> Abhishek Yadav</a>
      </small>
      <p className='mt-3'>Email: <a href="mailto:abhiyadvnshi098@gmail.com" className='link-danger link-underline-opacity-25'>abhiyadvnshi098@gmail.com</a></p>
      <p>Based in Bangalore, India 🇮🇳</p>
            </div>
       
           <div className="col-1 m-auto mt-5  p-3 text-center  text-white list" >
            
            <a href="mailto:abhiyadvnshi098@gmail.com" ><i class="bx bx-envelope"></i>
            <br/>Email</a>
            
            <br/><br/>
            
            <a href="https://github.com/AbhishekYaduvansh"><i class="bx bxl-github"></i>
            <br/>GitHub</a>
            
            <br/><br/>
            

           </div>
           <div className="col-1 mt-5 m-auto p-3 text-center text-white list" >
           <a href="https://www.linkedin.com/in/abhishek-yadav-cse/"><i class="bx bxl-linkedin"></i>
            <br/>Linkedin</a>
            
            <br/><br/>
            <a href="https://www.instagram.com/abhiyaduvansh0/?hl=en"><i class="bx bxl-instagram"></i>
            <br/>Instagram</a>
            
            <br/><br/>
            </div>
           <div className="col-1 mt-5 p-3 m-auto text-center list">
           <a href="https://github.com/AbhishekYaduvansh"><i class="bx bxl-discord"></i>
            <br/>Discord</a>
            
            <br/><br/>
            <a href="/https://www.facebook.com/abhiyaduvansh0/"><i class="bx bxl-facebook"></i>
            <br/>Facebook</a>
            <br/><br/>
           

           </div>
           <div className="col-1 mt-5 m-auto p-3 text-center list">
           <a href="https://twitter.com/AbhiYaduvansh0"><i class="bx bxl-twitter"></i>
            <br/>Twitter</a>
            <br/><br/>
            <a href="https://wa.link/afn2i7"><i class="bx bxl-whatsapp"></i>
            <br/>Whatsapp</a>
            <br/><br/>
           </div>

        </div>
    </section>
    </>
  )
}

export default Footer