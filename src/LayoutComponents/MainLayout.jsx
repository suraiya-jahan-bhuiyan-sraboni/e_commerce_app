import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
