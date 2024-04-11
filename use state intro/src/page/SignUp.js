import React from 'react'
import Input from '../component/Input'

const SignUp = () => {
  return (
    <form>
      {/* <div>
        <label htmlFor="">xylsd</label>
        <input type="text" placeholder="write your name" />
      </div> */}
      <Input type="text" label="username" placeholder="Write your name" className='jeet' />
      <Input type="email" label="email" placeholder="Write your email" className='jeet'/>
      <Input type="password" label="password" placeholder="Write your password" className='jeet' />
    </form>
  )
}

export default SignUp
