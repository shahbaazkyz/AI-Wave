import { Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Registration.css";
import { FormControl, Card, CardContent, CardActions } from "@mui/material";
import { OutlinedInput, TextField } from "@mui/material";
const Registration = () => {

   const emailRef = useRef();
   const nameRef = useRef();
   const passwordRef = useRef();
   const passwordConfirmRef = useRef();
   const { signup } = useAuth();
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);
   const history = useHistory();

   async function handleSubmit(e) {
     e.preventDefault();

     localStorage.setItem(emailRef.current.value, nameRef.current.value);
     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
       return setError("Passwords do not match");
     }

     try {
       setError("");
       setLoading(true);
       await signup(emailRef.current.value, passwordRef.current.value);
       history.push("/");
     } catch {
       setError("Failed to create an account");
     }

     setLoading(false);
   }

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
                <Grid item lg={6}>
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
                        <h3>Create an Account</h3>
                        <h4>With your school email</h4>
                        <FormControl sx={{ width: "80%" }}>
                          <TextField
                            id="outlined-text-input"
                            label="Nickname"
                            ref={nameRef}
                            type="text"
                          />

                          <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            ref={emailRef}
                          />
                          <TextField
                            id="outlined-password-input"
                            label="Password"
                            ref={passwordRef}
                            type="password"
                            autoComplete="current-password"
                          />
                          <TextField
                            id="outlined-password-input"
                            label="Confirm Password"
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

export default Registration;
