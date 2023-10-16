import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AiTwotoneStar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";
import coffee from "../Assets/coffee.jpg";
import Dashboard from "./Dashboard";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";

import Design from "../Data/Design";
import Footer from "./Footer";
const Freelancer = () => {
  const navigate = new useNavigate();
  const [users,setUsers] = useState([]);

  useEffect(() => {
   
   axios
    .get(`http://localhost:8080/api/v1/auth/getfreelancerprofile`)
    .then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  },[]);
  

  return (

    
    <div className="position-fixed">
      <Navbar />
      <div className="pt-[5rem]">
        <div className="bg-gray-200">
          <div className="flex justify-center p-5">
            <h1 className="text-5xl text-red-800 text-bold mb-5">Freelancers Available</h1>
          </div>
          <div className="grid grid-cols-4 gap-3 pt-[1rem] pb-[5rem] pr-[3rem]">
            {users?.map((user, index) => (
              <div className="bg-white hover:scale-95 w-[300px] h-[550px] ml-[50px] p-5 rounded-lg mb-1">
                <div className="w-full flex justify-center">
                  <img
                    class="rounded-full w-[150px] h-[150px] border-spacing-1"
                    src={user.image}
                    alt=""
                  ></img>
                </div>
                <p className="flex justify-center text-xl p-1 font-semibold">
                  {user.name}
                </p>
                <div className="flex justify-center">
                  <MdLocationPin className="text-red-500 text-4xl" />
                  <p className="text-ellipsis text-2xl ">{user.location}</p>
                </div>
                <p className="text-ellipsis text-base mb-5 justify-center line-clamp-2">
                  {user.description}
                </p>
                <div>
                  <div className="flex justify-center">
                    <AiTwotoneStar className="text-yellow-400 text-3xl" />
                    <span className="text-ellipsis text-2xl">
                      {user.rating}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <p className="p-2 ml-1 text-ellipsis text-xl mb-3">
                    {user.numberofprojects}+ Projects
                  </p>
                  <p className="p-2 ml-1 text-ellipsis text-xl mb-3">
                    {user.paymentperhour}/hr
                  </p>
                </div>
                <div className="flex justify-center">
                  <button onClick={() => navigate("/db")}
                    class="bg-orange-500  font-bold text-white border w-[200px] rounded-xl mt-5 
                    flex justify-center py-2 hover:scale-110 duration-300"
                  >
                    Visit Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="bg-slate-300 w-full pb-5">
        <div className="p-7">
          <div className="p-5 mb-3">
            <h1 className="text-5xl flex justify-start text-semibold text-fuchsia-900 ">
              Getting Started With Freelancer App
            </h1>
          </div>

          <div className="flex p-3 gap-7 justify-evenly">
<div className="flex flex-col gap-6 pt-5 ">
            <div className="flex gap-5">
              <BsCheck2Circle className="text-5xl text-bold text-green-700" />
              <p className="text-2xl text-ellipsis">
                Get matched with expert freelancers in minutes
              </p>
            </div>
            <div className="flex gap-5">
              <BsCheck2Circle className="text-5xl text-bold text-green-700" />
              <p className="text-2xl text-ellipsis">
                Money back guarantee and anti-fraud protection
              </p>
            </div>
            <div className="flex gap-5">
              <BsCheck2Circle className="text-5xl text-bold text-green-700" />
              <p className="text-2xl text-ellipsis">
                Dedicated 24/7 customer service team
              </p>
            </div>
            <div className="">
              <button class="bg-orange-500  font-bold text-white border w-[220px] rounded-xl mt-5 flex justify-center py-3 hover:scale-110 duration-300">
                Start for Free
              </button>
            </div>
            </div>
            <div className="flex flex-col">
            <img
              class=" rounded-sm w-[36rem] h-[20rem]"
              src={coffee}
              alt=""
            ></img>
            </div>
          </div>
          
        </div>
        <div></div>
      </div>
      <Footer/>
    </div>
  );
};

export default Freelancer;
