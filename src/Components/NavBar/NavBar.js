import React from 'react'
import './NavBar.css'
import {Link} from "react-router-dom";
function NavBar() {
    return (
        <div className="NavBar"> 
            <div className="title">
                SheCreates
            </div>
            <hr />
            <div className="options">
                <Link to="/StudentHome">Home</Link>
                <a>About</a>
                <a>Contact</a>
            </div>
        </div>
    )
}

export default NavBar
