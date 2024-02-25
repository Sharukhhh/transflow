import React from 'react'
import ReviewCards from '../cards/ReviewCards'

const Testimonials = () => {
  return (
    <>
        <div className='bg-gray-100 py-12'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-center mb-8'>What Our Customer Say</h2>
                <div className='flex flex-wrap justify-center'>
                    <ReviewCards
                    placement={'left'}
                    image={'../../../public/bro1.jpg'}
                    name={'Kathien Smith'}
                    para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum justo non turpis tempus, vel scelerisque erat dapibus.'}
                    />
                    <ReviewCards
                    placement={'right'}
                    image={'../../../public/bro1.jpg'}
                    name={'John Martin'}
                    para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum justo non turpis tempus, vel scelerisque erat dapibus.'}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonials