import {useState} from 'react'



// let chat = [
//   {
//     name: 'devi',
//     message: 'hello every one',
//     time: '3 min ago',
//   },
//   {
//     name: 'anand',
//     message: 'hi',
//     time: '5 min ago',
//   },
//   {
//     name: 'Yogesh',
//     message: 'how are you',
//     time: '7 min ago',
//   },
// ]

// // const Card = () => {
// //   return (
// //     <>
// //       {chat.map((item) => {
// //         return (
// //           <div>
// //             <h1>{item.name}</h1>
// //             <p>{item.message}</p>
// //             <p>{item.time}</p>
// //           </div>
// //         )
// //       })}
// //     </>
// //   )
// // }

// // export  default Card

// const Card = ({name,message,time}) => {
//     // console.log(value)
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{message}</p>
//       <p>{time}</p>
//     </div>
//   )
// }

// export let Chat=()=>{
// return <div>
// {chat.map((item)=>{
//     return <Card  name={item.name} message={item.message} time={item.time} />
// })}

// </div>
// }

// export default Card
let colors=['red','blue','green','yellow']
const Card = () => {
  // console.log(useState())
console.log("render");
// let number=50
  let [value,setValue]=useState(50)//[50,f]

  let [color,setColor]=useState(colors[2])//[50,
//   console.log(value)
//   console.log(value[0]);
  let number=value[0]
//   console.log(value[1]);
  let setValue=value[1]
  // setValue(number)

  // [undefined,f]
//   let color='red'
//   let handleColor=()=>{
//     console.log('hello')
// color='blue'
//   }
//   console.log(color);

let increment=()=>{
  setValue(value++)
  setColor('blue')
// setValue(number++)
// console.log('increment')
// number++
// console.log(number)
}

let decrement=()=>{
  setValue(value--)
}
let reset=()=>{
  setValue(0)
}
  return (
    <>
      {/* <button onClick={handleColor}>change background</button> */}
      <div
        className="card"
        style={{ width: '20rem', height: '20rem', backgroundColor:color }}
      >
      <button onClick={increment}>
        increase
      </button>
      <h1>{value}</h1>

      <button onClick={decrement}>decrease</button>
      <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default Card
