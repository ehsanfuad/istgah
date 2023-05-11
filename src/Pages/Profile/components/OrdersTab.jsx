import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { theme } from "../../../data/dummy";
import TabTitle from "./TabTitle";

const initialTabs = { first: false, second: false, third: false };
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" id={`simple-tabpanel-${index}`} {...other}>
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function OrdersTab() {
  const [value, setValue] = useState(0);
  const [tabId, setTabId] = useState({
    first: true,
    second: false,
    third: false,
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box mt={2} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab
            label={
              <TabTitle title="پرداخت شده" count={2} active={tabId["first"]} />
            }
            onClick={(e) => {
              setTabId({ ...initialTabs, ["first"]: true });
            }}
          />
          <Tab
            label={
              <TabTitle title="تحویل شده" count={0} active={tabId["second"]} />
            }
            onClick={(e) => {
              setTabId({ ...initialTabs, ["second"]: true });
            }}
          />
          <Tab
            label={
              <TabTitle title="لغو شده" count={1} active={tabId["third"]} />
            }
            onClick={(e) => {
              setTabId({ ...initialTabs, ["third"]: true });
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        item1
      </TabPanel>
      <TabPanel value={value} index={1}>
        item2
      </TabPanel>
      <TabPanel value={value} index={2}>
        item3
      </TabPanel>
    </>
  );
}
