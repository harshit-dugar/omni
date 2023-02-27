import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

function Review() {
    return (
        <React.Fragment>
        <Typography variant="h6" gutterBottom>
            Order summary
        </Typography>
        <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Product</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
            <Typography gutterBottom>Price</Typography>
            </Grid>
        </Grid>
        </React.Fragment>
    );
}

export default Review;