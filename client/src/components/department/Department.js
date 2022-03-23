import React from 'react'
import '../user/User.css'
import { Link } from 'react-router-dom'
function Department() {
    return (
        <div className="home">
            <img className="homeImg" src="/img/HOME.jpg" alt="" />
            <div className="home-title">
                <h1>Welcome Department</h1>
                <h3>Event Facility Management System</h3>
            </div>
            <div className="button-home">
                <Link to="/approvalequipments">
                    <button className="home-sign-in"> Approve Equipments</button>
                </Link>
                
            </div>
        
    </div>
    )
}

export default Department
