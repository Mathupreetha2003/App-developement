import React from "react";
import Sidebar from "./Sidebar";
import db1 from "../Assets/db1.PNG";
import Freelancer from "./Freelancer";
import work from "../Assets/work.PNG";
import freelance1 from "../Assets/freelance1.PNG";
import free from "../Assets/free.PNG";
const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div class="w-[1350px] h-[120px] ml-[83px]">
        <img class="rounded-2xl w-full h-[300px]" src={work} alt=""></img>
      </div>
      <div className="flex ml-6">
      <div className="mb-2 w-[50%] flex mt-[200px] ml-[83px] bg-gray-200 rounded-xl shadow-slate-400 p-5">
        <div className="w-full flex flex-col justify-start">
          <h1 className="text-2xl font-semibold   flex  items-center p-5">
            Let's get started with Freelance!
          </h1>
          <p className="text-lg p-3 font-semibold">
            Get the more from Freelance and Live your dream work here
          </p>
          <button class="bg-cyan-600 font-bold text-white border py-2 w-[200px] rounded-xl mt-5 flex justify-center items-center hover:scale-110 duration-300">
            Get Projects
          </button>
        </div>
        <div>
          <img class="rounded-2xl w-[30rem]" src={freelance1} alt=""></img>
        </div>
      </div>
      <div className="mb-2 w-[50%] flex mt-[200px] ml-[83px] bg-gray-200 rounded-xl shadow-slate-400 p-5">
      <div className="w-full flex flex-col justify-start">
          <h1 className="text-2xl font-semibold   flex  items-center p-5">
            Get hired as soon as possible
          </h1>
          <p className="text-lg p-4 font-semibold">
            Work from anywhere at anytime and get Paid!
          </p>
          <button class="bg-cyan-600 font-bold text-white border py-2 w-[200px] rounded-xl mt-5 flex justify-center items-center hover:scale-110 duration-300">
             Get Projects
          </button>
        </div>
        <div>
          <img class="rounded-2xl w-[30rem] h-[220px]" src={free} alt=""></img>
        </div>

      </div>
      </div>
      <div class="pl-72 ">
        <Freelancer />
      </div>
    </div>
  );
};

export default Dashboard;
