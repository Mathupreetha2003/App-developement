import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Purchases from "./Purchases";
import db1 from "../Assets/db1.PNG";
import Freelancer from "./Freelancer";
import work from "../Assets/work.PNG";
import freelance1 from "../Assets/freelance1.PNG";
import free from "../Assets/free.PNG";
import project5 from "../Assets/project5.PNG";
import { RiDoubleQuotesL } from "react-icons/ri";
import design1 from "../Assets/design1.jpg";
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
import Reviews from "./Reviews";

import { AiTwotoneStar } from "react-icons/ai";

const Dashboard = () => {
  const [view1,setView1] =useState("Reviews");
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>
        <img class="rounded-xl w-full h-[300px]" src={design1} alt=""></img>
      </div>

      <div className="flex gap-20 pb-10 bg-gray-200 px-20">
        <div class=" bg-white w-[33rem] mt-[-2.5rem] mb-5 ml-24 rounded-xl px-5 pb-10 h-fit">
          <div className="flex justify-center p-5">
            <img
              class=" rounded-full w-[8rem] h-[8rem] mt-[-4rem] border-[0.3rem] border-white"
              src={logo1}
              alt=""
            ></img>
          </div>
      
          <div className="p-2 ml-3">
            <h1 className="text-xl text-ellipsis mb-2">Mike Smith</h1>
            <p className="text-base text-ellipsis mb-1">
              Logo Design | Graphic Designer
            </p>
            <p className="text-sm mb-1">Torquay , United Kindom</p>
            <p className="text-sm mb-5 text-gray-600">English Speaking</p>

            <p className="mb-5 text-gray-600 text-sm">
              I'm Mike, designer based in Devon.Offering affordable designs here
              on People Per Hour. This has enabled me to work with many people
              from all over the world. From my country of England to America, to
              South Africa to UAE and many others.
            </p>
            <div className="flex justify-between">
              <div className="flex">
                <AiTwotoneStar className="text-xl text-yellow-500" />
                <AiTwotoneStar className="text-xl text-yellow-500" />
                <AiTwotoneStar className="text-xl text-yellow-500" />
                <AiTwotoneStar className="text-xl text-yellow-500" />
                <AiTwotoneStar className="text-xl text-yellow-500" />
                <p className=" text-ellipsis">5.0 ratings</p>
              </div>
              <p className="text-xl text-ellipsis">216$/hr</p>
            </div>
            <div className=" p-4">
              <button class="bg-orange-500  font-bold text-white border w-full rounded-xl mt-5 flex justify-center py-2 hover:scale-110 duration-300">
                Contact
              </button>
            </div>
            <div className="px-3">
              <h1 className="mb-2">Skills</h1>
              <div className="text-xs grid grid-cols-2 justify-between gap-2">
                <p className="bg-gray-300 p-2 text-xs rounded-xl">
                  Adobe Illustrator
                </p>
                <p className="bg-gray-300 p-2 text-xs rounded-xl">
                  Graphic Designer
                </p>
                <p className="bg-gray-300 p-2 text-xs rounded-xl">
                  Logo Designer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[3rem]">
          <div className="flex flex-col gap-3">
            <p className="text-orange-500 w-fit ml-[1rem] font-semibold text-lg">Portfolio</p>
            <p className="bg-orange-500  p-[2px] w-[8rem]"></p>
          </div>
          
        <div className="bg-white p-5 w-full rounded-xl h-fit ">
          <div className="rounded-xl flex justify-center"></div>
          <div className="grid grid-cols-3 gap-5">
            <img class="p-3  mt-3 w-[250px] h-[140px]" src={igloo} alt=""></img>
            <img class="p-3 mt-3 w-[250px] h-[140px]" src={redfox} alt=""></img>
            <img
              class="p-3 mt-3 w-[250px] h-[140px]"
              src={mavimor}
              alt=""
            ></img>
            <img
              class="p-3  mt-3 w-[250px] h-[140px]"
              src={bakers}
              alt=""
            ></img>
            <img
              class="p-3 mt-3 w-[250px] h-[140px]"
              src={velocity}
              alt=""
            ></img>
            <img class="p-3  mt-3 w-[250px] h-[140px]" src={mike} alt=""></img>
          </div>
        </div>
        
        <div className="bg-white rounded-xl  mt-5 text-gray-500 text-bold text-xl w-[44rem] h-[40rem] p-5">
        <div className="flex gap-4">
          <button onClick={()=>setView1("Reviews")}>Reviews</button>
          <button onClick={()=>setView1("Purchases")}>Purchases</button>
        </div>
            <Reviews className={`${view1 === "Purchases" ? "block" : "hidden"}`}/>
            <Purchases className={`${view1 === "Reviews" ? "block" : "hidden"}`}/>
          </div>
        </div>
        
        
      </div>
      
          


      <div className="flex ml-6">
        <div className="mb-2 w-[50%] flex mt-[200px] ml-[83px] bg-gray-200 rounded-xl shadow-slate-400 p-5">
          <div className="w-full flex flex-col justify-start">
            <RiDoubleQuotesL className="text-5xl text-cyan-600" />
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
            <p className="ml-[70px] text-md p-1 font-semibold">Data Analyst</p>
          </div>
        </div>
        <div className="mb-2 w-[50%] flex mt-[200px] ml-[83px] bg-gray-200 rounded-xl shadow-slate-400 p-5">
          <div className="w-full flex flex-col justify-start">
            <RiDoubleQuotesL className="text-5xl text-cyan-600" />
            <h1 className="text-2xl font-semibold   flex  items-center p-5">
              The ease of communication provided make the process of outsourcing
              effortless.
            </h1>

            <button class="bg-cyan-600 font-bold text-white border py-2 w-[200px] rounded-xl mt-5 flex justify-center items-center hover:scale-110 duration-300">
              Visit Profile
            </button>
          </div>
          <div>
            <img class="rounded-full w-[30rem]" src={p2} alt=""></img>
            <p className="ml-[60px] text-xl p-1 font-semibold">Ana Roudeguez</p>
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
