import React from 'react'

export default function Navbar() {
  return (
 
 
    <nav className="bg-[#1f2937] text-white px-6 py-4 shadow-md max-w-full mx-auto flex justify-between items-center">
        
       
        <ul className="flex space-x-8 text-sm font-bold">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Resume</li>
          <li className="hover:text-gray-300 cursor-pointer">Portfolio</li>
        </ul>

       
        <div className="text-sm font-light">
           701-963-5231
        </div>

     
    </nav>



  )
}
