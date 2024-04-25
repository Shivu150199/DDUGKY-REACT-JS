import React from "react";
import { useNavigate } from "react-router-dom";



const Card = ({std}) => {
    let navigate=useNavigate()
const handleClick=()=>{
    console.log(std.id);
navigate(`/${std.id}`)
}


  return <article onClick={handleClick} className="shadow w-[20rem] p-6 ">
    <h1>
        {std.title}
    </h1>
    <p>{std.section}</p>
    <b>{std.desc}</b>
  </article>
  ;
};

export default Card;
