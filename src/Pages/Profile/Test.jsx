import React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" id={`simple-tabpanel-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Test() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="پرداخت شده" />
        <Tab label="تحویل شده" />
        <Tab label="لغو شده" />
      </Tabs>
      <TabPanel value={value} index={0}>
        item1
      </TabPanel>
      <TabPanel value={value} index={1}>
        item2
      </TabPanel>
      <TabPanel value={value} index={2}>
        item3
      </TabPanel>
    </Box>
  );
}
