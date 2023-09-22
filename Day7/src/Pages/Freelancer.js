import React from 'react'
import Navbar from './Navbar'
import {AiTwotoneStar } from "react-icons/ai";
import {MdLocationPin } from "react-icons/md";
import freelance1 from "../Assets/freelance1.PNG";
import Design from '../Data/Design';
const Freelancer = () => {
  return (
    <div>
      <Navbar/>
      <div className="pt-[5rem]">

      <div className="bg-gray-200">
        <div className="flex justify-center p-5">
        <h1 className="text-5xl text-bold mb-5">Expert Freelancers</h1>
        </div>
<div className='grid grid-cols-4 gap-3 pt-[1rem] pb-[5rem] pr-[3rem]'>
{Design.map((design,index) => (

<div className="bg-white w-[300px] h-[550px] ml-[50px] p-5 rounded-lg mb-1">
<div className="w-full flex justify-center">
<img class="rounded-full w-[150px] h-[150px] border-spacing-1" src={design.image} alt=""></img>
</div>
<p className="flex justify-center text-xl p-1 font-semibold">
    {design.name}
  </p>
  <div className='flex justify-center'>
  <MdLocationPin className="text-red-500 text-4xl"/>
  <p className="text-ellipsis text-2xl ">{design.location}</p>
  </div>
  <p className="text-ellipsis text-base mb-5 justify-center line-clamp-2">
    {design.description}
  </p>
  <div>
    <div className="flex justify-center">
  <AiTwotoneStar className="text-yellow-400 text-3xl"/><span className="text-ellipsis text-2xl">{design.rating}</span></div></div>
  <div className='flex justify-between '>
  <p className="p-2 ml-1 text-ellipsis text-xl mb-3">
  {design.projects}+ Projects
  </p>
  <p className="p-2 ml-1 text-ellipsis text-xl mb-3">
  {design.payment}/hr
  </p>
  
  
  </div>
  <div className="flex justify-center">
  <button class="bg-orange-500  font-bold text-white border w-[200px] rounded-xl mt-5 
  flex justify-center py-2 hover:scale-110 duration-300">Visit Profile</button>
  </div>
</div>

))}
</div>
      

</div>
      </div>
    {/* <div className="flex mt-[10px]">
      <div className="cursor-pointer flex flex-col gap-3 justify-center items-center w-[18rem] h-[18rem] border-[1px] border-dashed border-lightgray bg-dimgray ">
        <div className="">
          <svg
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            class="CreateModulePrompt-addIcon-xq2 text-[#0057ff] w-[5rem] z-1 bg-[#dee8ff] p-6 rounded-full"
          >
            <path 
            fill="currentcolor"
            d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5,8.5a.5.5,0,0,1-.5.5H10v3.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V10H4.5A.5.5,0,0,1,4,9.5v-1A.5.5,0,0,1,4.5,8H8V4.5A.5.5,0,0,1,8.5,4h1a.5.5,0,0,1,.5.5V8h3.5a.5.5,0,0,1,.5.5Z"></path>
          </svg>
        </div>
        <div className=" border- border-lightgray border-[1px] rounded-full py-2 px-4 bg-white">
            <p className="font-poppins font-semibold">Add your Resume</p>
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default Freelancer
