import { createBrowserRouter } from "react-router";
// import MainLayout from "../LayoutComponents/MainLayout";
import Home from "../pages/Home";
// import About from "../pages/About";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { lazy } from "react";
import LazyWrapper from "./LazyWrapper";
const MainLayout = lazy(() => import("../LayoutComponents/MainLayout"));
const About = lazy(() => import("../pages/About"));
import _404Error from './../pages/_404Error';
import ProductDetails from "../components/ProductDetails";
import Favourites from "../pages/Favourites";
import Cart from './../pages/Cart';
import CheckOut from './../pages/CheckOut';
import MyAccount from "../pages/MyAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LazyWrapper>
        <MainLayout />
      </LazyWrapper>
    ),
    errorElement: <_404Error></_404Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <LazyWrapper>
            <About />
          </LazyWrapper>
        ),
      },
      {
        path: "/contact",
        element: (
          <LazyWrapper>
            <Contact />
          </LazyWrapper>
        ),
      },
      {
        path: "/signup",
        element: (
          <LazyWrapper>
            <Signup />
          </LazyWrapper>
        ),
      },
      {
        path: "/login",
        element: (
          <LazyWrapper>
            <Login />
          </LazyWrapper>
        ),
      },
      {
        path: "/product_details/:id",
        element: (
          <LazyWrapper>
            <ProductDetails/>
          </LazyWrapper>
        ),
      },
      {
        path:"/favourites",
        element: (
          <LazyWrapper>
            <Favourites />
          </LazyWrapper>
        ),
      }, {
        path: "/cart",
        element: (
          <LazyWrapper>
            <Cart />
          </LazyWrapper>
        ),
      },
      {
        path: "/checkout",
        element: (
          <LazyWrapper>
            <CheckOut />
          </LazyWrapper>
        )
      }, {
        path: "/my-account",
        element: (
          <LazyWrapper>
            <MyAccount/>
          </LazyWrapper>
        )
      }
    ],
  },
]);

export default router;
