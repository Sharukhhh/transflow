import React from 'react'

const ReviewCards = ({image , name, para, placement}) => {
  return (
    <>
        <div className='w-full md:w-1/2 lg:w-1/3 mb-8 px-4'>
            <div className={`${placement === 'right' ? 'bg-blue-950' : 'bg-gray-50'}rounded shadow-md p-6`}>
                <div className='flex items-center mb-4'>
                    <img src={image} alt='' className='rounded bg-gray-200 w-12 h-12 object-cover' />
                    <div className='ml-4 text-black'>
                        <p className="font-bold text-lg">{name}</p>
                        <p className="">{para}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ReviewCards