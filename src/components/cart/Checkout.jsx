import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";
import Account from "./Account";
import Address from "./Address";
import Billing from "./BillingAddress";
import "./cart.css";
import cartImg from "../../assets/order/product.svg";
import Review from "./Review";

const steps = ["Account Information","Delivery address", "Billing Address", "Review"];
function getStepContent(step) {
    switch (step) {
        case 0:
            return <Account />;
        case 1:
            return <Address />;
        case 2:
            return <Billing />;
        case 3:
            return <Review />;
        default:
            console.log("Unknown step");
    }
}
function Checkout() {
    const [step,setStep]=React.useState(0);
    function handleNext (){
        setStep(step+1);
    }
    function handleBack(){
        if(step>0)
        setStep(step-1);
    }
    console.log(step);
    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <div className="checkout_container">
                <div className="form_container">
                    <Stepper activeStep={step} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {step === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order confirmation, and will
                                    send you an update when your order has shipped.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(step)}
                                <div className="checkout_btns">
                                    <button onClick={handleBack} className="checkout_btn">Back</button>
                                    <button onClick={handleNext} className="checkout_btn">{step===steps.length-1? "Next":"Next"} </button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </div>
                <div className="summary_container">
                    <h3>Order Details</h3>
                    <div className="product_summary">
                        <div className="product_info_summary">
                            <div className="product_image_summary">
                                <img src={cartImg} alt=""/>
                            </div>
                            <div className="product_details_summary">
                                <h5>Omni Screen</h5>
                                <h4>Standard, 19"</h4>
                            </div>
                        </div>
                        <h5>$300 USD</h5>
                    </div>
                    <div className="total_summary">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;