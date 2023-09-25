import React from 'react'
import freelance from '../Assets/freelance.PNG'
import { useState } from 'react';
import Home from './Home';
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = new useNavigate();
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[age,setAge]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");

    const[isFirstName,setIsFirstName] = useState(true);
    const[isLastName,setIsLastName] = useState(true);
    const[isEmail,setIsEmail] = useState(true);
    const[isAge,setIsAge] = useState(true);
    const[isPassword,setIsPassword]=useState(true);
    const[isConfirmPassword,setIsConfirmPassword]=useState(true);
    
    const handleFirstName =(e)=>
    {
      setFirstName(e.target.value);
      setIsFirstName(true);
    }
    const handleLastName = (e) =>
    {
      setLastName(e.target.value);
      setIsLastName(true);
    }
    const handleAge = (e) =>
    {
      setAge(e.target.value);
      setIsAge(true);
    }
    const handleEmail = (e) =>
    {
      setEmail(e.target.value);
      setIsEmail(true);
    }
    const handlePassword = (e) =>
    {
      setPassword(e.target.value);
      setIsPassword(true);
    }
    const handleConfirmPassword = (e) =>
    {
      setConfirmPassword(e.target.value);
      setIsConfirmPassword(true);
    }
    const handleSubmit =(e) =>{
      e.preventDefault();

      if(!firstName)
      {
        setIsFirstName(false);
        return;
      }
      if(!lastName)
      {
        setIsLastName(false);
        return;
      }
      if(!age)
      {
        setIsAge(false);
        return;
      }
      if(!email)
      {
        setIsEmail(false);
        return;
      }
      if(!password)
      {
        setIsPassword(false);
        return;
      }
      if(!confirmPassword)
      {
        setIsConfirmPassword(false);
        return;
      }
      navigate("/home")
    }
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex  items-center rounded-2xl shadow-lg max-w-3xl p-5">
            <div class="sm:w-1/2 px-16">
                <h2 class="font-bold text-2xl">Signup</h2>
                <p class="text-sm mt-4">Signup and start your journey with us :) </p>
                <form class="flex flex-col gap-1" onSubmit={handleSubmit}>

                  <input onChange={handleFirstName} class={`p-2 mt-2 ${isFirstName?"border-gray-50":"border-red-500"} rounded-xl border`} type="text" name="FirstName" placeholder="FirstName"></input>
                  <input onChange={handleLastName} class={`p-2 mt-2 ${isLastName? "border-gray-50":"border-red-500"} rounded-xl border`}  type="text" name="LastName" placeholder="LastName"></input>
                  <input onChange={handleAge} class={`p-2 mt-2 ${isAge?"border-gray-50":"border-red-500"} rounded-xl border`}  type="age" name="Age" placeholder="Age"></input>
                  <input onChange={handleEmail} class={`p-2 mt-2 ${isEmail?"border-gray-50":"border-red-500"} rounded-xl border`}  type="text" name="Email" placeholder="Email"></input>
                  <input onChange={handlePassword} class={`p-2 mt-2 ${isPassword?"border-gray-50":"border-red-500"} rounded-xl border`}  type="password" name="Password" placeholder="Password"></input>
                  <input onChange={handleConfirmPassword} class={`p-2 mt-2 ${isConfirmPassword?"border-gray-50":"border-red-500"} rounded-xl border`}  type="password" name="ConfirmPassword" placeholder="ConfirmPassword"></input>
                  <div className='flex'>
                  <input type="checkbox" className='ml-[-1rem]'required></input><p>I accept the terms and conditions</p>
                  </div>
                  <button class="bg-emerald-800 rounded-xl text-white py-2 mt-5  hover:scale-110 duration-300" onSubmit={handleSubmit}>Sign Up</button>
                </form>
                
            </div>
            <div class="sm:block hidden w-1/2">
                <img class="rounded-2xl" src={freelance} alt=""></img>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Signup
