import { Grid, Card, CardContent } from "@mui/material";
import React from "react";
import HorizontalChart from "../Charts/EmotionsTop/HorizontalChart";
import CustomizedTables from "./TableData";

const Specific = () => {
  return (
    <Grid container spacing={4}>
      <Grid item lg={8}>
        <Card
          sx={{ minWidth: 275 }}
          style={{
            borderRadius: "25px",
            height: "100%",
          }}
        >
          <CardContent>
            <h3>Students List</h3>
            <CustomizedTables />
          </CardContent>
        </Card>
      </Grid>

      <Grid item lg={4}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={4}
        >
          <Grid item lg={12}>
            <Card
              sx={{ minWidth: 450 }}
              style={{
                borderRadius: "25px",
                height: "100%",
              }}
            >
              <CardContent>
                <h3>Top students - Negative</h3>
                <HorizontalChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={12}>
            <Card
              sx={{ minWidth: 530 }}
              style={{
                borderRadius: "25px",
                height: "100%",
              }}
            >
                          <CardContent>
                              <h3>Top Topics</h3>
                              <img src="./images/topics.png" alt="" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Specific;
