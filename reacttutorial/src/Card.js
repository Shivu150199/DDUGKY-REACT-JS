let chat = [
  {
    name: 'devi',
    message: 'hello every one',
    time: '3 min ago',
  },
  {
    name: 'anand',
    message: 'hi',
    time: '5 min ago',
  },
  {
    name: 'Yogesh',
    message: 'how are you',
    time: '7 min ago',
  },
]

// const Card = () => {
//   return (
//     <>
//       {chat.map((item) => {
//         return (
//           <div>
//             <h1>{item.name}</h1>
//             <p>{item.message}</p>
//             <p>{item.time}</p>
//           </div>
//         )
//       })}
//     </>
//   )
// }

// export  default Card

const Card = ({name,message,time}) => {
    // console.log(value)
  return (
    <div>
      <h1>{name}</h1>
      <p>{message}</p>
      <p>{time}</p>
    </div>
  )
}

export let Chat=()=>{
return <div>
{chat.map((item)=>{
    return <Card  name={item.name} message={item.message} time={item.time} />
})}

</div>
}

export default Card
