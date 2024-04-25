// import { useState } from 'react'

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
// import UniqueDetail from './Details/UniqueDetail';
// import Home from './pages/Home'
// import Successful from './pages/Successful'
// import Booking from './pages/Booking'
// import Failed from './pages/Failed'
// import BookingCard from './pages/BookingCard'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Booking from './pages/Booking'
// import Error from './pages/Error'
// import Successful from './pages/Successful'
// import Failed from './pages/Failed'
// import BookingCard from './pages/BookingCard'

// function App() {
//   return (
//     <BrowserRouter basename='app'>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path='booking' element={<Booking/>} /> */}

//         <Route path="bookings" element={<Outlet />}>
//           <Route path="/" element={<BookingCard />} />
//           <Route path="success" element={<Successful />} />
//           <Route path="failed" element={<Failed />} />
//           {/* <Route path='*' element={<Failed/>}/> */}
//         </Route>
//         {/* <Route path='success' element={<Successful/>} /> */}
//         {/* <Route path='failed' element={<Failed/>} /> */}
//         <Route path="login" element={<Login />} />
//         <Route path="signup" element={<Signup />} />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="booking" element={<Booking />}>

//           <Route path="bookingcard/:id" element={<BookingCard/>}/>
//           {/* <Route path="success" element={<Successful />} />
//           <Route path="failed" element={<Failed />} /> */}
//         </Route>
//         {/* outelet = success
// outlet = faliled
// */}
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import React from "react";
import AllCard from './Details/AllCard'
import UniqueDetail from './Details/UniqueDetail'

const App = () => {
  return <BrowserRouter>
  
  <Routes>
    <Route path='' element={<AllCard/>}/>
    <Route path='/:id' element={<UniqueDetail/>}/>
  </Routes>
  </BrowserRouter>
};

export default App;
