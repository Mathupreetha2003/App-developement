
import Navbar from './Navbar'
import Footer from './Footer'
import React, { useState } from 'react';
import axios from 'axios';
const Freelancerprofile = () => {

  const[image,setImage]=useState("");
  
  const[isImage,setIsImage] = useState(true);

  const [formData, setFormData] = useState({
    image: '',
    name: '',
    location: '',
    description: '',
    rating: 0,
    numberofprojects: 0,
    paymentperhour: 0,
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rating' || name === 'numberofprojects' || name === 'paymentperhour' ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8080/api/v1/auth/savefreelancerprofile`,formData);
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <div>
      <div>
        <Navbar/>
      </div>
    <div className="max-w-md mx-auto pt-[8rem] p-10 pb-[4rem] bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-2">Freelancer Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-600 font-medium">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-600 font-medium">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600 font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-600 font-medium">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="projects" className="block text-gray-600 font-medium">Number of Projects</label>
          <input
            type="number"
            id="numberofprojects"
            name="numberofprojects"
 
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="paymentPerHour" className="block text-gray-600 font-medium">Payment per Hour</label>
          <input
            type="number"
            id="paymentperhour"
            name="paymentperhour"

            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default Freelancerprofile
