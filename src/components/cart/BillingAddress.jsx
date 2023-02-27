import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Address from "./Address";

function Billing(){
    return(
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Billing address
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox color="secondary" name="saveAddress" value="yes" />
                        }
                            label="Use this address for payment details"
                    />
                    <Address />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Billing;