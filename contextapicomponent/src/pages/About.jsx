import React, { useContext } from "react";
import { Context } from "../component/Context";


const About = () => {
    let value=useContext(Context)
    console.log(value);
  return <div>
    <p>My name in {value.name}</p>
    <p>count is {value.count}</p>
    
  </div>;
};

export default About;
