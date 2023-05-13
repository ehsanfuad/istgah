import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BiChevronLeft } from "react-icons/bi";
import { theme } from "../../../data/dummy";

const products = [
  {
    id: 1,
    specialSale: true,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/fa5961b7d2a4efb180d686f6f69dd45381a4d3dd_1649056488.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title:
      "گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت",
    stockNumber: 3,
    rate: "۴.۳",
    price: "۵۰,۰۰۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: 3,
    category: 6,
  },
  {
    id: 2,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/90fc87b40eb1249673b9d0089aca514443a04edf_1619112519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "قاب مدل سیلیکونی مناسب برای گوشی موبایل اپل iphone ۱۲ pro",
    stockNumber: 10,
    rate: "۴",
    price: "۵۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 9,
  },
  {
    id: 3,
    specialSale: false,
    imgUrl:
      "https://dkstatics-public.digikala.com/digikala-products/90fc87b40eb1249673b9d0089aca514443a04edf_1619112519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    title: "قاب صورتی",
    stockNumber: 10,
    rate: "۴",
    price: "۵۰,۰۰۰",
    discountedPrice: "۴۵,۰۰۰,۰۰۰",
    discount: null,
    category: 12,
  },
];

function CardTitle({ index }) {
  switch (index) {
    case 0:
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Box color={theme.palette.success.main}>
            <MdCheckCircle size={25} />
          </Box>
          <Typography color={theme.palette.grey[800]} fontSize="0.9rem">
            پرداخت شده
          </Typography>
        </Box>
      );
      break;
    case 1:
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Box>
            <FaHandHoldingHeart size={25} color={theme.palette.success.main} />
          </Box>
          <Typography color={theme.palette.grey[800]} fontSize="0.9rem">
            تحویل شده
          </Typography>
        </Box>
      );
      break;
    case 2:
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Box>
            <MdCancel size={25} color={theme.palette.grey[500]} />
          </Box>
          <Typography color={theme.palette.grey[800]} fontSize="0.9rem">
            لغو شده
          </Typography>
        </Box>
      );
      break;
    default:
      break;
  }
}

function OrderCards({ index }) {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      border={biggerThanMd ? 1 : 0}
      borderColor={theme.palette.grey[300]}
      borderRadius={3}
      m={biggerThanMd ? 2 : 0}
      pt={biggerThanMd ? 2 : 0}
    >
      <Box
        px={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <CardTitle index={index} />
        <BiChevronLeft size={25} color={theme.palette.grey[800]} />
      </Box>
      <Box
        display="flex"
        flexDirection={biggerThanMd ? "row" : "column"}
        gap={2}
        px={2}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="start"
          gap={0.4}
        >
          <Typography fontSize="0.8rem" color={theme.palette.grey[500]}>
            کد سفارش
          </Typography>
          <Typography fontSize="0.9rem" color={theme.palette.grey[900]}>
            330331470
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <Typography fontSize="0.8rem" color={theme.palette.grey[500]}>
            20 اردیبهشت 1402
          </Typography>
          <Typography fontSize="0.9rem" color={theme.palette.grey[900]}>
            20,000 تومان
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ display: biggerThanMd ? "flex" : "none" }} flexItem />
      <Box pr={2}>
        <Grid container>
          {products.map((product, index) => (
            <Grid item xs={1.5} sm={1.5} md={1.5} lg={1.5} key={index}>
              <img src={product.imgUrl} width="75%" />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider
        sx={{ display: biggerThanMd ? "none" : "flex" }}
        variant="middle"
      />
    </Box>
  );
}

export default OrderCards;
