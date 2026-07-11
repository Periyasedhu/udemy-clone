import { Navbar } from "./Navbar";
import { Searchbar } from "./Searchbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import React from "react";
const MainLayout = () => {
    return (
      <>
        <Navbar />
        <Searchbar />
        <Outlet />
        {/* In React, <Outlet /> is a component from routing
         libraries like React Router used as a placeholder to
          render nested child routes inside a parent layout route. 
          It acts like a dynamic "window," allowing persistent layout 
          elements (like headers, navbars, and sidebars) to remain
           fixed on the screen while the central content updates based 
           on the current URL */}
        <Footer />
      </>
    );
  };

  export default MainLayout;