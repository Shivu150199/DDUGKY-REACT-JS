import React from 'react'
import Label from './Label'
import InputChild from './InputChild'

const Input = ({ label, placeholder, type ,className}) => {
//   console.log(value)
  return (
    <div
      className={className}
      style={input}
    >
      {/* <label htmlFor={label}>{label}</label>
      <input type={type} placeholder={placeholder} /> */}
<Label label={label} />
<InputChild type={type} placeholder={placeholder}/>

    </div>
  )
}

let input = {
  border: '1 solid gray',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}
let border={
    border: '1px solid gray',
   
  
}

export default Input
