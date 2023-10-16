import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import project1 from "../Assets/project1.PNG";
import project2 from "../Assets/project2.PNG";
import project3 from "../Assets/project3.PNG";
import project4 from "../Assets/project4.PNG";
import project5 from "../Assets/project5.PNG";
import { MdOutlineSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate =new useNavigate();
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <div>
          <div className="w-[100%]  bg-slate-500 text-white p-[5rem] ">
            <h1 className="text-5xl font-serif flex items-center">
              Make Bright Ideas Happen
            </h1>
            <p className="text-lg p-2 font-mono mt-5 text-white flex items-center">
              Access global talent on the freelancer website trusted by over 1
              million businesses worldwide.
            </p>

            <p className="text-lg p-2 font-mono  text-whiteflex items-center ">
              Manage the entire project within Freelancer
            </p>

            <p className="text-lg p-2 mt-5 font-mono  text-white flex items-center ">
              Upgrade your skills for a life time.
            </p>
            <p className="text-md p-2 mt-5 font-mono mb-12  text-white flex items-center ">
              Great deals only with Us
            </p>
            <div
              className="w-[720px] flex justify-between  bg-white rounded-2xl h-20 text-white"
              placeholder="Search"
            >
              <input
                className="border-2 w-[90%] text-3xl text-black"
                type="text"
                placeholder="search"
              ></input>
              <MdOutlineSearch className=" text-5xl bg-orange-500 h-20 w-20 rounded-2xl" />
            </div>
          </div>
          <div className=" w-full pb-10 flex mt-5 ml-3 bg-gray-100 rounded-xl shadow-slate-400 ">
            <div className="w-full flex flex-col justify-start">
              <h1 className="text-2xl font-medium   flex  items-center p-2 ml-10 mt-20  text-purple-950">
                No project too big or too small
              </h1>
              <h1 className="text-2xl font-medium  text-purple-950 ml-10 p-2 flex  items-center ">
                Start your Career Now
              </h1>
              <p className="text-lg p-4 font-mono text-purple-950 ml-10">
                Use our quick and easy form to describe the project you’ve got
                in mind. The more detail you can give, the more relevant
                freelancers you’ll attract.
              </p>
              <p className="text-lg p-4 font-mono  text-purple-950 ml-10">
                Our artificial intelligence system does the hard work — matching
                and contacting the best freelancers for your project. Each
                freelancer then responds with their own tailored proposal.
              </p>
              <p className="text-lg p-4 font-mono  text-purple-950 ml-10">
                Review proposals, pick your freelancer and pay a deposit to
                start the project. Once your project has been completed — and
                you are totally satisfied — pay the freelancer through our
                protected payments system.
              </p>
              <button class="bg-orange-500 ml-[10rem]  font-bold text-white border py-2 w-[200px] rounded-xl mt-5 flex justify-center items-center hover:scale-110 duration-300">
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
            <div className="ml  -[90px]">
              <img
                class="rounded-3xl w-[80rem] h-[620px] p-5"
                src={project2}
                alt=""
              ></img>
            </div>
            <div className="w-full flex flex-col justify-start">
              <h1 className="text-2xl font-medium   flex  items-center p-2 ml-10 mt-20  text-purple-950">
                A Vast Collection of Skills
              </h1>
              <h1 className="text-2xl font-medium  text-purple-950 ml-10 p-2 flex  items-center ">
                Discover Incridible Freelancers
              </h1>
              <p className="text-lg p-4 font-mono text-purple-950 ml-10">
                Search our freelancer listings for rated and reviewed experts in
                every skill imaginable — One discovery could change your
                business forever.
              </p>
              <p className="text-lg p-4 font-mono  text-purple-950 ml-10">
                Refine your search by skill, location or hourly rate. Contact
                freelancers and request a proposal for your project.
              </p>

              <button class="bg-orange-500 ml-[13rem]  font-bold text-white border py-2 w-[200px] rounded-xl mt-20 flex justify-center items-center hover:scale-110 duration-300">
                Join With Us
              </button>
            </div>
          </div>
          h
          <div className=" w-full pb-10 flex mt-5 ml-3 bg-gray-100 rounded-xl shadow-slate-400 ">
            <div className="w-full flex flex-col justify-start">
              <h1 className="text-2xl font-medium   flex  items-center p-2 ml-10 mt-20  text-purple-950">
                Uncover new ways to grow your business
              </h1>
              <h1 className="text-2xl font-medium  text-purple-950 ml-10 p-2 flex  items-center ">
                Inroducing Offers
              </h1>
              <p className="text-lg p-4 font-mono text-purple-950 ml-10">
                Offers are pre-set bundles from freelancers. Browse a huge
                variety of offers — from as little as £10. The more detail you
                can give, the more relevant freelancers you’ll attract.
              </p>
              <p className="text-lg p-4 font-mono  text-purple-950 ml-10">
                Our artificial intelligence system does the hard work — matching
                and contacting the best freelancers for your project. Each
                freelancer then responds with their own tailored proposal.
              </p>
              <p className="text-lg p-4 font-mono  text-purple-950 ml-10">
                Offers are an excellent way for clients to test out ideas and
                build lasting relationships with freelancers. If you're happy
                with the results, request a follow-on project.
              </p>
              <button class="bg-orange-500 ml-[10rem]  font-bold text-white border py-2 w-[200px] rounded-xl mt-5 flex justify-center items-center hover:scale-110 duration-300">
                Get Projects
              </button>
            </div>
            <div className="mr-[90px]">
              <img
                class="rounded-3xl w-[80rem] h-[620px] p-5"
                src={project3}
                alt=""
              ></img>
            </div>
          </div>
          <div className=" w-full pb-10 flex mt-5 ml-3 bg-gray-100 rounded-xl shadow-slate-400 ">
            <div className="ml  -[90px]">
              <img
                class="rounded-3xl w-[80rem] h-[620px] p-5"
                src={project4}
                alt=""
              ></img>
            </div>
            <div className="w-full flex flex-col justify-start">
              <h1 className="text-2xl font-medium   flex  items-center p-2 ml-10 mt-20  text-purple-950">
                A Vast Collection of Skills
              </h1>
              <h1 className="text-2xl font-medium  text-purple-950 ml-10 p-2 flex  items-center ">
                Discover Incridible Freelancers
              </h1>
              <p className="text-lg p-4 font-mono text-purple-950 ml-10">
                Search our freelancer listings for rated and reviewed experts in
                every skill imaginable — One discovery could change your
                business forever.
              </p>
              <p className="text-lg p-4 font-mono  text-purple-950 ml-10">
                Refine your search by skill, location or hourly rate. Contact
                freelancers and request a proposal for your project.
              </p>

              <button class="bg-orange-500 ml-[13rem]  font-bold text-white border py-2 w-[200px] rounded-xl mt-20 flex justify-center items-center hover:scale-110 duration-300">
                Join With Us
              </button>
            </div>
          </div>
          <div className=" w-full pb-10 flex mt-5 ml-3 bg-gray-100 rounded-xl shadow-slate-400 mb-10">
            <div className="w-full flex flex-col justify-start">
              <h1 className="text-2xl font-medium   flex  items-center p-2 ml-10 mt-20  text-purple-950">
                No project too big or too small
              </h1>
              <h1 className="text-2xl font-medium  text-purple-950 ml-10 p-2 flex  items-center ">
                Start your Career Now
              </h1>
              <p className="text-lg p-4 font-mono text-purple-950 ml-10">
                Use our quick and easy form to describe the project you’ve got
                in mind. The more detail you can give, the more relevant
                freelancers you’ll attract.
              </p>
              <p className="text-lg p-4 font-mono  text-purple-950 ml-10">
                Our artificial intelligence system does the hard work — matching
                and contacting the best freelancers for your project. Each
                freelancer then responds with their own tailored proposal.
              </p>
              <p className="text-lg p-4 font-mono  text-purple-950 ml-10">
                Review proposals, pick your freelancer and pay a deposit to
                start the project. Once your project has been completed — and
                you are totally satisfied — pay the freelancer through our
                protected payments system.
              </p>
              <button class="bg-orange-500 ml-[10rem]  font-bold text-white border py-2 w-[200px] rounded-xl mt-5 flex justify-center items-center hover:scale-110 duration-300">
                Get Projects
              </button>
            </div>
            <div className="mr-[90px]">
              <img
                class="rounded-3xl w-[80rem] h-[620px] p-5"
                src={project5}
                alt=""
              ></img>
            </div>
          </div>
          h
        </div>
      </div>
      <div className="w-[100%] flex flex-col items-center justify-center bg-orange-400 text-white p-[5rem] ">
        <h1 className="text-5xl font-serif flex items-center">
          Find an Expert for anything in our Website
        </h1>
        <p className="text-lg p-2 font-mono mt-5 text-white flex items-center">
          Work with curated freelance talent from all over the world.
        </p>

        <p className="text-lg p-2 font-mono  text-whiteflex items-center ">
          Manage the entire project within PeoplePerHour..
        </p>

        <p className="text-lg p-2 mt-5 font-mono  text-white flex items-center ">
          Pay securely with confidence.
        </p>
        <button class="bg-white ml-[10rem] flex items-center mr-[12rem] font-semibold text-orange-500 border py-2 w-[200px] rounded-xl mt-5 justify-center  hover:scale-110 duration-300" onClick={()=>navigate("/profile")}>
          Become a Member
        </button>
        <p className="text-md p-2 mt-5 font-mono  text-white flex items-center ">
          No Upfront payments or hidden fees
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
