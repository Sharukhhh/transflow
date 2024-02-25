import React from 'react';
import { FaInstagram ,  FaFacebook , FaLinkedin} from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";


const SubNav = () => {
  return (
    <>
        <nav className='absolute bg-gray-400 bg-opacity-30 left-0 right-0 z-10 bg-transparent py-3 flex flex-col md:flex-row items-center justify-between'>
            <div className='flex items-center justify-center md:ml-28'>
                <ul className='flex space-x-4 cursor-pointer text-white'>
                    <li className='hover:text-gray-300'>Home</li>
                    <li>|</li>
                    <li className='hover:text-gray-300'>About</li>
                    <li>|</li>
                    <li className='hover:text-gray-300'>Pages</li>
                    <li>|</li>
                    <li className='hover:text-gray-300'>Product</li>
                    <li>|</li>
                    <li className='hover:text-gray-300'>Contact</li>
                </ul>
            </div>

            <div className='flex flex-col md:flex-row items-center mt-4 md:mt-0 md:mr-24'>
                <div className='flex space-x-5 items-center text-white'>
                    <FaInstagram/>
                    <FaFacebook/>
                    <RiTwitterXFill/>
                    <FaLinkedin/>
                </div>
                <button className='bg-white text-black font-medium px-2 py-3 mt-4 md:mt-0 md:ml-4'>
                    Request A Demo
                </button>
            </div>
        </nav>
    </>
  )
}

export default SubNav