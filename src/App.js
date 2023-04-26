import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
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
      //   path: "/products/:id",
      //   element: <Products />,
      // },
      // {
      //   path: "/product/:id",
      //   element: <Product />,
      // },
    ],
  },
  { path: "/login", element: <Login /> },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
