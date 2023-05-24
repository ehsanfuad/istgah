import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import BackButton from "./BackButton";
import { Formik, Form } from "formik";
import { theme } from "../../../data/dummy";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";

function AddressForm({ setShowForm }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        height="80%"
        bgcolor="goldenrod"
      >
        {/* <Box
        bgcolor="white"
        height="fit-content"
        sx={{ cursor: "pointer" }}
        p={biggerThanMd ? 0 : 2}
        onClick={() => {
          setShowForm(false);
        }}
      >
        <BackButton title="جزئیات آدرس" backUrl="" />
      </Box>
      <Box sx={{ overflowX: "hidden", overflowY: "scroll" }}>
        <Formik>
          <Form autoComplete="off">
            <Box display="flex" flexDirection="column">
              <Box height="150px" bgcolor="blueviolet">
                نشانی
              </Box>
              <Box
                color="dodgerblue"
                display="flex"
                alignItems="center"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setShowForm(false);
                }}
              >
                <Typography>اصلاح موقعیت مکانی روی نقشه</Typography>
                <BiChevronLeft size={25} />
              </Box>
              <Divider />
            </Box>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box height="150px" bgcolor="blueviolet">
                  استان
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box height="150px" bgcolor="gold">
                  شهر
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box height="150px" bgcolor="greenyellow">
                  پلاک
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Box height="150px" bgcolor="pink">
                  واحد
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box height="150px" bgcolor="tomato">
                  کدپستی
                </Box>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
      <Box bgcolor="black">button</Box> */}
      </Box>
      <Box bgcolor="black" height="20%">
        button
      </Box>
    </>
  );
}

export default AddressForm;
