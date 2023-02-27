import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function Address() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Delivery address
      </Typography>
      <Grid container spacing={10}>
        <Grid item s={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address*"
            fullWidth
            autoComplete=" address-line1"
          />
        </Grid>
        <Grid item s={12}>
          <TextField
            id="address2"
            name="address2"
            label="Apt #, Suite, Floor (optional)"
            fullWidth
            autoComplete=" address-line2"
          />
        </Grid>
        <Grid item s={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City*"
            fullWidth
            autoComplete=" address-level2"
          />
        </Grid>
        <Grid item s={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
          />
        </Grid>
        <Grid item s={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Postal code*"
            fullWidth
            autoComplete="postal-code"
          />
        </Grid>
        <Grid item s={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="country"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Address;