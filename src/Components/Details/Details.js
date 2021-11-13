import React ,{useState} from 'react'
import './Details.css'
import wideImg from '../Assets/Images/WideImg.png'
import Small from '../StudentHome/Small'
function Details(props) {
    const [bid,setBid] = useState(props.details.avg)
    const bidinc = () => {
        setBid(bid + 1);
    }
    const biddec = () => {
        setBid(bid - 1);
        if(bid < 0){
            setBid(0)
        }
    }
    return (
        <div className="Details">
            <div className="detailsGrid">
                <img src={props.details.img} alt="" />
                <div className="details-content">
                    <h1>{props.details.title}</h1>
                    <p>{props.details.desc}</p>
                    <h3>{'Years of Experiance: ' + props.details.exp} </h3>
                    <h2>{'Average Price: '+ props.details.avg}</h2>
                    <div className="bid">
                        <a onClick={bidinc}>+</a>
                            <p>{bid}</p>
                        <a onClick={biddec}>-</a>
                    </div>
                    <a>Confirm Bid</a>
                    
                </div>
            </div>
            <div className="small-area">
                    <div className="smalltitle">
                        Similar products you might like:
                    </div>
                    <div className="small">
                        <Small img={wideImg} Title={"Title"} Description={"Description"} />
                        <Small img={wideImg} Title={"Title"} Description={"Description"} />
                        <Small img={wideImg} Title={"Title"} Description={"Description"} />
                        <Small img={wideImg} Title={"Title"} Description={"Description"} />
                    </div>
                </div>
        </div>
    )
}

export default Details
