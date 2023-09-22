import React from "react";
import Sidebar from "./Sidebar";
import db1 from "../Assets/db1.PNG";
import Freelancer from "./Freelancer";
import work from "../Assets/work.PNG";
import freelance1 from "../Assets/freelance1.PNG";
import free from "../Assets/free.PNG";
import project5 from"../Assets/project5.PNG";
import {RiDoubleQuotesL } from "react-icons/ri";
import design1 from '../Assets/design1.jpg';
import Navbar from "./Navbar";
import p1 from "../Assets/p1.jpg";
import p2 from "../Assets/p2.jpg";
import logo1 from "../Assets/logo1.png";
import igloo from "../Assets/igloo.PNG";
import redfox from "../Assets/redfox.PNG";
import mavimor from "../Assets/mavimor.PNG";
import bakers from "../Assets/bakers.PNG";
import velocity from "../Assets/velocity.PNG";
import mike from "../Assets/mike.PNG";
import {AiTwotoneStar } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar />
      <div>
      <img class="rounded-xl w-full h-[300px]" src={design1} alt=""></img>
      </div>

      <div className="flex gap-20">
      <div class=" bg-gray-200 w-[440px] mb-5 ml-24 rounded-xl">
        <div className="flex justify-center p-5">
        <img class=" rounded-full w-[80px] h-[80px] outline-dashed" src={logo1} alt=""></img>
        </div>
        <div className="p-2 ml-3">
          <h1 className="text-xl text-ellipsis mb-2">Mike Smith</h1>
          <p className="text-base text-ellipsis mb-1">Logo Design | Graphic Designer</p>
          <p className="text-sm mb-1">Torquay , United Kindom</p>
          <p className="text-sm mb-5">English Speaking</p>
          <p className="text-lg mb-2">About Mike</p>
          
          <p className='mb-5'>I'm Mike, designer based in Devon.Offering affordable designs here on People Per Hour. This has enabled me to work with many people from all
           over the world. From my country of England to America, to South Africa to UAE and many others.</p>
          <div className="flex justify-between">
            <div className="flex">
            <AiTwotoneStar className="text-3xl text-yellow-500"/>
            <p className="text-xl text-ellipsis">5.0 ratings</p>
            </div>
            <p className="text-xl text-ellipsis">216$/hr</p>
          </div>
          <div className=" p-4">
          <button class="bg-orange-500  font-bold text-white border w-[200px] rounded-xl mt-5 flex justify-center py-2 hover:scale-110 duration-300">
                Contact
              </button>
              </div>
              <div>
                <h1 className="mb-2">Skills</h1>
                <div className="text-xs flex justify-between">
                  <p className="">Adobe Illustrator</p>
                  <p>Graphic Designer</p>
                  <p>Logo Designer</p>
                </div>
              </div>
        </div>
      </div>

      <div className="bg-gray-300 p-5 w-full rounded-xl"> 
      <div className="bg-slate-400 rounded-xl flex justify-center">
        <h1 className="text-2xl justify-center text-white text-ellipsis">Portfolio</h1>
        </div>
        <div className="grid grid-cols-3 gap-5">
        <img class="p-3 ml-5 mt-16 w-[250px] h-[140px]" src={igloo} alt=""></img>
        <img class="p-3 ml-3 mt-16 w-[250px] h-[140px]" src={redfox} alt=""></img>
        <img class="p-3 ml-3 mt-16 w-[250px] h-[140px]" src={mavimor} alt=""></img>
        <img class="p-3 ml-5 mt-3 w-[250px] h-[140px]" src={bakers} alt=""></img>
        <img class="p-3 ml-3 mt-3 w-[250px] h-[140px]" src={velocity} alt=""></img>
        <img class="p-3 ml-3 mt-3 w-[250px] h-[140px]" src={mike} alt=""></img>
       
        </div>
      </div>

      </div>
      
      <div className="flex ml-6">
      <div className="mb-2 w-[50%] flex mt-[200px] ml-[83px] bg-gray-200 rounded-xl shadow-slate-400 p-5">
        <div className="w-full flex flex-col justify-start">
          <RiDoubleQuotesL className="text-5xl text-cyan-600"/>
          <h1 className="text-2xl font-semibold   flex  items-center p-5">
            We have buit a Network of trusted freelancers we can depend on
          </h1>
          <button class="bg-cyan-600 font-bold text-white border py-2 w-[200px] rounded-xl mt-12 ml-10 flex justify-center items-center hover:scale-110 duration-300">
            Vist Profile
          </button>
        </div>
        <div>
          <img class="rounded-full w-[30rem]" src={p1} alt=""></img>
          <p className="ml-[60px] text-xl p-1 font-semibold">
            Kiarah Junahad
          </p>
          <p className="ml-[70px] text-md p-1 font-semibold">
            Data Analyst
          </p>
        </div>
      </div>
      <div className="mb-2 w-[50%] flex mt-[200px] ml-[83px] bg-gray-200 rounded-xl shadow-slate-400 p-5">
      <div className="w-full flex flex-col justify-start">
      <RiDoubleQuotesL className="text-5xl text-cyan-600"/>
          <h1 className="text-2xl font-semibold   flex  items-center p-5">
          The ease of communication provided make the process of outsourcing effortless.
          </h1>
          
          
          <button class="bg-cyan-600 font-bold text-white border py-2 w-[200px] rounded-xl mt-5 flex justify-center items-center hover:scale-110 duration-300">
             Visit Profile
          </button>
        </div>
        <div>
        <img class="rounded-full w-[30rem]" src={p2} alt=""></img>
          <p className="ml-[60px] text-xl p-1 font-semibold">
            Ana Roudeguez
          </p>
          <p className="ml-[60px] text-md p-1 font-semibold">
            Digital Marketing expert
          </p>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Dashboard;
