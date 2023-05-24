import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { MdClose } from "react-icons/md";
import { theme } from "../../../data/dummy";
import { BiChevronLeft } from "react-icons/bi";
import MyMap from "../../../components/MyMap/MyMap";
import AddressForm from "./AddressForm";

function AddressModal({
  handleCloseMap,
  latitude,
  longitude,
  location,
  setLocation,
  showForm,
  setShowForm,
}) {
  const style = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60vw",
    height: "80vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 4,
    overflow: "hidden",
    paddingX: 2.5,
    paddingY: 2,
    gap: 2,
  };
  return (
    <Box sx={style}>
      <Box display="flex" flexDirection="row" alignItems="center" height="10vh">
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
        <Box sx={{ cursor: "pointer" }}>
          <MdClose size={22} onClick={() => handleCloseMap()} />
        </Box>
      </Box>
      <Divider variant="fullWidth" />
      {/* map container */}
      <Box height={showForm ? "90vh" : "75vh"} width="100%">
        {showForm ? (
          <AddressForm setShowForm={setShowForm} />
        ) : (
          <MyMap
            location={location}
            setLocation={setLocation}
            latitude={latitude}
            longitude={longitude}
          />
        )}
      </Box>
      {/* <Box height="70%">
        <MyMap
          location={location}
          setLocation={setLocation}
          latitude={latitude}
          longitude={longitude}
        />
      </Box> */}
      <Box
        display={showForm ? "none" : "flex"}
        // display="flex"  
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontSize="0.8rem" color={theme.palette.grey[500]}>
          مرسوله های شما به این موقعیت ارسال خواهد شد
        </Typography>
        <Button
          variant="contained"
          endIcon={
            <BiChevronLeft
              style={{ marginRight: "10px", marginLeft: "-15px" }}
            />
          }
          size="large"
          disabled={location ? false : true}
          onClick={() => setShowForm(true)}
        >
          تایید و ادامه
        </Button>
      </Box>
    </Box>
  );
}

export default AddressModal;
