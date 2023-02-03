import React from "react";
import head from "../../assets/adold4.svg";
import video1 from '../../assets/videos/about page/phase 1.mp4'
import video2 from '../../assets/videos/about page/phase 2.mp4'
import video3 from '../../assets/videos/about page/phase 3.mp4'

function Story(){
    return (
        <div className="story_container">
            <div className="story_head">
                <h1>Story Of Ads</h1>
                <img src={head} alt='Head'/>
                <p>How marketing changed over time and what’s going to happen now.</p>
            </div>
            <div className="story">
                <p className="main">Phase I - The start</p>
                <div className="story_video">
                    <video autoPlay loop muted src={video1} height="177px" width="310px"/>
                </div>
                <p>It all started on 1st July 1941, when the very first ad was <br/>broadcasted for the world on tv.<br/><br/>
                    First time  in history a business could promote itself <br/> directly into someone's living room.<br/><br/>
                    A 6 sec video gave birth to an industry that is now worth <br/> $590 Billion.<br/>
                </p>
            </div>
            <div className="story">
                <p className="main">Phase II - The present</p>
                <div className="story_video">
                    <video autoPlay loop muted src={video2} height="177px" width="300px"/>
                </div>
                <p>Fast forward to 2004. The year facebook was founded.<br/><br/>
                    Zuckerberg was a genius; after getting millions of users <br/> on its platform. He decided to monetize it by opening it<br/>up for brands to advertise themselves.<br/><br/>
                    This again disrupted the advertisement industry. And the <br/> phrase “digital marketing” become very popular<br/>
                </p>
            </div>
            <div className="story">
                <p className="main">Phase III - The future</p>
                <div className="story_video">
                    <video autoPlay loop muted src={video3} height="177px" width="310px"/>
                </div>
                <p>Introduce Omni <br/>
                </p>
            </div>
        </div>
    )
}

export default Story;