import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import Map from "./components/Map";

function Addresses() {
  const [openMap, setOpenMap] = useState(false);
  const handleOpenMap = () => {
    setOpenMap(true);
  };
  const handleCloseMap = () => {
    setOpenMap(false);
  };
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between">
        <Typography>آدرس ها</Typography>
        <Button variant="contained" onClick={() => handleOpenMap()}>
          ثبت آدرس جدید
        </Button>
      </Box>
      <Modal open={openMap} onClose={handleCloseMap}>
        <Map />
      </Modal>
    </Box>
  );
}

export default Addresses;
