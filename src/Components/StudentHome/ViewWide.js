import React from 'react'
import './ViewWide.css'
import {Link} from "react-router-dom";
function ViewWide(props) {
    return (
        <div className="ViewWide">
            <img src={props.img} alt="" />
            <div className="image-over">
                <h1>{props.Title}</h1>
                <h2>{props.Description}</h2>
                <Link to="/Details"  className="btn">
                    Know More
                </Link>
            </div>
        </div>
    )
}

export default ViewWide
