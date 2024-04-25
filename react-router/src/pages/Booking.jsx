import React from "react";
import {Outlet} from 'react-router-dom'

const Bookings = () => {
  return <>

   <h2 className='text-2xl text-indigo-700'>this is a booking main page</h2>
   <Outlet/>
  </>;
};

export default Bookings;
