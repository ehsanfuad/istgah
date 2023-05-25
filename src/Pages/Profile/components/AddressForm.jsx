import {
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import BackButton from "./BackButton";
import { Formik, Form } from "formik";
import { theme } from "../../../data/dummy";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import TextField from "@mui/material/TextField";
import useClasses from "../../../utils/useClasses";
function AddressForm({ setShowForm }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const styles = (theme) => ({
    gridContainer: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    column1: {
      flex: "0 0 auto",
      backgroundColor: "lightblue",
      padding: theme.spacing(2),
    },
    column2: {
      flex: "1 1 auto",
      backgroundColor: "lightgreen",
      padding: theme.spacing(2),
    },
    column3: {
      flex: "0 0 auto",
      backgroundColor: "lightblue",
      padding: theme.spacing(2),
    },
  });
  const classes = useClasses(styles);
  return (
    <>
      <div className={classes.gridContainer}>
        <Paper className={classes.column1}>Column 1</Paper>
        <Paper className={classes.column2}>Column 2</Paper>
        <Paper className={classes.column3}>Column 3</Paper>
      </div>
      {/* <Box
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
      {/* </Box>
      <Box bgcolor="black" height="20%">
        button
      </Box> */}
    </>
  );
}

export default AddressForm;
