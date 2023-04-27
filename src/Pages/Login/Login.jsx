import React from "react";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "./../../data/dummy";
import useClasses from "../../utils/useClasses";

function Login() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const styles = (theme) => ({
    thaiTextFieldInputProps: {
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },
  });
  const classes = useClasses(styles);
  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100wh"
        height="100vh"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          px={biggerThanMd ? 3 : 0}
          height="60vh"
          width={biggerThanMd ? "350px" : "100%"}
          border={biggerThanMd ? 1 : 0}
          borderRadius={2}
          borderColor={theme.palette.grey[400]}
        >
          <Box textAlign="center" py={2}>
            <Typography variant="h4" color={theme.palette.primary.main}>
              کافه ایستگاه
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" fontSize="1.2rem">
              ورود | ثبت نام
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" color={theme.palette.grey[800]}>
              سلام!
              <br />
              لطفا شماره موبایل خود را وارد کنید
            </Typography>
          </Box>
          <Box>
            <TextField
              sx={{
                width: "100%",
                direction: "rtl",
              }}
              InputProps={{
                classes: {
                  input: classes.thaiTextFieldInputProps,
                },
              }}
              id="mobile"
              label=""
              variant={biggerThanMd ? "outlined" : "filled"}
            />
          </Box>
          <Box>
            <Button sx={{ py: 1.2 }} fullWidth variant="contained">
              ورود
            </Button>
          </Box>
          <Box>
            <Typography fontSize="0.7rem">
              ورود شما به معنای پذیرش شرایط
              <Link underline="none">کافه ایستگاه</Link> و
              <Link underline="none">قوانین حریم‌ خصوصی</Link> است
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
