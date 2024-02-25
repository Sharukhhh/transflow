import React from 'react';
import { MdAccessTime } from "react-icons/md";
import { FaRegEnvelope , FaPhoneAlt} from "react-icons/fa";


const MainNav = () => {
  return (
    <>
        <nav className='bg-customBlue py-8 md:flex md:justify-between md:items-center'>
            <div className='flex items-center justify-center md:justify-start'>
                <p className='text-white text-xl font-bold md:ml-32'>TransFlow</p>
            </div>

            <div className='flex items-center justify-center space-x-5 md:mr-24 mt-4 md:mt-0'>
                <div className='flex items-center'>
                    <MdAccessTime className="text-white" />
                    <span className='text-white ml-2 hidden md:inline'>Mon-Sat</span>
                </div>

                <div className='flex items-center'>
                    <FaRegEnvelope className="text-white" />
                    <span className='text-white ml-2 hidden md:inline'>Email</span>
                </div>

                <div className='flex items-center'>
                    <FaPhoneAlt className="text-white" />
                    <span className='text-white ml-2 hidden md:inline'>Call us</span>
                </div>
            </div>
        </nav>
    </>
  )
}

export default MainNav