import React from "react";
import Navbar from '../component/Navbar'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
   
      <button>
        {/* <a href="http://localhost:5173/app/signup">go to signup </a> */}
        <Link to="/signup">go to signup</Link>
        <Link to="/booking">go to bookin</Link>
        

      </button>
    </div>
  )
};

export default Home;
