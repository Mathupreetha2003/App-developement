import React from 'react'
import freelance1 from '../Assets/freelance1.PNG'
import Signup from './Signup'
import Home from './Home';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = new useNavigate();
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center py-5">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
            <div class="sm:w-1/2 px-16">
                <h2 class="font-bold text-2xl" onClick={() => navigate("/home")}>Login</h2>
                <p class="text-sm mt-4">If you already a member, easily log in</p>
                <form class="flex flex-col gap-4">
                  <input class="p-2 mt-8 rounded-xl border " type="text" name="email" placeholder="Email"></input>
                  <div class="relative">
                  <input class="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password"></input>
                  </div>
                  <button class="bg-cyan-600 rounded-xl cursor-pointer text-white py-2 hover:scale-110 duration-300">Login</button>
                </form>
                <div class="mt-10 grid grid-cols-3 items-center justify-center text-gray-500">
                  <p class="text-center justify-between ml-[6rem]">OR</p>
                </div>
                <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center hover:scale-110 duration-300">Login with Google</button>
                <p class="border-gray-400 mt-5 text-sm border-b py-4">Forgot your Password? :(</p>

                <div class="mt-3 text-sm flex justify-between items-center">
                  <p>If you don't have an account..</p>
                  <button class="py-2 px-5 bg-white border rounded-xl hover:scale-200" onClick={() => navigate("/signup")}>SignUp</button>
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
