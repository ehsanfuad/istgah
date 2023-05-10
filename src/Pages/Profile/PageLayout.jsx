import { Box, Container, useMediaQuery } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { theme } from "../../data/dummy";
import Menu from "./Menu";

function PageLayout() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection={biggerThanMd ? "row" : "column"}
        gap={2}
        mt={5}
      >
        <Box
          flex={1}
          border={biggerThanMd ? 1 : 0}
          borderRadius={2}
          borderColor={theme.palette.grey[300]}
        >
          <Menu />
        </Box>
        <Box
          flex={3}
          border={biggerThanMd ? 1 : 0}
          borderRadius={2}
          borderColor={theme.palette.grey[300]}
          order={biggerThanMd ? 0 : -1}
        >
          {<Outlet />}
        </Box>
      </Box>
    </Container>
  );
}

export default PageLayout;
