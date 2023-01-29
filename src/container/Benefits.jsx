import React from "react";
import { BenefitItem } from "../components";
import { benefitList } from "../components";

function Benefits(){
    return(
        <div>
        <BenefitItem 
            head={benefitList.benefitSection[0].title}
            description={benefitList.benefitSection[0].description}
            image={benefitList.benefitSection[0].image}
            button={benefitList.benefitSection[0].button}
        />
        <BenefitItem 
            head={benefitList.benefitSection[1].title}
            description={benefitList.benefitSection[1].description}
            image={benefitList.benefitSection[1].image}
            button={benefitList.benefitSection[1].button}
        />
        <BenefitItem 
            head={benefitList.benefitSection[2].title}
            description={benefitList.benefitSection[2].description}
            image={benefitList.benefitSection[2].image}
            button={benefitList.benefitSection[2].button}
        />
        </div>
    );
}

export default Benefits;