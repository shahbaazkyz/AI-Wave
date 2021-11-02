import { Grid } from "@mui/material";
import React from "react";
import { FormControl, Card, CardContent, CardActions } from "@mui/material";
import { OutlinedInput, TextField } from "@mui/material";
import "./Welcome.css"
import CheckboxLabels from "./CheckboxesLabel";
const Welcome = () => {
  return (
    <div>
      <div>
        <header>
          <h2>
            <img src="./images/logo.png" alt />
          </h2>
          <nav>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </nav>
        </header>
        <section className="hero">
          <div className="hero-content-area">
            <div>
              <Grid container>
                <Grid item lg={12}>
                                  <h1>Welcome Shahbaaz</h1>
                                  <h3>We want to know More about you.</h3>
                                  <h5>Pick up the topics that you are interested in.</h5>
                                  <CheckboxLabels />
                </Grid>
                <Grid item lg={12} >
                 <button className = "continueBtn">Continue</button>
                </Grid>
              </Grid>
            </div>
          </div>
        </section>
    
      </div>
    </div>
  );
};

export default Welcome;
