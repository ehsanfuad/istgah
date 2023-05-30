import { Box, Typography } from "@mui/material";
import React from "react";
import {
  BsThreeDotsVertical,
  BsSignpost2,
  BsEnvelope,
  BsTelephone,
} from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { theme } from "../../../data/dummy";

function AddressCard() {
  return (
    <Box display="flex" flexDirection="column" pt={2} gap={1}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        pb={1.5}
      >
        <Typography>ونک، خ. برزیل، ابتدای خ. شمس لاهیجانی</Typography>
        <BsThreeDotsVertical />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            color={theme.palette.grey[600]}
          >
            <BsSignpost2 />
            <Typography>تهران</Typography>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <BsEnvelope />
            <Typography>۱۲۳۴۵۴۵۷۸</Typography>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <BsTelephone />
            <Typography>889349343</Typography>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <FiUser />
            <Typography>james dean</Typography>
          </Box>
        </Box>
        <Box>map</Box>
      </Box>
    </Box>
  );
}

export default AddressCard;
