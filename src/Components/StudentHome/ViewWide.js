import React from 'react'
import './ViewWide.css'
function ViewWide(props) {
    return (
        <div className="ViewWide">
            <img src={props.img} alt="" />
            <div className="image-over">
                <h1>{props.Title}</h1>
                <h2>{props.Description}</h2>
                <a href="" className="btn">
                    Know More
                </a>
            </div>
        </div>
    )
}

export default ViewWide
