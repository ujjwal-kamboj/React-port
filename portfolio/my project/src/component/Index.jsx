import React from 'react'
import I2 from '../images/img2.jpeg'

export default function index() {
  return (
     <section className="min-h-screen bg-black text-white px-10 flex items-center">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
       
        <div>
          <h2 className="text-2xl font-bold mb-4">ABOUT</h2>
          <p className='text-gray-400 mb-4'>ujjwalkamboj001@gmail.com</p>

          <p className="text-gray-400 ">
            Web devloper with 10+ years of experience specializing in IT 
            department management for international logistics companies.
            I can implement effective IT strategies and global values.
          </p>

          <p className="text-gray-400 mt-4 ">
            My greatest strength is business awareness, which enables me to 
            permanently streamline infrastructure and applications.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            📍 Karnal, Haryana <br />
            12529 State Road 55
          </p>
        </div>

        
        <div>
          <img
            src={I2}
            alt="profile"
            className="rounded-lg grayscale shadow-lg"
          />
        </div>

      </div>
    </section>


    
  )
}
