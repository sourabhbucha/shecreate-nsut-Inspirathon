import React from 'react'
import './Form.css'
import {Link} from "react-router-dom";
function Form1() {
    document.body.style.background = "#5840bb";
    return (
        <div className="Form">
            <h1>Sign Up</h1>
            <p>Get Started Absolutely Free</p>
            
            <div className="inputbox">
                <h1>About Yourself</h1>
                <textarea  rows="5" placeholder="About Yourself" />
            </div>

            <div className="inputbox">
                <h1>Years of Experience</h1>
                <input type="text"  placeholder="Years of Experience" />
            </div>

            <Link to="/TeacherForm2">Next</Link>
        </div>
    )
}

export default Form1
