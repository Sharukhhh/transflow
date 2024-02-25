import React from 'react';


const Hero = () => {
  return (
    <>
        <div className='relative bg-cover bg-center h-screen md:bg-contain' style={{backgroundImage : "url('../../../ship.jpg')" , backgroundSize: "cover"}}>
            <div className='absolute inset-0'></div>
            <div className='absolute inset-0 flex flex-col items-start justify-center text-white ml-20'>
                <h1 className='text-4xl font-bold text-center mb-4'>Your Gateway to any Destination in the World</h1>
                <p className='text-lg text-center mb-8'>
                In augue ligula, feugiat ut nulla consequat. 
                </p>
                <button className='bg-white text-black px-4 py-2  hover:scale-105'>
                    Explore More
                </button>
            </div>
        </div>
    </>
  )
}

export default Hero