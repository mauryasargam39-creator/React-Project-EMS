import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log('email is', email)
    console.log('password is', password)
    setEmail('')
    setPassword('')
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={(e)=>{
           submitHandler(e)
        }}
           
        action="" className='flex flex-col items-center justify-center'>
          <input 
           value={email}
           onChange={(e)=>{
              setEmail(e.target.value)
           }}
            required className=' outline-none bg-transparent border-2 
            placeholder:text-gray-400 border-emerald-600 rounded-full py-3 px-4 text-xl' 
            type="email" placeholder='Enter  your email' 
          />
          <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required className=' outline-none bg-transparent border-2 mt-3
            placeholder:text-gray-400 border-emerald-600 rounded-full py-3 px-4 text-xl'  
            type="password" placeholder='Enter password'
          />
          <button className=' mt-5 text-white border-none outline-none border-2 hover:bg-emerald-600
            font-semibold placeholder:text-gray-400 bg-emerald-600 rounded-full py-3 px-4 text-xl w-full' >
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
