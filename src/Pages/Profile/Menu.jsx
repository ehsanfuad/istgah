import React, { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsSignpost2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";
import { BiChevronLeft } from "react-icons/bi";
import { Box, Typography, Link, Divider, useMediaQuery } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { theme } from "../../data/dummy";

const items = [
  {
    icon: <HiOutlineShoppingBag size={22} />,
    title: "سفارش ها",
    path: "/profile/orders",
  },
  {
    icon: <FiUser size={22} />,
    title: "اطلاعات حساب کاربری",
    path: "/profile",
  },
  {
    icon: <AiOutlineHeart size={22} />,
    title: "لیست علاقه مندی",
    path: "/profile/wish-list",
  },
  {
    icon: <BsSignpost2 size={22} />,
    title: "آدرس ها",
    path: "/profile/addresses",
  },
  {
    icon: <IoLogOutOutline size={22} />,
    title: "خروج",
    path: "/profile/logout",
  },
];

function Menu() {
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  const [active, setActive] = useState(items[0].path);
  const location = useLocation();
  
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <Box display="flex" flexDirection="column">
      {items.map((item, index) => (
        <Box key={index}>
          <Divider
            sx={{
              marginX: 0,
              display: index === 0 && biggerThanMd ? "none" : "block",
            }}
          />
          <Link
            to={item.path}
            component={RouterLink}
            underline="none"
            key={index}
            color="inherit"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              py={1}
              px={biggerThanMd ? 2 : 0}
              marginY={1}
              borderRight={biggerThanMd && item.path === active ? 5 : 0}
              borderColor={theme.palette.primary.main}
              onClick={() => {
                setActive(item.path);
              }}
            >
              <Box display="flex" gap={2} alignItems="center">
                <Box>{item.icon}</Box>
                <Typography
                  fontSize="0.8rem"
                  variant={active === item.path ? "subtitle1" : "subtitle2"}
                  color={theme.palette.grey[800]}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box
                color={theme.palette.grey[500]}
                display={biggerThanMd ? "none" : "block"}
              >
                <BiChevronLeft size={22} />
              </Box>
            </Box>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default Menu;
