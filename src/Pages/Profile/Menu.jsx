import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function Menu() {
  return (
    <Box display="flex" flexDirection="row">
      <Box flex={1} border={1}>
        menu
      </Box>
      <Box flex={3} border={1}>
        {<Outlet />}
      </Box>
    </Box>
  );
}

export default Menu;
