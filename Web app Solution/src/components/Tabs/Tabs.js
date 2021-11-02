import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Tabs } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import Dashboard from "../Dashboard/Dashboard";
import Specific from "../Dashboard/Specific";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function LabTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Tabs
        value={value}
        centered
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        style={{ marginTop: "70px" }}
      >
        <Tab label="Global" {...a11yProps(0)} />
        <Tab label="Specific" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Specific />
      </TabPanel>
    </div>
  );
}
