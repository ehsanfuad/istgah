import { Box, Divider, Typography, styled, useMediaQuery } from "@mui/material";
import React from "react";
import BackButton from "./components/BackButton";
import { theme } from "../../data/dummy";
import TitleContent from "./components/TitleContent";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: useMediaQuery(theme.breakpoints.up("md")) ? "row" : "column",
  gap: 2,
  p: 2,
}));

function OrderDetails() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box display="flex" flexDirection="column">
      <Box p={2}>
        <BackButton title="جزئیات سفارش" />
      </Box>
      <Divider flexItem />
      {/* پیگیری سفارش تاریخ ثبت */}
      <Box
        display="flex"
        flexDirection={biggerThanMd ? "row" : "column"}
        gap={2}
        p={2}
      >
        <TitleContent title={"کد پیگیری سفارش"} content={"۳۳۲۳۰۲۱۴۰"} />
        <TitleContent title={"تاریخ ثبت سفارش"} content={"۲۴ اردیبهشت ۱۴۰۲"} />
      </Box>
      <Divider variant="middle" flexItem />
      {/* تحویل گیرنده تاریخ ثبت */}
      <Box
        display="flex"
        flexDirection={biggerThanMd ? "row" : "column"}
        gap={2}
        p={2}
      >
        <TitleContent title={"تحویل گیرنده"} content={"فواد صدر"} />
        <TitleContent title={"شماره موبایل"} content={"۰۹۰۳۰۴۸۳۳۴۵"} />
      </Box>
      {/* آدرس */}
      <Box
        display="flex"
        flexDirection={biggerThanMd ? "row" : "column"}
        gap={0.5}
        px={2}
        pb={2}
      >
        <TitleContent
          title={"آدرس"}
          content={"امیر آباد، خ. کارگر شمالی، خ. فرشی مقدم"}
        />
      </Box>
      <Divider flexItem />
      {/* مبلغ نوع پرداخت */}
      <Box
        display="flex"
        flexDirection={biggerThanMd ? "row" : "column"}
        gap={2}
        p={2}
      >
        <TitleContent title={"مبلغ"} content={"۳۰۱,۵۹۰ تومان"} />
        <TitleContent title={"نوع پرداخت"} content={"پرداخت اینترنتی"} />
      </Box>
      <Divider flexItem />
      {/* زمان تحویل - نمایش محصولات */}
      <Box
        border={biggerThanMd ? 1 : 0}
        borderRadius={2}
        borderColor={theme.palette.grey[300]}
        m={biggerThanMd ? 2 : 0}
        display="flex"
        flexDirection="column"
      >
        <Box display="flex" flexDirection={biggerThanMd ? "row" : "column"}>
          <Box display="flex" flexDirection="column" gap={2} p={2}>
            {/* زمان تحویل */}
            <TitleContent
              title={"زمان تحویل"}
              content={"یکشنبه ۲۴ اردیبهشت بازه ۱۵ - "}
            />

            {/* هزینه ارسال مبلغ مرسوله */}
            <Box
              display="flex"
              flexDirection={biggerThanMd ? "row" : "column"}
              gap={2}
            >
              <TitleContent title={"هزینه ارسال"} content={"رایگان"} />
              <TitleContent title={"مبلغ مرسوله"} content={"۲۸۲,۵۹۰ تومان"} />
            </Box>
          </Box>
          {/* progressbar - پیگیری مرسوله */}
          progressbar
        </Box>
      </Box>
    </Box>
  );
}

export default OrderDetails;
