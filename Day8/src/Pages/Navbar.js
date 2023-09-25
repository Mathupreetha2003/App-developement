import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const nav = new useNavigate();
  return (
    <div className='flex w-full bg-slate-600 p-[1rem] fixed'>
      <div>
        <p className="text-2xl text-semibold text-white ml-20">Freelancer</p>
      </div>
      <div className='flex w-full justify-end '>
        <button className='bg-white rounded-full py-2 px-5 mr-4 hover:scale-110' onClick={()=>nav("/db")}>DashBoard</button>
        <button className='bg-white rounded-full py-2 px-5 mr-4 hover:scale-110' onClick={()=>nav("/home")}>Home</button>
        <button className='bg-white rounded-full py-2 px-5 mr-4 hover:scale-110' onClick={()=>nav("/freelancer")}>Freelancer</button>
        <button className='bg-white rounded-full py-2 px-5 mr-4 hover:scale-110' onClick={()=>nav("/login")}>Login</button>
        <button className='bg-white rounded-full py-2 px-4 mr-4 hover:scale-110' onClick={()=>nav("/signup")}>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
