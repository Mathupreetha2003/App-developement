import React from "react";
import { useNavigate } from "react-router";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Redux/userSlice";

const Navbar = () => {
  const nav = new useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="flex w-full bg-slate-600 p-[1rem] fixed">
      <div>
        <p className="text-2xl text-semibold text-white ml-20">Freelancer</p>
      </div>
      <div className="flex w-full justify-end ">
        <button
          className="bg-white rounded-full py-2 px-5 mr-4 hover:scale-110"
          onClick={() => nav("/db")}
        >
          DashBoard
        </button>
        <button
          className="bg-white rounded-full py-2 px-5 mr-4 hover:scale-110"
          onClick={() => nav("/")}
        >
          Home
        </button>
        <button
          className="bg-white rounded-full py-2 px-5 mr-4 hover:scale-110"
          onClick={() => nav("/freelancer")}
        >
          Freelancer
        </button>
        {user != null ? (
          <button
            className="bg-white rounded-full py-2 px-5 mr-4 hover:scale-110"
            onClick={() => {
              dispatch(logout());
              localStorage.clear();
            }}
          >
            Logout
          </button>
        ) : (
          <div className="flex w-fit justify-end">
            <button
              className="bg-white rounded-full py-2 px-5 mr-4 hover:scale-110"
              onClick={() => nav("/login")}
            >
              Login
            </button>
            <button
              className="bg-white rounded-full py-2 px-4 mr-4 hover:scale-110"
              onClick={() => nav("/signup")}
            >
              Sign Up
            </button>
          </div>
        )}

        <button
          className="bg-white rounded-full py-2 px-4 mr-4 hover:scale-110"
          onClick={() => nav("/profile")}
        >
          Profile
        </button>
        <BsPersonCircle
          className="text-5xl text-white cursor-pointer"
          onClick={() => nav("/adminlogin")}
        />
      </div>
    </div>
  );
};

export default Navbar;
