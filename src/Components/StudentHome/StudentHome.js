import React from 'react'
import './StudentHome.css'
import wideImg from '../Assets/Images/WideImg.png'
import ViewWide from './ViewWide'
import Small from './Small'
function StudentHome() {
    document.body.style.background = "#5840bb";
    return (
        <div className="StudentHome">
            <div className="content">
                <div className="searchArea">
                    <input type="text" placeholder="Search..." />
                    <a>
                        <svg width="30" height="25" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2702 30C6.98596 30 0.270229 23.2843 0.270229 15C0.270229 6.71573 6.98596 0 15.2702 0C23.5545 0 30.2702 6.71573 30.2702 15C30.2702 23.2843 23.5545 30 15.2702 30ZM15.2695 26.8966C21.8398 26.8966 27.1661 21.5703 27.1661 15C27.1661 8.42972 21.8398 3.10345 15.2695 3.10345C8.69926 3.10345 3.37299 8.42972 3.37299 15C3.37299 21.5703 8.69926 26.8966 15.2695 26.8966ZM39.4666 41.8857L25.8711 28.2901C25.1586 27.5777 24.0035 27.5777 23.2911 28.2901C22.5786 29.0026 22.5786 30.1577 23.2911 30.8701L36.8867 44.4657C37.5991 45.1781 38.7542 45.1781 39.4666 44.4657C40.1791 43.7532 40.1791 42.5981 39.4666 41.8857Z" fill="white"/>
                        </svg>
                    </a>
                </div>
                <div className="wide">
                    <ViewWide img={wideImg} Title={"Title"} Description={"Description"}/>
                </div>
                <div className="semiwide">
                    <ViewWide img={wideImg} Title={"Title"} Description={"Description"}/>
                    <ViewWide img={wideImg} Title={"Title"} Description={"Description"}/>
                </div>
                <div className="small-area">
                    <div className="smalltitle">
                        Title
                    </div>
                    <div className="small">
                        <Small img={wideImg} Title={"Title"} Description={"Description"} />
                        <Small img={wideImg} Title={"Title"} Description={"Description"} />
                        <Small img={wideImg} Title={"Title"} Description={"Description"} />
                        <Small img={wideImg} Title={"Title"} Description={"Description"} />
                    </div>
                </div>
                <div className="small-area">
                    <div className="smalltitle">
                        Title
                    </div>
                    <div className="small">
                        <Small img={wideImg} Title={"Title"} Description={"Description"} />
                        <Small img={wideImg} Title={"Title"} Description={"Description"} />
                        <Small img={wideImg} Title={"Title"} Description={"Description"} />
                        <Small img={wideImg} Title={"Title"} Description={"Description"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentHome
