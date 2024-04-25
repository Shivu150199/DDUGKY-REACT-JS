import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import Card from "./Card";

//localhost:5173/3
const UniqueDetail = () => {
    let {id}=useParams()
    console.log(id);

let array=data.filter((item)=>item.id==id)
console.log(array);

  return <>
  {array.map((item)=>{
return <Card key={item.id} std={item}/>
  })

  }
  </>
};

export default UniqueDetail;
