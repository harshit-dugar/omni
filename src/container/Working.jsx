import React from "react";
import { Work } from "../components";
import { workingList } from "./index";

function Working(){
    const heading = {
        fontWeight: "700",
        fontSize: "60px",
        lineHeight: "94.87%",
        textAlign: "center",
        textTransform: "capitalize",
        color: "#141414",
        margin: "200px 0px 50px 0px"
    }
    return(
        <div>
        <h1 style={heading}><strong>How It Works</strong></h1>
        <Work 
            head={workingList.workSection[0].title}
            description={workingList.workSection[0].description}
            image={workingList.workSection[0].image}
            button={workingList.workSection[0].button}
        />
        <Work 
            head={workingList.workSection[1].title}
            description={workingList.workSection[1].description}
            image={workingList.workSection[1].image}
            button={workingList.workSection[1].button}
        />
        <Work 
            head={workingList.workSection[2].title}
            description={workingList.workSection[2].description}
            image={workingList.workSection[2].image}
            button={workingList.workSection[2].button}
        />
        </div>
    );
}

export default Working;