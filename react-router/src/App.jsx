import { useState } from 'react'

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Booking from './pages/Booking'
import Error from './pages/Error'
import Successful from './pages/Successful'
import Failed from './pages/Failed'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='booking' element={<Booking/>} /> */}
    
<Route path='booking' element={<Outlet/>} >

  {/* <Route path='/' element={<Booking/>}/> */}
  <Route path='success' element={<Successful/>}/>
  <Route path='failed' element={<Failed/>}/>
  {/* <Route path='*' element={<Failed/>}/> */}


</Route>
        {/* <Route path='success' element={<Successful/>} /> */}
        {/* <Route path='failed' element={<Failed/>} /> */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
