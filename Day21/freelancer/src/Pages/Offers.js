import React from 'react'
import vector from '../Assets/velocity.PNG';
const Offers = () => {
  return (
    <div>
        <div className="bg-gray-300 pt-2">
        <h1 className="text-2xl">Offers</h1>
        <div className="bg-amber-300 h-[30rem] w-[15rem] rounded-t-xl">
      <div className="">
      <img
                    class=" w-fit rounded-t-xl h-[180px]"
                    src={vector}
                    alt=""
                  ></img>
                  <div className="p-2">
                    <h1 className="text-lg cursor-pointer">Design Responsive SEO friendly & Fast Loading Website</h1>
                  </div>
                  <div className="flex flex-row-2">
                  <div className="flex bg-gray-100 w-fit rounded-xl p-1">
                    <p className="flex justify-center">Design</p>
                  </div>
                  <div className="flex bg-gray-100 w-fit rounded-xl p-1">
                    <p className="flex justify-center">Design</p>
                  </div>
                  <div className="flex bg-gray-100 w-fit rounded-xl p-1">
                    <p className="flex justify-center">Design</p>
                  </div>
                  </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Offers
