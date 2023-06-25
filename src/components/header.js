import React, { useState } from "react"
import { NavLink } from "react-router-dom"


const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg b" style={{backgroundColor:"lightblue"}}>
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand me-2" href="https://www.paypal.com/in/home">
            <img
              src="https://tse2.explicit.bing.net/th?id=OIP.HRpUS-C673gIu3UqH5qK7gHaIv&pid=Api&P=0&h=180"
              height={45}
              alt=""
              loading="lazy"
              style={{ margin: "25px", backgroundColor:"blue" }}
            />
          </a>
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/homepage">
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li> */}
              

              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/event">
                  Event Handling
                </NavLink>
              </li> */}
              
            
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Paypalactivity">
                Activity
                </NavLink>
              </li>
             
            </ul>
            {/* Left links */}
            <div className="d-flex align-items-center">
            <li>
                <a  href="http://127.0.0.1:5500/frontend/src/components/contactus.html">Contact US</a>
              
            </li>

                {
                  !loggedIn ?

                  <button type="button" className="btn btn-link px-3 me-2" onClick={() => { setLoggedIn(true) }}>
                    Login
                  </button>
                  :
                  <button className="btn btn-danger" onClick={() => { setLoggedIn(false) }}>
                    <i class="fas fa-sign-out-alt"></i> Logout
                  </button>
                }
              
                <button type="button" className="btn btn-primary me-3">Sign up for free
                <a href="http://127.0.0.1:5501/login.html">Sign up for free</a>
              </button>
              <a className="btn btn-dark px-3" href="https://github.com/Poorvisrivastava15" role="button">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  )
}

export default Header

