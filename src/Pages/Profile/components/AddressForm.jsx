import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import BackButton from "./BackButton";
import { Formik, Form, Field } from "formik";
import { theme } from "../../../data/dummy";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import TextField from "@mui/material/TextField";
import useClasses from "../../../utils/useClasses";
//rtl
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
function AddressForm({ setShowForm, location }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const onSubmit = (values, errors) => {
    console.log("submitted");
    console.log(values);
  };
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const allStates = [
    {
      id: 1,
      label: "البرز",
    },
    {
      id: 2,
      label: "اردبیل",
    },
    {
      id: 3,
      label: "بوشهر",
    },
    {
      id: 4,
      label: "چهارمحال و بختیاری",
    },
    {
      id: 5,
      label: "آذربایجان شرقی",
    },
    {
      id: 6,
      label: "فارس",
    },
    {
      id: 7,
      label: "گیلان",
    },
    {
      id: 8,
      label: "گلستان",
    },
    {
      id: 9,
      label: "همدان",
    },
    {
      id: 10,
      label: "هرمزگان",
    },
    {
      id: 11,
      label: "ایلام",
    },
    {
      id: 12,
      label: "اصفهان",
    },
    {
      id: 13,
      label: "کرمان",
    },
    {
      id: 14,
      label: "کرمانشاه",
    },
    {
      id: 15,
      label: "خراسان شمالی",
    },
    {
      id: 16,
      label: "خوزستان",
    },
    {
      id: 17,
      label: "کهگیلویه و بویراحمد",
    },
    {
      id: 18,
      label: "کردستان",
    },
    {
      id: 19,
      label: "لرستان",
    },
    {
      id: 20,
      label: "مرکزی",
    },
    {
      id: 21,
      label: "مازندران",
    },
    {
      id: 22,
      label: "قزوین",
    },
    {
      id: 23,
      label: "قم",
    },
    {
      id: 24,
      label: "خراسان رضوی",
    },
    {
      id: 25,
      label: "سمنان",
    },
    {
      id: 26,
      label: "سیستان و بلوچستان",
    },
    {
      id: 27,
      label: "خراسان جنوبی",
    },
    {
      id: 28,
      label: "تهران",
    },
    {
      id: 29,
      label: "آذربایجان غربی",
    },
    {
      id: 30,
      label: "یزد",
    },
    {
      id: 31,
      label: "زنجان",
    },
  ];
  const allCities = [
    {
      id: 1,
      cities: [
        { label: "The Shawshank Redemption", year: 1994 },
        { label: "The Godfather", year: 1972 },
        { label: "The Godfather: Part II", year: 1974 },
        { label: "The Dark Knight", year: 2008 },
        { label: "12 Angry Men", year: 1957 },
        { label: "Schindler's List", year: 1993 },
      ],
    },
    {
      id: 2,
      cities: [{ label: "شهر ۱" }, { label: "شهر ۲" }],
    },
  ];
  const findCities = (stateId) => {
    return allCities.find((item, index) => item.id === stateId).cities;
  };
  const [cities, setCities] = useState(findCities(1));
  // console.log(allCities.find((item, index) => item.id === 1).cities);

  return (
    <>
      <Box height="100%" display="flex" flexDirection="column">
        <Box
          height={biggerThanMd ? "5vh" : "10vh"}
          display="flex"
          alignItems="center"
        >
          <Box
            height="100%"
            sx={{ cursor: "pointer" }}
            px={2}
            pb={1}
            display="flex"
            alignItems="center"
            onClick={() => {
              setShowForm(false);
            }}
          >
            <BackButton title="جزئیات آدرس" backUrl="" />
          </Box>
        </Box>
        <Box height="70vh" sx={{ overflowY: "scroll" }}>
          <Formik
            initialValues={{
              address: "",
              state: null,
              city: null,
              pelak: "",
              vahed: "",
              postalCode: "",
            }}
            // validationSchema={loginSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched, setFieldValue, values }) => (
              <Form autoComplete="off">
                <CacheProvider value={cacheRtl}>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Box mt={1} px={2} sx={{ direction: "rtl" }}>
                      <Field name="address">
                        {({ field }) => (
                          <TextField
                            {...field}
                            color="primary"
                            id="address"
                            label="نشانی"
                            multiline
                            maxRows={2}
                            padding="1rem"
                            fullWidth
                            dir="rtl"
                          />
                        )}
                      </Field>
                    </Box>
                    <Box
                      color="dodgerblue"
                      display="flex"
                      alignItems="center"
                      px={2}
                      sx={{ cursor: "pointer", width: "fit-content" }}
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
                      <Box p={2}>
                        <Field name="state">
                          {({ field }) => (
                            <Autocomplete
                              {...field}
                              disablePortal
                              value={values.state}
                              onChange={(event, newValue) => {
                                setFieldValue("state", newValue);
                                // console.log("new valye:", newValue.id);
                                setCities(findCities(newValue.id));
                              }}
                              options={allStates}
                              getOptionLabel={(option) => option.label}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="استان"
                                  variant="outlined"
                                />
                              )}
                            />
                          )}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box p={2}>
                        <Field name="city">
                          {({ field }) => (
                            <Autocomplete
                              {...field}
                              disablePortal
                              value={values.city}
                              onChange={(event, newValue) => {
                                setFieldValue("city", newValue);
                              }}
                              options={cities}
                              getOptionLabel={(option) => option.label}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="شهر"
                                  variant="outlined"
                                />
                              )}
                            />
                          )}
                        </Field>
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
                  <Box
                    width="100%"
                    height="10vh"
                    position="fixed"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bottom="0"
                    bgcolor="plum"
                  >
                    <Button
                      variant="contained"
                      sx={{
                        width: "90%",
                        py: "0.7rem",
                        borderRadius: "0.6rem",
                      }}
                      type="submit"
                    >
                      ثبت آدرس
                    </Button>
                  </Box>
                </CacheProvider>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
}

export default AddressForm;
