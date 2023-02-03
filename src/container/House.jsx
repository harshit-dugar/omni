import React from "react";
import './house.css';
import room from '../assets/videos/Room video/Desktop.mp4'

function House(){
    return(
        <div id="room" className="container">
            <div className="child_container_room">
                <p>Amazing for <br/> your house</p>
                <video autoPlay loop muted src={room}/>
            </div>
        </div>
    );
}

export default House;