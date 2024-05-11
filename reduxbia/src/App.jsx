// import { useDispatch, useSelector } from "react-redux";
// import { legacy_createStore} from "redux";



// // let store=createStore()

// const initialState={
//   count:0,
//   isAdmin:false,
//   value:0,
//   name:'devi'
// }
// const reducer=(state=initialState,action)=>{

// if(action.type=='increase'){
// return {...state,count:state.count+1,value:action.payload}
  
// }
//  if(action.type=='decrease'){
// state.count=state.count-1
// }

// return state
// }
// export let store=legacy_createStore(reducer)



// //dispatch//
// //getState//
// //subscriber



// function App() {
//   const dispatch=useDispatch()
//   // console.log(dispatch)
//   const {count}=useSelector(state=>state)
//   // console.log(value)
// const handleIncrese=()=>{
// dispatch({ type: 'increase',payload:10 })
// }
// const handleDecrese=()=>{
//   dispatch({type:'decrease'})
// }


//   return (
//     <>
//    <button onClick={handleIncrese}>increse</button>
//    <h1>{count}</h1>
//    <button onClick={handleDecrese}>decrease</button>
//     </>
//   )
// }

// export default App




// state={count:0}
// action// action is a string through which we can change the state
// subscriber is dunction which is going to execute after dispatching the action



// import { legacy_createStore as createStore } from 'redux'

// let reducer=(state,action)=>{
// console.log(state)
// console.log(action)
// if(action.type=='increase'){
// return {count:state.count+1}
// } else if(action.type=='decrease'){
//   return {count:state.count-1}
// }


//   return {count:0}
// }


// let store=createStore(reducer)

// console.log(store)
// console.log('State',store.getState())
// console.log('dispatch',store.dispatch({type:'increase'}))
// store.subscribe(()=>{
//   console.log('Hello')
// })


// const App = () => {
// const handleIncrease=()=>{

//   store.dispatch({ type: 'increase' })

// }
// const handleDecrease=()=>{
//   store.dispatch({type:'decrease'})
// }

//   return (
//     <div>
// <h1>hello redux</h1>

//       <button onClick={handleIncrease}>
// Dispatch increase
//       </button>
//       <button onClick={handleDecrease}>
// Dispatch increase
//       </button>
//       {/* <button onClick={}>increse by 10</button> */}
      
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseValue } from './redux/action'

const App = () => {
  const count=useSelector((state)=>state.count)
  // console.log(state)
  const dispatch=useDispatch()

  const handleDecrease=()=>{
  //  dispatch(increaseValue())
  increaseValue()
  }

  const handleIncrease=()=>{
    console.log('increse')
    dispatch({type:'INC'})
  }
  const handleChange=(e)=>{
    dispatch({type:'SET',payload:e.target.value})
  }
  return (
    <div>
      <button onClick={handleIncrease}>increse</button>
      <input type="text" value={count} onChange={handleChange} />
<h2>{count}</h2>
<button onClick={handleDecrease}>decrese</button>
    </div>
  )
}

export default App
