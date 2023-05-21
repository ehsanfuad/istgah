import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { theme } from "../../../data/dummy";
import MyMap from "../../../components/MyMap/MyMap";
import AddressForm from "./AddressForm";

function AddressDialog({
  handleCloseMap,
  latitude,
  longitude,
  location,
  setLocation,
}) {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="row" alignItems="center" p={2}>
        <Box flexGrow={1} display="flex" flexDirection="column" gap={1}>
          <Box width="fit-content">
            <Typography>آدرس جدید</Typography>
          </Box>
          <Box width="fit-content">
            <Typography fontSize="0.8rem" color={theme.palette.grey[500]}>
              موقعیت مکانی آدرس را مشخص کنید
            </Typography>
          </Box>
        </Box>
        <Box>
          <MdClose size={22} onClick={() => handleCloseMap()} />
        </Box>
      </Box>
      <Divider variant="fullWidth" />
      <Box height="70vh" width="100vw" >
        <MyMap
          location={location}
          setLocation={setLocation}
          latitude={latitude}
          longitude={longitude}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Typography fontSize="0.8rem" color={theme.palette.grey[500]}>
          مرسوله های شما به این موقعیت <br />
          ارسال خواهد شد
        </Typography>
        <Button
          variant="contained"
          size="large"
          disabled={location ? false : true}
        >
          تایید و ادامه
        </Button>
      </Box>
    </Box>
  );
}

export default AddressDialog;
