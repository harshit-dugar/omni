import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function Account(){
    return(
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Account Information
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="fname"
                        name="fname"
                        label="Full Name"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="email"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Account;