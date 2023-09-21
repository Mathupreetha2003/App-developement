import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import project1 from "../Assets/project1.PNG";
import project2 from "../Assets/project2.PNG";
import project3 from "../Assets/project3.PNG";
const Home = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <div>
          <div className=" w-full pb-10 flex mt-5 ml-3 bg-gray-100 rounded-xl shadow-slate-400 ">
            <div className="w-full flex flex-col justify-start">
              <h1 className="text-2xl font-medium   flex  items-center p-2 ml-10 mt-20  text-purple-950">
              No project too big or too small
              </h1>
              <h1 className="text-2xl font-medium  text-purple-950 ml-10 p-2 flex  items-center ">
              Start your Career Now
              </h1>
              <p className="text-lg p-4 font-mono text-purple-950 ml-10">
              Use our quick and easy form to describe the project you’ve got in mind.
               The more detail you can give, the more relevant freelancers you’ll attract.
              </p>
              <p className="text-lg p-4 font-mono  text-purple-950 ml-10">
              Our artificial intelligence system does the hard work — matching and contacting the best freelancers for your project.
               Each freelancer then responds with their own tailored proposal.
              </p>
              <p className="text-lg p-4 font-mono  text-purple-950 ml-10">
              Review proposals, pick your freelancer and pay a deposit to start the project. Once your project has been completed — 
              and you are totally satisfied — pay the freelancer through our protected payments system.
              </p>
              <button class="bg-cyan-600 ml-[10rem]  font-bold text-white border py-2 w-[200px] rounded-xl mt-5 flex justify-center items-center hover:scale-110 duration-300">
                Get Projects
              </button>
            </div>
            <div className="mr-[90px]">
              <img
                class="rounded-3xl w-[80rem] h-[620px] p-5"
                src={project1}
                alt=""
              ></img>
            </div>
          </div>
          <div className=" w-full pb-10 flex mt-5 ml-3 bg-gray-100 rounded-xl shadow-slate-400 ">
            <div className="w-full flex flex-col justify-start">
              <h1 className="text-2xl font-medium   flex  items-center p-2 ml-10 mt-20  text-purple-950">
              A Vast Collection of Skills
              </h1>
              <h1 className="text-2xl font-medium  text-purple-950 ml-10 p-2 flex  items-center ">
              Discover Incridible Freelancers
              </h1>
              <p className="text-lg p-4 font-mono text-purple-950 ml-10">
              Search our freelancer listings for rated and reviewed experts
               in every skill imaginable — One discovery could change your business forever.
              </p>
              <p className="text-lg p-4 font-mono  text-purple-950 ml-10">
              Refine your search by skill, location or hourly rate. Contact freelancers and request a proposal for your project.
              </p>
              <p className="text-lg p-4 font-mono  text-purple-950 ml-10">
              Review proposals, pick your freelancer and pay a deposit to start the project. Once your project has been completed — 
              and you are totally satisfied — pay the freelancer through our protected payments system.
              </p>
              <button class="bg-cyan-600 ml-[10rem]  font-bold text-white border py-2 w-[200px] rounded-xl mt-5 flex justify-center items-center hover:scale-110 duration-300">
                Join With Us
              </button>
            </div>
            <div className="mr-[90px]">
              <img
                class="rounded-3xl w-[80rem] h-[620px] p-5"
                src={project2}
                alt=""
              ></img>
            </div>
          </div>h
        </div>
      </div>
    </div>
  );
};

export default Home;
