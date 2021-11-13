import React from 'react'
import './Form.css'
import {Link} from "react-router-dom";
function Form() {
    document.body.style.background = "#5840bb";
    return (
        <div className="Form">
            <h1>Sign Up</h1>
            <p>Get Started Absolutely Free</p>
            
            <div className="inputbox">
                <h1>Name</h1>
                <input type="text" placeholder="Name" />
            </div>

            <div className="inputbox">
                <h1>Phone Number</h1>
                <input type="text" placeholder="PhoneNumber" />
            </div>

            <div className="inputbox">
                <h1>Location</h1>
                <input type="text" placeholder="Location" />
            </div>

            <Link to="/TeacherForm1">Next</Link>
        </div>
    )
}

export default Form
