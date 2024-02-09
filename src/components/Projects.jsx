import React from 'react'


function Projects() {
  return (
    <>
     <section className='container text-center mt-5 mb-5 ' id='projects'> 
          {/* This section is for showcase my projects */}
          <h1  style={{display:"inline"}}  className='text-center  fw-bold fs-1 mt-5 m-auto ' >Projects<span className='text-danger'>.</span></h1>
          <div className='row container  justify-content-center m-auto mt-5 mb-4 '>

           <div className='col mt-5 m-auto' data-Aos= "fade-up" >
                  <div class="book">
                    <p></p>
                    <div class="cover  text-white">
                      <p>YelpCamp</p>
                    </div>
                  </div>
                  
           </div>
           <div className="col mt-5">
            <h3 className='text-center '>YelpCamp</h3>
            <small>YelpCamp is a website which is basically need for the people who love travelling and camping (Adventure lover) By using Web-technologies we have created 
               the website that anyone can login and upload or see the camping places and price, People can comment and do many more stuff.</small>
            <h5 className='mt-3'>Technologies Used</h5>
            <span style={{ fontSize:"25px"}} className='m-auto'><i class='bx bxl-html5'  style={{color:"orange"}}></i> &nbsp;<i class='bx bxl-css3'  style={{color:"blue"}}></i> &nbsp;<i class='bx bxl-javascript'  style={{color:"yellow"}}></i>&nbsp; 
            <i class='bx bxl-nodejs'  style={{backgroundColor:"green",fontSize:"20px", marginLeft:"7px",  }}></i> &nbsp;<i class='bx bxl-mongodb'  style={{color:"green"}}></i> &nbsp;
            </span>

            
           
           </div>
           </div>
           <div className='row container  justify-content-center m-auto mt-5 mb-4 '>
           <div className='col mt-5' data-Aos= "fade-up">
                  <div className="book">
                    <p></p>
                    <div className="cover  text-white">
                   <p>Bank Management</p>
                    </div>
                  </div>
             
           </div>
           <div className="col mt-5">
            <h3 className='text-center '>Bank Management</h3>
            <small>Bank Management System is a web-app in which there is a two interface One is Admin and Another is user.
               Admin can perform operations like CRUD on Customer and for customer there is a ATM interface</small>
            <h5 className='mt-3'>Technologies Used</h5>
            <span style={{color:"red", fontSize:"25px"}} className='m-auto'><i class='bx bxl-html5'  style={{color:"orange"}}></i> &nbsp;<i class='bx bxl-css3'  style={{color:"blue"}}></i> &nbsp;<i class='bx bxl-javascript'  style={{color:"yellow"}}></i>&nbsp; 
            <i class='bx bxl-java'  style={{color:"Orange"}}></i> &nbsp;<i class='bx bxs-data'  style={{color:"green"}}></i> &nbsp;
            </span>

            
           
           </div>
           </div>
           <div className='row container  justify-content-center m-auto mt-5 mb-4 '>
           <div className='col mt-5' data-Aos= "fade-up">
                  <div class="book">
                    <p>
                    

                    </p>
                    <div class="cover text-white" >
                   
                      <p>Expense Tracker</p>
                    </div>
                  </div>
           </div>
           <div className="col mt-5">
            <h3 className='text-center '>Expense Tracker</h3>
            <small>Expense Tracker is a webApplication, which is used to take inputs in positive and negetive values and keep a track of Expenses 
              so that anyone who have spending issue can have a track or there Expenses. Created just for Practice react context Api and Avoid props drilling </small>
            <h5 className='mt-3'>Technologies Used</h5>
            <span style={{ fontSize:"25px"}} className='m-auto'><i class='bx bxl-html5' style={{color:"orange"}}></i> &nbsp;<i class='bx bxl-css3'  style={{color:"blue"}}></i> &nbsp;
            <i class='bx bxl-javascript'  style={{color:"yellow"}}></i>&nbsp; <i class='bx bxl-react'  style={{color:'skyblue'}}></i> &nbsp;
            </span>

            
           
           </div>
           </div>
           <div className='row container  justify-content-center m-auto mt-5 mb-5'>
           <div className='col mt-5' data-Aos= "fade-up">
                  <div class="book">
                    <p>
                      
                    </p>
                    <div class="cover  text-white">
                      <p>Covi-Info</p>
                    </div>
                  </div>
           </div>
           <div className="col mt-5">
           <h3 className='text-center '>CovInfo</h3>
            <small>n-Cov Tracker: Covid-19 Tracker is a small project which shows the Coronavirus cases of the World and the Particular Country. 
              It is also works based on Geolocation.</small>
            <h5 className='mt-3'>Technologies Used</h5>
            <span style={{ fontSize:"25px"}} className='m-auto'><i class='bx bxl-html5' style={{color:"orange"}}></i> &nbsp;<i class='bx bxl-css3'  style={{color:"blue"}}></i> &nbsp;
            <i class='bx bxl-javascript'  style={{color:"yellow"}}></i>&nbsp;
            </span>

            
           
           </div>

          </div>


    <a href="https://github.com/AbhishekYaduvansh" className='Button mt-5 mb-3' style={{textDecoration:"none"}}>Click for More</a>
        </section>

    
    </>
  )
}

export default Projects