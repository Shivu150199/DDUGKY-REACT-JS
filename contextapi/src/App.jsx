// // import { useContext, useState } from 'react'
// // import { Bs0CircleFill, Bs1SquareFill } from 'react-icons/bs'
// // import { Fa0 } from 'react-icons/fa6'
// // // import Login from './react'
// // import { createContext } from 'react'



// // function App() {



// //   return (
// //     <>
// //       {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
// //        */}
// //       <div>
// //       {/* <Login className="border-spacing-1 text-rose-700"/> */}
// //         {/* <Bs0CircleFill className="w-10 h-10 text-red-700" />
// //         <Bs0CircleFill className="w-10 h-10" />
// //         <Bs0CircleFill />
// //         <Bs0CircleFill />
// //         <Bs0CircleFill />
// //         <Bs0CircleFill />
// //         <Fa0 />
// //         <Fa0 />
// //         <Fa0 />
// //         <Fa0 />
// //         <Fa0 /> */}


// // <Home/>
// // <login/>


// //       </div>
// //     </>
// //   )
// // }

// // export default App



// // export let HomeContext=createContext()
// // const Home =()=>{
// // console.log(createContext);
// // const [toggle,setToggle]=useState(false)

// // console.log(HomeContext);
// //  const location = {
// //    lat: 97,
// //    lon: 37,
// //  }
// //   return (
// //     <>
// //       <h1 className="text-3xl font-bold underline">home</h1>
// //       <div className="flex items-center justify-between px-6 ">
// //         <div className="flex gap-10">
// //           <p>{location.lat}</p>
// //           <p>{location.lon}</p>
// //         </div>
// //         <HomeContext.Provider value={{location,toggle}}>
// //           <Address />
// //           <About />
// //         </HomeContext.Provider>
// //       </div>
// //     </>
// //   )
// // }


// // const Address=()=>{
// //   let addressValue=useContext(HomeContext)
// //   console.log(addressValue);

// //   // console.log(location)
// //   return(
// //     <div>
// //       <p>{addressValue.lat}</p>
// //       <p>{addressValue.lon}</p>
// //       <h1 className="text-3xl font-bold underline">address book</h1>
// //     </div>
// //   )
// // }



// // const About=()=>{
// //   let value=useContext(HomeContext)
// //   console.log(value);
// //   return (
// //     <div>
// //       <p>{location.lon}</p>
// //       <h1 className="text-3xl font-bold underline">about</h1>
// //     </div>
// //   )
// // }



// // const Login=()=>{
// //   return (
// //     <div>
// //       <h1 className="text-3xl font-bold underline">login</h1>
// //     </div>
// //   )


// // }


// import React, { createContext,useContext,useState } from "react";
// import Home from "./component/Home";
// import Login from "./component/Login";

// export let MainContext=createContext()
// const App = () => {
//   let value=useContext()
//   console.log(value);
//   // let [name,setName]=useState('mayank')
//   // let handleName=()=>{
//   //   setName('devilal')
//   // }
//   return <div>
//     hello
//     {/* <Home/>
//     <Login/> */}
//     {/* <button onClick={handleName}>click</button> */}
//   </div>;
// };

// export default App;


import React from "react";
import Home from "./component/Home";

const App = () => {
  return <div>
    Hello react
    <Home/>
  </div>;
};

export default App;

