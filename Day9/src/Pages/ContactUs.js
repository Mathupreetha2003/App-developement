// src/ContactUs.js
import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import rating from '../Assets/rating.png'
import support from '../Assets/support.jpg'

const ContactUs = () => {
  return (
    <div>
        <div className='pb-[5rem]'>
        <Navbar/>
        </div>
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="bg-white max-w-2xl mx-auto rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">Contact Us</h2>
        <p className="text-gray-700 text-lg mb-6">
          Have questions or need assistance? Reach out to our dedicated support team. We're here to help you succeed!
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label htmlFor="message" className="text-gray-600">Feedback</label>
            <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
          </div>
          <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">
            Submit
          </button>
        </form>
      </div>
      <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold mb-4 text-indigo-600">How We Help Freelancers</h3>
        <p className="text-gray-700 mb-4">
          At our platform, we're committed to supporting freelancers in various ways:
        </p>
        <ul className="list-disc pl-4 text-gray-700">
          <li className="mb-2">We provide a secure and user-friendly environment for you to showcase your skills and connect with clients.</li>
          <li className="mb-2">Clients can rate and leave feedback for your work, helping you build a strong reputation.</li>
          <li className="mb-2">Our platform offers a wide range of job categories to match your expertise.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          We believe in empowering freelancers to achieve their goals. Your success is our success!
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img src={support} alt="Support Team" className="w-full rounded mb-4" />
          <h4 className="text-lg font-semibold text-indigo-600 mb-2">Dedicated Support</h4>
          <p className="text-gray-700 mb-2">
            Our dedicated support team is here to assist you with any questions or concerns you may have.
          </p>
          <h4 className="text-lg font-semibold text-indigo-600 mb-2">Accessibility: </h4>
          <p >Freelancer platforms provide easy access to a vast pool of skilled freelancers from 
            around the world. This accessibility ensures that clients can find professionals with the right expertise 
            and skills for their specific needs, including those that require the completion of 200 works.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img src={rating} alt="Freelancer Ratings" className="w-[10rem] h-[7rem] rounded mb-1 flex justify-around" />
          <h4 className="text-lg font-semibold text-indigo-600 mb-2">Freelancer Ratings</h4>
          <p className="text-gray-700 mb-5">
            Clients can rate and provide feedback on your work, helping you build a strong professional reputation.
          </p>
          <h4 className="text-lg font-semibold text-indigo-600 mb-2">Building Trust and Credibility: </h4>
          <p className="pb-5">High project ratings act as endorsements of a freelancer's skills, professionalism, 
            and work quality. Clients are more likely to trust and hire freelancers with a track record of positive ratings.</p>
          <h4 className="text-lg font-semibold text-indigo-600 mb-2">Address</h4>
          <p className="">High project ratings act as endorsements of a freelancer's skills, professionalism, 
            and work quality. Clients are more likely to trust and hire freelancers with a track record of positive ratings.</p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;
