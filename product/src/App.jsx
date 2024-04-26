import { useEffect, useState } from 'react'
import axios from 'axios';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Products } from './component/Products';

function App() {
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
async function fetchData(){

// let response = await fetch('https://dummyjson.com/products')
// let data=await response.json()
// console.log(data.products);
// setData(data.products)
let res =await axios.get('https://dummyjson.com/products')
// let data=await res.json()
console.log(res.data.products);
setData(res.data.products)
}

useEffect(()=>{
  fetchData()
},[])

console.log(data);
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products product={data}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
