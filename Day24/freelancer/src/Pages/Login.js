import React, { useState } from 'react'
import freelance1 from '../Assets/freelance1.PNG'
import Signup from './Signup'
import Home from './Home';
import Dashboard from './Dashboard';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice';
import { FcGoogle } from "react-icons/fc";

import axios from 'axios';
import FreelancerService from '../Service/FreelancerService';
const Login = () => {
  const[user,setUser]=useState({
    email:"",
    password:""
  });
  const dispatch = new useDispatch();
  const navigate = new useNavigate();

  const handleChange  = async (e)=>
    {
setUser({...user,[e.target.name]: e.target.value})
}

const handleSubmit = async (event) => {


  event.preventDefault();
  await  axios.post(`http://localhost:8080/api/v1/auth/login`,user).then((response)=>{
    localStorage.setItem("token",response.data.token);
    localStorage.setItem("userid",response.data.id);
    console.log(localStorage.getItem("userid"))

    FreelancerService.getById(response.data.id).then((response)=> {
      localStorage.setItem("userdata",JSON.stringify(response.data));
      console.log(response.data);
      const username = response.data.firstName + " " + response.data.lastName;
      dispatch(login({email:username}))
    })
  })
  

      navigate("/db")
    };


  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center py-5">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
            <div class="sm:w-1/2 px-16">
                <h2 class="font-bold text-2xl" >Login</h2>
                <p class="text-sm mt-4">If you already a member, easily log in</p>
                <form onSubmit={handleSubmit} class="flex flex-col gap-4">
                  <input class="p-2 mt-8 rounded-xl border " type="text" name="email" onChange={handleChange} placeholder="Email"></input>
                  <div class="relative">
                  <input class="p-2 rounded-xl border w-full" type="password" name="password" onChange={handleChange} placeholder="Password"></input>
                  </div>
                  <button type='submit' class="bg-cyan-600 rounded-xl cursor-pointer text-white py-2 hover:scale-110 duration-300" 
               >Login</button>
                </form>
                <div class="mt-10 grid grid-cols-3 items-center justify-center text-gray-500">
                  <p class="text-center justify-between ml-[6rem]">OR</p>
                </div>
                <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:scale-110 duration-300"><FcGoogle className='text-3xl mr-1' onClick={()=>navigate("")}/>Login with Google</button>
                <p class="border-gray-400 mt-5 text-sm border-b py-4">Forgot your Password? :</p>
                <div class="mt-3 text-sm flex justify-between items-center">
                  <p>If you don't have an account..</p>
                  <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110" onClick={() => navigate("/signup")}>SignUp</button>
                </div>
            </div>
            <div class="sm:block hidden w-1/2">
                <img class="rounded-2xl" src={freelance1} alt=""></img>
            </div>

        </div>
      </section>

    </div>
  )
}

export default Login
