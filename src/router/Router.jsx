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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LazyWrapper>
        <MainLayout />
      </LazyWrapper>
    ),
    errorElement: <h2>Route not found</h2>,
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
    ],
  },
]);

export default router;
