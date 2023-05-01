import { Box, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import useClasses from "../../utils/useClasses";

function Cart({ setCartAnchorEl, cartAnchorEl, eventCart }) {
  const open = Boolean(cartAnchorEl);
  const id = open ? "simple-popover" : undefined;

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
      <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    </Popover>
  );
}

export default Cart;
