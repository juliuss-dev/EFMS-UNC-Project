import React from 'react'
import './Home.css'
// import { Link } from 'react-router-dom'
function Home() {

    return (
        <div className="home">
            <img className="homeImg" src="/img/HOME1.jpg" alt="" />
            <div className="home-title">
                <h1>University of Nueva Caceres</h1>
                <h3>Event Facility Management System</h3>
            </div>
            <div className="button-home">
                {/* <Link to="/signin">
                    <button className="home-sign-in">Sign In</button>
                </Link>
                
                <Link to="/signup">
                    <button className="home-sign-up">Sign Up</button>
                </Link> */}
            </div>
            
        </div>
    )
}

export default Home
