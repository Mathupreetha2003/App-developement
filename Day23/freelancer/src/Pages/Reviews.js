import React from 'react'
import seo from '../Assets/seo.jpg';
import logo1 from '../Assets/logo1.png';
const Reviews = () => {
  return (
    <div>
      <h1 className="text-3xl p-5 ">Purchases</h1>
      <div/>
      
      <div className="flex hover bg-gray-100 p-2 border-[0.05rem] border-gray-500">
      <div className="flex flex-row ">
        <div className="bg-green-700 w-[0.03rem]  mt-5 pr-1"></div>
          <img class="p-2 mt-3 w-[180px] h-[130px]" src={seo} alt=""></img>
        </div>
        <div className="p-2 py-5">
          <div className="flex justify-around">
            <p className="text-green-700 text-bold text-lg">
              Super charge your SEO Marketing & #1 on Google   with real SEO Results!
            </p>
            <p className="text-2xl">$120</p>
          </div>
          <div className="flex justify-between pt-3">
          <img
              class=" rounded-full w-[2rem] h-[2rem]"
              src={logo1}
              alt=""
            ></img>
            <p className="text-sm">BY: LEADS FLOW</p>
            <p className="text-sm">100% Positive</p>
            <p className="text-sm">SOLD:1732</p>
            <p className="text-sm">LIKED:300</p>
          </div>
        </div>
        </div>

    </div>
  )
}

export default Reviews
