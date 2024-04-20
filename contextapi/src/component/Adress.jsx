import React, { useContext } from "react";
import { Context } from "./Home";

const Adress = () => {
    let value=useContext(Context)
  return <div className="border-2">
    <h1>Address</h1>
    <div>
        <p>{value.lat}</p>
        <p>{value.lon}</p>
    </div>
  </div>;
};

export default Adress;
