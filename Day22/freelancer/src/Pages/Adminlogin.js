import React, { useState } from 'react'
import thenewfreelancer from '../Assets/thenewfreelancer.png'
import Signup from './Signup'
import Home from './Home';
import Dashboard from './Dashboard';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../Redux/userSlice';
import axios from 'axios';
const Adminlogin = () => {
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
  })
  
  await axios.get(`http://localhost:8080/api/v1/auth/getfreelancerbyid/${localStorage.getItem("userid")}`).then((response)=> {
  localStorage.setItem("userdata",response.data);
  console.log(response.data);
  const username = response.data.firstName + " " + response.data.lastName;
  dispatch(login({email:username}))
})

      navigate("/db")
    }


  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center py-5">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
            <div class="sm:w-1/2 px-16">
                <h2 class="font-bold text-2xl text-green-600" >ADMIN LOGIN</h2>
                <p class="text-lg mt-4">Welcome Admin</p>
                <form onSubmit={handleSubmit} class="flex flex-col gap-4">
                  <input class="p-2 mt-8 rounded-xl border " type="text" name="email" onChange={handleChange} placeholder="Email"></input>
                  <div class="relative">
                  <input class="p-2 rounded-xl border w-full" type="password" name="password" onChange={handleChange} placeholder="Password"></input>
                  </div>
                  <div className="py-4 ">
                  <button type='submit' class="bg-green-600 rounded-xl cursor-pointer text- text-white py-2 p-24 hover:scale-110 duration-300" 
               >Login</button>
               </div>
                </form>
               
            </div>
            <div class="sm:block hidden w-1/2">
                <img class="rounded-2xl" src={thenewfreelancer} alt=""></img>
            </div>

        </div>
      </section>

    </div>
  )
}

export default Adminlogin
