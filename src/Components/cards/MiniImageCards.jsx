import React from 'react'

const MiniImageCards = ({image , title, text}) => {
  return (
    <div className='w-1/2 sm:w-1/3 md:w-1/5 mb-4 px-2'>
        <div className='relative'>
            <img src={image} alt="" className='w-80 h-80 object-cover'/>
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2'>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs">{text}</p>
            </div>
        </div>
    </div>
  )
}

export default MiniImageCards