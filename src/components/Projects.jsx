

import React from 'react'

function Projects() {
  return (
    <>
      <section className='container text-center mt-5 mb-5 ' id='projects'>
        {/* This section is for showcasing my projects */}
        <h1 style={{ display: "inline" }} className='text-center fw-bold fs-1 mt-5 m-auto'>Projects<span className='text-danger'>.</span></h1>

        {/* Project 1: YelpCamp */}
        {/* <div className='row container justify-content-center m-auto mt-5 mb-4 '>
          <div className='col mt-5 m-auto' data-Aos="fade-up">
            <div className="book">
              <p></p>
              <div className="cover text-white">
                <p>YelpCamp</p>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <h3 className='text-center'>YelpCamp</h3>
            <small>YelpCamp is a camping site listing platform for adventure lovers, allowing users to log in, post campsites, check prices, and comment.</small>
            <h5 className='mt-3'>Technologies Used</h5>
            <span style={{ fontSize: "25px" }}><i class='bx bxl-html5' style={{ color: "orange" }}></i>&nbsp;
              <i class='bx bxl-css3' style={{ color: "blue" }}></i>&nbsp;
              <i class='bx bxl-javascript' style={{ color: "yellow" }}></i>&nbsp;
              <i class='bx bxl-nodejs' style={{ backgroundColor: "green", fontSize: "20px" }}></i>&nbsp;
              <i class='bx bxl-mongodb' style={{ color: "green" }}></i>
            </span>
          </div>
        </div> */}

        {/* Project 5: Clothing Platform */}
        <div className='row container justify-content-center m-auto mt-5 mb-4 '>
          <div className='col mt-5' data-Aos="fade-up">
            <div className="book">
              <p></p>
              <div className="cover text-white">
                <p>Clothing Platform</p>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <h3 className='text-center'>Clothing Platform</h3>
            <small>A full-fledged e-commerce platform for clothing, with product management, cart, authentication, and user management modules.</small>
            <h5 className='mt-3'>Technologies Used</h5>
            <span style={{ fontSize: "25px" }}>
              <i class='bx bxl-java' style={{ color: "orange" }}></i>&nbsp;
              <i class='bx bxl-spring-boot' style={{ color: "green" }}></i>&nbsp;
              <i class='bx bxl-react' style={{ color: "skyblue" }}></i>&nbsp;
              <i class='bx bxs-data' style={{ color: "green" }}></i>
            </span>
          </div>
        </div>

        {/* Project 6: Bakery Shop Web App */}
        <div className='row container justify-content-center m-auto mt-5 mb-4 '>
          <div className='col mt-5' data-Aos="fade-up">
            <div className="book">
              <p></p>
              <div className="cover text-white">
                <p>Bakery Shop</p>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <h3 className='text-center'>Bakery Shop Web App</h3>
            <small>A bakery management system with secure login, product management for shopkeepers, and JWT-based authentication.</small>
            <h5 className='mt-3'>Technologies Used</h5>
            <span style={{ fontSize: "25px" }}>
              <i class='bx bxl-java' style={{ color: "orange" }}></i>&nbsp;
              <i class='bx bxl-spring-boot' style={{ color: "green" }}></i>&nbsp;
              <i class='bx bxl-react' style={{ color: "skyblue" }}></i>&nbsp;
              <i class='bx bxs-data' style={{ color: "green" }}></i>
            </span>
          </div>
        </div>

        {/* Project 7: Doctors Booking API */}
        <div className='row container justify-content-center m-auto mt-5 mb-4 '>
          <div className='col mt-5' data-Aos="fade-up">
            <div className="book">
              <p></p>
              <div className="cover text-white">
                <p>Doctors Booking API</p>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <h3 className='text-center'>Doctors Booking API</h3>
            <small>A RESTful API enabling patients to book appointments, search doctors by symptoms or specialty, and check ratings. Backend tested using Postman.</small>
            <h5 className='mt-3'>Technologies Used</h5>
            <span style={{ fontSize: "25px" }}>
              <i class='bx bxl-java' style={{ color: "orange" }}></i>&nbsp;
              <i class='bx bxl-spring-boot' style={{ color: "green" }}></i>&nbsp;
              <i class='bx bxs-data' style={{ color: "green" }}></i>
            </span>
          </div>
        </div>

        {/* Project 2: Bank Management */}
        <div className='row container justify-content-center m-auto mt-5 mb-4 '>
          <div className='col mt-5' data-Aos="fade-up">
            <div className="book">
              <p></p>
              <div className="cover text-white">
                <p>Bank Management</p>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <h3 className='text-center'>Bank Management</h3>
            <small>A Java-based system featuring admin and customer interfaces. Admin can manage customer data, while customers use an ATM-style portal.</small>
            <h5 className='mt-3'>Technologies Used</h5>
            <span style={{ fontSize: "25px" }}>
              <i class='bx bxl-html5' style={{ color: "orange" }}></i>&nbsp;
              <i class='bx bxl-css3' style={{ color: "blue" }}></i>&nbsp;
              <i class='bx bxl-javascript' style={{ color: "yellow" }}></i>&nbsp;
              <i class='bx bxl-java' style={{ color: "orange" }}></i>&nbsp;
              <i class='bx bxs-data' style={{ color: "green" }}></i>
            </span>
          </div>
        </div>

        {/* Project 3: Expense Tracker */}
        <div className='row container justify-content-center m-auto mt-5 mb-4 '>
          <div className='col mt-5' data-Aos="fade-up">
            <div className="book">
              <p></p>
              <div className="cover text-white">
                <p>Expense Tracker</p>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <h3 className='text-center'>Expense Tracker</h3>
            <small>A personal finance tracker that logs income and expenses, built to practice React Context API and avoid prop drilling.</small>
            <h5 className='mt-3'>Technologies Used</h5>
            <span style={{ fontSize: "25px" }}>
              <i class='bx bxl-html5' style={{ color: "orange" }}></i>&nbsp;
              <i class='bx bxl-css3' style={{ color: "blue" }}></i>&nbsp;
              <i class='bx bxl-javascript' style={{ color: "yellow" }}></i>&nbsp;
              <i class='bx bxl-react' style={{ color: "skyblue" }}></i>
            </span>
          </div>
        </div>

        {/* Project 4: CovInfo */}
        <div className='row container justify-content-center m-auto mt-5 mb-4 '>
          <div className='col mt-5' data-Aos="fade-up">
            <div className="book">
              <p></p>
              <div className="cover text-white">
                <p>CovInfo</p>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <h3 className='text-center'>CovInfo</h3>
            <small>A Covid-19 tracker that displays global and country-wise case data, with geolocation-based insights.</small>
            <h5 className='mt-3'>Technologies Used</h5>
            <span style={{ fontSize: "25px" }}>
              <i class='bx bxl-html5' style={{ color: "orange" }}></i>&nbsp;
              <i class='bx bxl-css3' style={{ color: "blue" }}></i>&nbsp;
              <i class='bx bxl-javascript' style={{ color: "yellow" }}></i>
            </span>
          </div>
        </div>

        {/* More Projects Link */}
        <a href="https://github.com/AbhishekYaduvansh" className='Button mt-5 mb-3' style={{ textDecoration: "none" }}>Click for More</a>

      </section>
    </>
  )
}

export default Projects
