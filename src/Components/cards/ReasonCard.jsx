import React from 'react'

const ReasonCard = () => {
  return (
    <>
        <div className='bg-white shadow-md py-12 max-w-4xl mx-auto'>
            <div className='flex flex-col justify-center  items-center'>
                <div className='md:w-2/3 mb-4 md:mr-20 md:mb-0'>
                    <h3 className='text-lg font-semibold mb-2'>We provide full range global logistics solution</h3>
                    <p className='text-sm mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className='text-sm mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ul className='list-disc pl-4'>
                        <li>Delivery on time</li>
                        <li>Optmised travel cost</li>
                    </ul>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <p className='text-2xl font-semibold mr-2'>1294</p>
                        <p className='text-sm'>Delivered Packages</p>
                    </div>
                    <p> | </p>
                    <div className='flex items-center'>
                        <p className='text-2xl font-semibold mr-2'>3594</p>
                        <p className='text-sm'>Satisfied Clients</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ReasonCard