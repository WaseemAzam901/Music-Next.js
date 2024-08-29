"use client"
import React, { useState } from 'react'
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const page = () => {
    const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here, e.g., sending to an API
    console.log("Email:", email);
    console.log("Message:", message);
    // Clear the form fields after submission
    setEmail('');
    setMessage('');
  };
  return (
<>
<div className="min-h-screen text-white text-center relative">
<ShootingStars />
<StarsBackground />
</div>
<div className=" text-white text-center absolute mt-12 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 overflow-hidden">
    <h1 className=' font-bold text-lg md:text-7xl '>Contact US</h1>
    <p className='w-[35rem] mx-auto mt-9'>We're here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.</p>



    {/* Contact Form */}
    <form onSubmit={handleSubmit} className="mt-12 w-full max-w-md mx-auto">
          <div className="mb-6">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-md text-black"
            />
          </div>
          <div className="mb-6">
            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Enter your message"
              required
              rows={5}
              className="w-full px-4 py-2 rounded-md text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

  </div>
</>
  )
}

export default page