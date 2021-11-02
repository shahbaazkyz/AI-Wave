import React from "react";
import "./Dashboard.css";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

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
import LineChartEmo from "../Charts/LineChartEmo";

const StudentsMain = () => {
  return (
    <div className="mainDash">
      <Grid container spacing={4}>
        <Grid item lg={6} md={4}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12}>
              <Card
                sx={{ minWidth: 275 }}
                style={{
                  backgroundColor: "#415EB6",
                  borderRadius: "25px",
                  paddingLeft: "15px",
                }}
              >
                <CardContent style={{ color: "white" }}>
                  <h1 syle={{ color: "white" }}>Hi Shahbaaz</h1>
                  <p>“What do we say to the exams? Not today”</p>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card
                sx={{ minWidth: 275 }}
                style={{
                  backgroundColor: "#FF7D99",
                  borderRadius: "25px",
                  paddingLeft: "15px",
                }}
              >
                <CardContent style={{ color: "white" }}>
                  <h3>How Are you Feeling today?</h3>
                  <button className="chatBtn">Chat with Brainy</button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card
                sx={{ minWidth: 275 }}
                style={{
                  backgroundColor: "#B0D0FF",
                  borderRadius: "25px",
                  paddingLeft: "15px",
                }}
              >
                <CardContent style={{ color: "white" }}>
                  <h3>I need more help</h3>
                  <button className="chatBtn">Get a counselor</button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6} md={4}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12}>
              <Card
                sx={{ minWidth: 275 }}
                style={{
                  backgroundColor: "white",
                  borderRadius: "25px",
                  paddingLeft: "15px",
                }}
              >
                <CardContent style={{ color: "white" }}>
                  <h1>Mood Track</h1>
                  <div className="moodTrack">
                    <p style={{ color: "black", textAlign: "center" }}>TODAY</p>
                    <EmojiEmotionsIcon size={100} />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                sx={{ minWidth: 275 }}
                style={{
                  backgroundColor: "white",
                  borderRadius: "25px",
                  paddingLeft: "15px",
                }}
              >
                <CardContent style={{ color: "white" }}>
                  <h1>Students score</h1>
                <LineChartEmo / >
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card
                sx={{ minWidth: 275 }}
                style={{
                  backgroundColor: "white",
                  borderRadius: "25px",
                  paddingLeft: "15px",
                }}
              >
                <CardContent style={{ color: "white" }}>
                  <h1>Monthly Average</h1>
                  <p>“What do we say to the exams? Not today”</p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentsMain;
