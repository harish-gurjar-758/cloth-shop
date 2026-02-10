import React from 'react'
import illsion from '../../assets/welcome-illusion.png'

export default function Welcome() {
    return (
        <div className='h-[100vh] flex items-center justify-evenly'>
            <div className='h-[100vh] flex items-start justify-end flex-col'>
                <h2 className='bg-[#d93d3e] text-white py-3 px-4 rounded font-500 monospace'>Beauty Cloth Shop </h2>
                <img src={illsion} alt="" className='w-[600px] ' />
            </div>
            <div>
                <h1 className="text-[55px] font-bold font-mono leading-tight">
                    Style That <br /> Speaks You
                </h1>
                <p className="text-lg mt-3 text-gray-600">
                    Discover premium clothing designed for comfort, <br /> confidence, and everyday elegance.
                </p>
            </div>
        </div>
    )
}
