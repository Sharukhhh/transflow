import React from 'react'
import MiniImageCards from './MiniImageCards';


const Sections = ({usage}) => {
  return (
    <>
        <div className='bg-white py-12'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-center mb-8'>
                    {usage === 'services' ? 'Transporting Across the world' : 'Meet our Experts'}
                </h2>
                <div className='flex flex-wrap justify-center'>
                    {usage === 'services' ? (
                        <>
                            <MiniImageCards 
                            image={'../../../lorryback.png'} 
                            title={'Liquid Transportation'}
                            text={'Premium Tankers'}
                            />
                            <MiniImageCards 
                            image={'../../../people.png'}
                            title={'Packaging Solutions'}
                            text={'Warehouse management'}
                            />
                            <MiniImageCards 
                            image={'../../../scania.png'}
                            title={'Contract Logicstics'}
                            text={'Road Transportation'}
                            />
                            <MiniImageCards 
                            image={'../../../dock.png'}
                            title={'Warehouse & Distribution'}
                            text={'Large Warehouse'}
                            />
                            <MiniImageCards 
                            image={'../../../yard.png'}
                            title={'Specialised Transport'}
                            text={'Ocean Transport'}
                            />
                        </> 
                    ): (
                        <>
                            <MiniImageCards 
                            image={'../../../girl1.jpg'} 
                            title={'Jeseeca Arrow'}
                            text={'Designer'}
                            />
                            <MiniImageCards 
                            image={'../../../bro2.png'}
                            title={'Kathlein Smith'}
                            text={'Designer'}
                            />
                            <MiniImageCards 
                            image={'../../../girl2.jpg'}
                            title={'Rebecca Taylor'}
                            text={'Designer'}
                            />
                        </>
                    )}
                </div>
                {usage === 'services' && (
                    <div className='flex justify-center mt-8'>
                        <button className='bg-customBlue text-white px-6 py-3 rounded-lg"'>More Work</button>
                    </div>
                )}    
            </div>
        </div>
    </>
  )
}

export default Sections