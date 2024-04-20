import React, { useContext } from "react";
import { Context } from "./Home";
import{ MainContext} from '../App'

const Contact = () => {
    let value=useContext(MainContext)
    console.log(value.handleName);
  return <div className="border-2">Contact
  <h1>{value.name}</h1>
  <button onClick={value.handleName}>click</button>
  </div>;
};

export default Contact;
