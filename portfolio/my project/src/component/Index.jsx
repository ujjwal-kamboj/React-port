import React from 'react'
import I2 from '../images/img2.jpeg'

export default function index() {
  return (
     <section className="min-h-screen bg-black text-white px-10 flex items-center">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
       
        <div className='mt-7'>
          <h2 className="text-4xl font-bold mb-2">ABOUT</h2>
          <p className='text-gray-400 mb-10'>ujjwalkamboj001@gmail.com</p>

          <p className="text-gray-400 ">
            Web devloper with 10+ years of experience specializing in IT 
            department management for international logistics companies.
            I can implement effective IT strategies and global values.
          </p>

          <p className="text-gray-400 mt-4 ">
            My greatest strength is business awareness, which enables me to 
            permanently streamline infrastructure and applications.
          </p>

          <p className="mt-40 ml-20">
             Karnal, Haryana -132001<br />
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
