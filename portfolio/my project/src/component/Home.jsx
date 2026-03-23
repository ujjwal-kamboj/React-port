import React from 'react'
import I1 from  '../images/img1.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";






export default function Home() {
  return (

    <div>

    <div className='relative flex '>
     <img src={I1} alt="Image 1" />
    </div>

    <div className='absolute text-white top-120 left-20  '> 
      <h2 className=' text-5xl '>UJJWAL </h2>
      <h1 className='text-7xl font-bold'>KAMBOJ</h1>
      <p className='text-4xl mt-4 tracking-widest italic'>Web Developer</p>
    </div>
    
    <div className='absolute text-white top-180 left-20 flex gap-4 '>
    <button className=' border px-5 py-2 rounded-full hover:bg-white'>
      Resume
    </button>
    <button className=' border px-5 py-2 rounded-full hover:bg-white'>
      Portfolio
    </button>
    </div>

    <div className='absolute text-white top-306 left-20 flex gap-4 text-2xl '>
    <a href=""> <FaFacebookF /></a>
    <a href=""> <FaLinkedinIn /></a>
    <a href=""> <IoLogoGithub /></a>
    <a href=""> <FaPinterestP /></a>
    <a href=""> <FaTwitter /></a>
    <a href=""> <FaWhatsapp /></a>
    </div>
    
   
    </div>
  )
}
