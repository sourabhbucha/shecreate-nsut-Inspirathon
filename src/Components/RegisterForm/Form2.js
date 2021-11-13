import React from 'react'
import './Form.css'
import {Link} from "react-router-dom";
function Form2() {
    document.body.style.background = "#5840bb";
    return (
        <div className="Form">
            <h1>Sign Up</h1>
            <p>Get Started Absolutely Free</p>

            <div className="inputbox">
                <h1>Title of your product</h1>
                <input type="text"  placeholder="Title of your product" />
            </div>

            <div className="inputbox">
                <h1>Video example of your product</h1>
                <textarea  rows="5" placeholder="Video example of your product" />
            </div>
            
            <Link to="/Home">Finish</Link>
        </div>
    )
}

export default Form2
