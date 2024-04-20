import React, { createContext, useContext } from "react";
import { Context } from "./Context";
// import Adress from "./Adress";
// import Contact from "./Contact";

// export let Context=createContext()
const Home = () => {

  let value=useContext(Context)
  console.log(value);
// let location={
//     lat: 41.714224,
//     lng: -74.005973
// }

// console.log(location.lat);
// const handleChange=()=>{
//     console.log('hello');
//     location.lat+=1
//     console.log(location.lat);
// }

  return (
      <div>
    Home
    </div>
  )
};

export default Home;
