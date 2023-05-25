import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { theme } from "../../../data/dummy";
import MyMap from "../../../components/MyMap/MyMap";
import AddressForm from "./AddressForm";
import AddressHeader from "./AddressHeader";
import AddressFooter from "./AddressFooter";

function AddressDialog({
  handleCloseMap,
  latitude,
  longitude,
  location,
  setLocation,
  showForm,
  setShowForm,
}) {
  return (
    <Box display="flex" flexDirection="column">
      <Box px={2}>
        <AddressHeader handleCloseMap={handleCloseMap} />
      </Box>
      <Divider variant="fullWidth" />
      <Box height={showForm ? "90vh" : "75vh"} width="100vw">
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

      <Box mt={1}>
        <AddressFooter
          setShowForm={setShowForm}
          location={location}
          showForm={showForm}
        />
      </Box>
    </Box>
  );
}

export default AddressDialog;
