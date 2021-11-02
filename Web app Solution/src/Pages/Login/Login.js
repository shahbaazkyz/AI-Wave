import { Grid } from "@mui/material";
import React from "react";
import "./Login.css";
import { FormControl , Card , CardContent , CardActions } from "@mui/material";
import { OutlinedInput, TextField } from "@mui/material";
const Login = () => {
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
          <div className="background-image" />
          <div className="hero-content-area">
            <div className="form">
              <Grid container>
                <Grid item lg={6}>
                  {" "}
                  <img
                    src="./images/signin.png"
                    alt=""
                    className="imageSign"
                  />{" "}
                </Grid>
                <Grid item lg={6} >
                  <div className="signContent">
                    <Card
                      sx={{ minWidth: 250 }}
                      style={{
                        background: "white",
                        borderRadius: "48px",
                        paddingLeft: "15px",
                      }}
                    >
                      <CardContent style={{ color: "white" }}>
                        <h3>Let's start healing</h3>
                        <h4>Log in with your school email</h4>
                        <FormControl sx={{ width: "80%" }}>
                          <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                          />
                          <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                          />

                          <button className="signBtn">Log in</button>
                          <button className="registerBtn">
                            Create an Account
                          </button>
                        </FormControl>
                      </CardContent>
                      <CardActions
                        style={{ padding: "0px 0 16px 17px" }}
                      ></CardActions>
                    </Card>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </section>
        <section className="contact">
          <h3 className="title">Learn more</h3>
          <p>
            Want to know about us more? Just sign up for our mailing list. No
            spam from us, we promise!
          </p>
          <hr />
          <form>
            <input type="email" placeholder="Email" />
            <a href="#" className="btn">
              Subscribe now
            </a>
          </form>
        </section>
        <footer>
          <p>
            <img src="logo.png" alt width={35} />.
          </p>
          <p>Team AI Wave!</p>
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-twitter-square fa-2x" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook-square fa-2x" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-snapchat-square fa-2x" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Login;
