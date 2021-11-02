import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Grid } from "@mui/material";

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <Grid container spacing={4}>
        <Grid item lg={4}>
          <FormControlLabel
            control={<Checkbox  />}
            label="Label"
          />
        </Grid>
        <Grid item lg={4}>
          <FormControlLabel
            control={<Checkbox  />}
            label="Label"
          />
        </Grid>
        <Grid item lg={4}>
          <FormControlLabel
            control={<Checkbox  />}
            label="Label"
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item lg={4}>
          <FormControlLabel
            control={<Checkbox  />}
            label="Label"
          />
        </Grid>
        <Grid item lg={4}>
          <FormControlLabel
            control={<Checkbox  />}
            label="Label"
          />
        </Grid>
        <Grid item lg={4}>
          <FormControlLabel
            control={<Checkbox  />}
            label="Label"
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item lg={4}>
          <FormControlLabel
            control={<Checkbox  />}
            label="Label"
          />
        </Grid>
        <Grid item lg={4}>
          <FormControlLabel
            control={<Checkbox  />}
            label="Label"
          />
        </Grid>
        <Grid item lg={4}>
          <FormControlLabel
            control={<Checkbox  />}
            label="Label"
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
}
