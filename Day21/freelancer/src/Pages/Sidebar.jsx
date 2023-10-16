import React from 'react'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';
const Sidebar = () => {
  const user = useSelector(selectUser);
    const[open,setOpen] = useState(true);
    const Menus = [
      { title : "Dashboard"},
      { title: "Freelancer"},
      { title: "Profile" , spacing : true},
      {
        title : "Projects",
        submenu :  true,
        submenuItems : [
        { title : "Submenu 1"},
        { title : "Submenu 2"},
        { title : "Submenu 3"},
        ],
      },
      { title: "Courses" },
      { title: "Inbox" },
      { title: "Payment", spacing : true },
      { title: "Setting" },
      { title: "Logout" },

    ];
    console.log(Menus)
  return (
    <div className=" fixed flex">
        <div className={`bg-slate-800 p-5 pt-8 h-screen ${open ? "w-72" : "w-20"} duration-100 relative`}>
        <BsFillArrowLeftSquareFill className={`bg-slate-900 text-white text-3xl rounded-full absolute 
        -right-3 top-9 border border-slate-900 cursor-pointer ${!open && "rotate-180"}` }onClick={() => setOpen(!open)}/>
        <div className="inline-flex">
        <AiFillAppstore className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
        <h1 className={`text-white font-medium origin-left text-2xl duration-100 ${!open && "scale-0"}`}>Freelancer</h1>
       </div>
       <div>
        <p className={`text-white font-semibold text-xl p-2 ${!open && "hidden"}`}>{user?.email ? user.email : "Username"}</p>
      </div>
       <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5":"px-4"}py-2`}>
       <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2" } `}/>
      <input type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-white
       focus:outline-none border rounded-md ${!open && "hidden"}`}/>
      </div>
      
       <ul className="pt-2">
       {Menus.map((menus,index) => (
        <>
        <li className="text-gray-50 text-sm flex items-centeritemss-center gap-x-4 cursorpointer  p-2 hover:bg-slate-400 rounded-md mt-2">
          <span className="text-base font-medium ">
            <BiSolidDashboard/>
          </span>
          <span className={`text-white text-sm flex-1 ${!open && "hidden"} `}>{menus.title}</span>
          </li>
          </>
       ))}
       </ul>
       
        </div>
       
       
    </div>
  )
}

export default Sidebar
