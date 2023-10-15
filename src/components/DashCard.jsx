import React from 'react'
import Image from 'next/image';

const DashCard=({image,title})=>{
    return <div className='flex flex-col items-center w-full h-full p-2 shadow cursor-pointer hover:opacity-80 bg-white border rounded'>
        <div className='relative w-full h-full '>
            <Image
            src={image}
            fill
            style={{ objectFit: "cover" }}
            alt="vector image of hotel"
           />                     
        </div>
        <div className='flex justify-center items-center m-1'>
            <h1 className='font-bold font-xl'>{title}</h1>
        </div>
    </div>
}

export default DashCard;