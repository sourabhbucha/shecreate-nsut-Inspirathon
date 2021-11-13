import React from 'react'
import './Small.css'
import {Link} from "react-router-dom";
function Small(props) {
    return (
        <div className="Small">
            
            <img src={props.img} alt="" />
            <div className="image-over-small">
                <Link to="/Details"><h1>{props.Title}</h1></Link>
                <h2>{props.Description}</h2>
            </div>
        </div>
    )
}

export default Small
