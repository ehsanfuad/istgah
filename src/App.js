import "./App.css";
import Home from "./Pages/Home/Home";
// import Search from "./Pages/Search/Search";
// import Product from "./Pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./data/dummy";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
// import Test from "./components/Navbar/Test";
import Profile from "./Pages/Profile/Profile";
import Orders from "./Pages/Profile/Orders";
import Menu from "./Pages/Profile/Menu";
// import PersonalInfo from "./Pages/Profile/PersonalInfo";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const ProfileLayout = () => {
  return (
    <>
      <Navbar />
      {/* <Outlet /> */}
      <Menu />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/search/:category",
      //   element: <Search />,
      // },
      // {
      //   path: "/product/:id",
      //   element: <Product />,
      // },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/cart", element: <Cart /> },
  // { path: "/test", element: <Test /> },
  {
    path: "profile",
    element: <ProfileLayout />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      // {
      //   path: "personal-info",
      //   element: <PersonalInfo />,
      // },
    ],
  },
]);
function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
