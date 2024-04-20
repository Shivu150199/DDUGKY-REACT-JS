import { useState } from 'react'

import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <Home/>
      <About />
      {isLoggedIn ? <Login /> : <Signup />}
    </div>
  )
}

export default App
