import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../data/dummy";

function AddressFooter({ showForm, setShowForm, location }) {
  return (
    <Box
      display={showForm ? "none" : "flex"}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      px={2}
      height="10vh"
    >
      <Typography fontSize="0.8rem" color={theme.palette.grey[500]}>
        مرسوله های شما به این موقعیت <br />
        ارسال خواهد شد
      </Typography>
      <Button
        variant="contained"
        size="large"
        disabled={location ? false : true}
        onClick={() => setShowForm(true)}
      >
        تایید و ادامه
      </Button>
    </Box>
  );
}

export default AddressFooter;
