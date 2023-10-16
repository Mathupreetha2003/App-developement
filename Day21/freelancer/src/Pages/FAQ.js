import React, { useState } from 'react'
import Faq from '../Data/Faq'
import Navbar from './Navbar';
import Footer from './Footer';
const FAQ = () => {
    const[viewqus,setviewqus] = useState("");
  return (
    <div>
        <Navbar/>
    <div className="p-5 py-20">
    <div className="flex justify-center py-5 mb-10 bg-gray-400 rounded-2xl">
          <p className="text-blue-900 font-poppins font-semibold text-2xl">
            FAQs
          </p>
        </div>
    <div>
      {Faq.map((faq, index) => (
            <div
              className={`w-full border-[1px] px-10 rounded-lg ${viewqus === faq.id ? "border-bggreen my-[-8px] py-4" : "border-lightgreen py-2"}`}
              onClick={() => setviewqus(faq.id)}
            >
              <div className="flex gap-2">
                <p className="text-bggreen font-semibold">Q{faq.id}.</p>
                <p className="text-bggreen font-semibold text-blue-800 text-xl">{faq.qus}</p>
              </div>
              <div>
                {faq.id === 13 ? (
                  <p
                    className={`${
                      viewqus === faq.id ? "text-xl" : "hidden"
                    }  px-5`}
                  >
                    For any questions, issues, or support needs, you can reach
                    out to our customer support team via the in-app support
                    feature or contact us at{" "}
                    {
                      <span className="underline text-blue">
                        freelancersupport@gmail.com
                      </span>
                    }
                    .
                  </p>
                ) : (
                  <p
                    className={`${
                      viewqus === faq.id ? " text-xl" : "hidden"
                    }  px-5`}
                  >
                    {faq.ans}
                  </p>
                )}
              </div>
            </div>
          ))}
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default FAQ
