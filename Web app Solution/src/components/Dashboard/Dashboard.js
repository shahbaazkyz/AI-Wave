import React from "react";
import "./Dashboard.css";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import Linechart from "../Charts/SimpleLineChart/Linechart";
import Barchart from "../Charts/barChart/BarChart";

const Dashboard = () => {
  return (
    <div className="mainDash">
      <Grid container spacing={4}>
        <Grid item lg={4} md={4}>
          <Card
            sx={{ minWidth: 275 }}
            style={{
              borderRadius: "25px",
              height: "100%",
            }}
          >
            <CardContent>
              <h3 centered>Wellbeing Scores</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                repellat impedit porro non dignissimos rerum labore quasi
                perspiciatis omnis officia!
              </p>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={8} md={4}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={6}>
              <Card
                sx={{ minWidth: 275 }}
                style={{
                  background:
                    "linear-gradient(180deg, #F74E52 0%, #FF8183 36.46%)",
                  borderRadius: "25px",
                  paddingLeft: "15px",
                }}
              >
                <CardContent style={{ color: "white" }}>
                  <h3>Pressure</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, laborum?
                  </p>
                </CardContent>
                <CardActions style={{ padding: "0px 0 16px 17px" }}>
                  <Button
                    style={{
                      background: "white",
                      borderRadius: "50%",
                      color: "black",
                      width: "30px",
                      height: "28px",
                      minWidth: "4px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    40
                  </Button>
                  <Button
                    style={{
                      background: "white",
                      borderRadius: "16px",
                      color: "#F06669",
                      width: "100px",
                      fontSize: "10px",
                      fontWeight: "600",
                    }}
                  >
                    RISKY
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                sx={{ minWidth: 275 }}
                style={{
                  background:
                    "linear-gradient(180deg, #28C3E4 0%, #3394EE 100%)",
                  borderRadius: "25px",
                  paddingLeft: "15px",
                }}
              >
                <CardContent style={{ color: "white" }}>
                  <h3>EMOTIONS</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, laborum?
                  </p>
                </CardContent>
                <CardActions style={{ padding: "0px 0 16px 17px" }}>
                  <Button
                    style={{
                      background: "white",
                      borderRadius: "50%",
                      color: "black",
                      width: "30px",
                      height: "28px",
                      minWidth: "4px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    56
                  </Button>
                  <Button
                    style={{
                      background: "white",
                      borderRadius: "16px",
                      color: "#FDC453",
                      width: "100px",
                      fontSize: "10px",
                      fontWeight: "600",
                    }}
                  >
                    OKAY
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                sx={{ minWidth: 275 }}
                style={{
                  background:
                    "linear-gradient(180deg, #FFB45C 0%, #F47128 100%)",
                  borderRadius: "25px",
                  paddingLeft: "15px",
                }}
              >
                <CardContent style={{ color: "white" }}>
                  <h3>BOOSTS</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, laborum?
                  </p>
                </CardContent>
                <CardActions style={{ padding: "0px 0 16px 17px" }}>
                  <Button
                    style={{
                      background: "white",
                      borderRadius: "50%",
                      color: "black",
                      width: "30px",
                      height: "28px",
                      minWidth: "4px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    51
                  </Button>
                  <Button
                    style={{
                      background: "white",
                      borderRadius: "16px",
                      color: "#FDC453",
                      width: "100px",
                      fontSize: "10px",
                      fontWeight: "600",
                    }}
                  >
                    OKAY
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                sx={{ minWidth: 275 }}
                style={{
                  background:
                    "linear-gradient(180deg, #B56CEF 0%, #6E59F2 100%)",
                  borderRadius: "25px",
                  paddingLeft: "15px",
                }}
              >
                <CardContent style={{ color: "white" }}>
                  <h3>Behaviours</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas, laborum?
                  </p>
                </CardContent>
                <CardActions style={{ padding: "0px 0 16px 17px" }}>
                  <Button
                    style={{
                      background: "white",
                      borderRadius: "50%",
                      color: "black",
                      width: "30px",
                      height: "28px",
                      minWidth: "4px",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    75
                  </Button>
                  <Button
                    style={{
                      background: "white",
                      borderRadius: "16px",
                      color: "#06C882",
                      width: "100px",
                      fontSize: "10px",
                      fontWeight: "600",
                    }}
                  >
                    HEALTHY
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={4}
        >
          <Grid item lg={8} md={6}>
            <Card
              sx={{ minWidth: 275 }}
              style={{
                borderRadius: "25px",
                height: "100%",
                marginTop: "36px",
                marginLeft: "13px",
              }}
            >
              <CardContent>
                <h3 centered style={{ color: "#211F8D", fontSize: "32px" }}>
                  Wellbeing score evolution
                </h3>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item lg={10}>
                    <Linechart />
                  </Grid>
                  <Grid item lg={2}>
                    <div
                      style={{
                       
                        width: "95px",
                        height: "31px",
                        
                        top: "766px",
                        background: "#06C882",
                        borderRadius: "16px",
                      }}
                    >
                      <h5
                        style={{
                          textAlign: "center",
                          lineHeight: "2.4",
                          marginTop: "16px",
                        }}
                      >
                        Joy
                      </h5>
                    </div>
                    <div
                      style={{
                       
                        width: "95px",
                        height: "31px",
                        
                        top: "807px",
                        background: "#F16D24",
                        borderRadius: "16px",
                      }}
                    >
                      <h5
                        style={{
                          textAlign: "center",
                          lineHeight: "2.4",
                          marginTop: "16px",
                        }}
                      >
                        Angry
                      </h5>
                    </div>
                    <div
                      style={{
                       
                        width: "95px",
                        height: "31px",
                        
                        top: "848px",
                        background: "#6E59F2",
                        borderRadius: "16px",
                      }}
                    >
                      <h5
                        style={{
                          textAlign: "center",
                          lineHeight: "2.4",
                          marginTop: "16px",
                        }}
                      >
                        Worry
                      </h5>
                    </div>
                    <div
                      style={{
                       
                        width: "95px",
                        height: "31px",
                        
                        top: "889px",
                        background: "#28C3E4",
                        borderRadius: "16px",
                      }}
                    >
                      <h5
                        style={{
                          textAlign: "center",
                          lineHeight: "2.4",
                          marginTop: "16px",
                        }}
                      >
                        Sad
                      </h5>
                    </div>
                    <div
                      style={{
                       
                        width: "95px",
                        height: "31px",
                        
                        top: "930px",
                        background: "#FFD05D",
                        borderRadius: "16px",
                      }}
                    >
                      <h5
                        style={{
                          textAlign: "center",
                          lineHeight: "2.4",
                          marginTop: "16px",
                        }}
                      >
                        Neutral
                      </h5>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={4} md={6}>
            <Card
              sx={{ minWidth: 275 }}
              style={{
                borderRadius: "25px",
                height: "69vh",
                marginTop: "36px",
                marginLeft: "13px",
              }}
            >
              <CardContent>
                <h3 centered style={{ color: "#211F8D" }}>
                  Wellbeing score evolution
                </h3>
                <Barchart />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={4}
        >
          <Grid item lg={12} md={6}>
            <Card
              sx={{ minWidth: 275 }}
              style={{
                borderRadius: "25px",
                height: "100%",
                marginTop: "36px",
                marginLeft: "13px",
              }}
            >
              <CardContent>
                <h3 centered style={{ color: "#211F8D", fontSize: "32px" }}>
                  Wellbeing score evolution
                </h3>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item lg={6}></Grid>
                  <Grid item lg={6}>
                    <Linechart />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
