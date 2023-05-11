import { Container, Box, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import BackButton from "./components/BackButton";
import { theme } from "../../data/dummy";
import Search from "../../components/Search/Search";
import Test from "./Test";
import OrdersTab from "./components/OrdersTab";

function Orders() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Container maxWidth="xl" sx={{ px: biggerThanMd ? "2" : "0" }}>
      <Box dispaly="flex" flexDirection="column" gap={1}>
        <BackButton title={"تاریخچه سفارشات"} />
        <Box mt={3} bgcolor={theme.palette.grey[300]} borderRadius={2}>
          <Search />
        </Box>
        <Box display="flex" flexDirection="column">
          <Box
            display={biggerThanMd ? "flex" : "none"}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>تاریخچه سفارشات</Typography>
            <MdSearch />
          </Box>
          <OrdersTab />
        </Box>
      </Box>
    </Container>
  );
}

export default Orders;
