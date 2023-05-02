import { Box, Popover, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import useClasses from "../../utils/useClasses";
import { Link as RouterLink } from "react-router-dom";
import { theme } from "../../data/dummy";
import { FiChevronLeft } from "react-icons/fi";

function Cart({ setCartAnchorEl, cartAnchorEl, eventCart, isShowCart }) {
  const open = Boolean(cartAnchorEl);
  const id = open ? "simple-popover" : undefined;
  const productNumber = 1;
  const handleCartClose = () => {
    setCartAnchorEl(null);
  };

  const handleCartClick = () => {
    setCartAnchorEl(eventCart);
  };
  const styles = (theme) => ({
    popover: {
      pointerEvents: "none",
    },
    popoverContent: {
      pointerEvents: "auto",
    },
  });
  const classes = useClasses(styles);

  const ProductCard = (image, title) => {
    return;
  };
  const CartContent = () => {
    return (
      <Popover
        id={id}
        open={open}
        anchorEl={cartAnchorEl}
        onClose={handleCartClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className={classes.popover}
        classes={{
          paper: classes.popoverContent,
        }}
        disdisablerestorefocus="true"
        PaperProps={{
          onMouseEnter: handleCartClick,
          onMouseLeave: handleCartClose,
        }}
      >
        <Box
          px={2}
          pt={1}
          display="flex"
          flexDirection="column"
          width="400px"
          height="500px"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              fontSize="0.8rem"
              color={theme.palette.grey[700]}
            >{`${productNumber} کالا`}</Typography>
            <Link to="/cart" component={RouterLink} underline="none">
              <Box display="flex" alignItems="center">
                <Typography fontSize="0.8rem">مشاهده‌ی سبد خرید</Typography>
                <FiChevronLeft />
              </Box>
            </Link>
          </Box>
          <Box display="flex" flexDirection="column"></Box>
        </Box>
      </Popover>
    );
  };
  return isShowCart ? <CartContent /> : null;
}

export default Cart;
