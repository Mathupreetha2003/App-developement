import React from "react";
import velocity from "../Assets/velocity.PNG";
import { BsPersonCircle } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";

const Purchases = () => {
  return (
    <div>
      <div className="p-5">
        <h1>Reviews</h1>
      </div>
      <div className="flex bg-gray-100 p-2 border-[0.05rem] border-gray-500">
        <div className="">
          <img class="p-3 mt-3 w-[170px] h-[120px]" src={velocity} alt=""></img>
        </div>
        <div className="p-2 py-5">
          <div className="flex justify-between">
            <p className="text-green-700 text-bold text-lg">
              Professional Logo Design - Ultimate Revision Work+Favicon+ArtWork
            </p>
            <p className="text-2xl">$60</p>
          </div>
          <div className="flex justify-between pt-3">
            <p className="text-sm">POSTED:15 SEPT 2015</p>
            <p className="text-sm">100% Positive</p>
            <p className="text-sm">SOLD:1732</p>
            <p className="text-sm">LIKED:300</p>
          </div>
        </div>h
      </div>
      <div className="flex justify-between flex-col">
        <div className="flex ">
          <div className="p-5 h-fit flex flex-col items-center">
            <p className="text-xs p-2">MON 4:36PM</p>
            <BsPersonCircle className="text-6xl text-gray-400" />
          </div>
          <div className="py-3">
            <div className="bg-gray-100 w-[33rem] border-[0.01rem] border-black">
              <div>
                <div className="flex justify-between p-5 gap-1">
                  <p className="text-lg">Richard H</p>
                  <p className="text-sm">Brilliant</p>
                  <p className="text-sm">Port Glasso,GB</p>
                  <MdLocationOn className="text-xl" />
                </div>
                <div className="flex justify-between">
                  <div className="p-3">
                    <p className="text-sm">Amazing Work Thank You So much.</p>
                  </div>
                  <div className="flex p-3">
                    <AiTwotoneStar className="text-xl text-yellow-500" />
                    <AiTwotoneStar className="text-xl text-yellow-500" />
                    <AiTwotoneStar className="text-xl text-yellow-500" />
                    <AiTwotoneStar className="text-xl text-yellow-500" />
                    <AiTwotoneStar className="text-xl text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="p-5 items-center flex flex-col">
            <p className="text-xs p-2">MON 4:36PM</p>
            <BsPersonCircle className="text-6xl text-gray-400" />
          </div>
          <div className="py-3">
            <div className="bg-gray-100 w-[33rem] border-[0.01rem] border-black">
              <div>
                <div className="flex justify-between p-5 gap-5">
                  <p className="text-lg">Alan Rampwork</p>
                  <p className="text-sm">Facinating</p>
                  <p className="text-sm">Port Glasso,GB</p>
                  <MdLocationOn className="text-xl" />
                </div>
                <div className="flex justify-between">
                  <div className="p-3">
                    <p className="text-sm">
                      Most Satisfying Best work of all time.
                    </p>
                  </div>
                  <div className="flex p-3">
                    <AiTwotoneStar className="text-xl text-yellow-500" />
                    <AiTwotoneStar className="text-xl text-yellow-500" />
                    <AiTwotoneStar className="text-xl text-yellow-500" />
                    <AiTwotoneStar className="text-xl text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchases;
