import React from "react";
import { Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavBar from "../component/Navbar";

const Booking = () => {
  return <div>
<NavBar/>
    
    <Outlet />
  </div>;
};

export default Booking;
