'use client'
import React,{useState,useEffect} from 'react';
import {AiOutlineLoading} from 'react-icons/ai'

const Guests=()=>{
    const [guestList,setGuestList] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [totalBooking,setTotalBooking] = useState(0)
    const getGuestList = async()=>{
        try{
            const res = await fetch('http://localhost:8080/api/booking/',{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!res.ok) return undefined
            return res.json()
        }catch(err){
            console.log("error in bookGuest() ",err);
            return undefined
        }        
    }
    useEffect(()=>{
        const fetchGuestList = async()=>{
            try{
                const res= await getGuestList();
                if(res.ok){
                    setGuestList(res.bookings);
                    setTotalBooking(res.total);
                    setIsLoading(false);
                }
            }catch(err){
                console.log("error ",err)
            }            
        }
        fetchGuestList()
    },[])
    if(isLoading)
    return <main className='w-100 h-100 flex justify-center items-center'>
        <div>
          <AiOutlineLoading className='animate-spin' size={20}/>
        </div>
    </main>
    return <main className='w-full h-full flex justify-center items-start'>
        <div className='m-2 w-3/4 flex flex-col justify-start items-center'>
            {
                guestList.map((guest,idx)=>{
                    return <div key={idx} className='w-full my-2 flex flex-col border border-transparent rounded shadow'>
                        <div className='w-full flex flex-row justify-between bg-green-400 text-white font-bold p-2 border border-transparent rounded-t'>
                            <span>{guest.fullName}</span>
                            <span>{guest.primaryContact}</span>
                            <span>{guest.roomNumber}</span>
                        </div>                        
                        <div className='w-full flex flex-row justify-between bg-white text-gray-400 p-2 border border-transparent rounded-b'>
                            <span>{guest.roomType}</span>
                            <span>{guest.checkIn}</span>
                            <span>{guest.checkOut}</span>
                        </div>                        
                    </div>
                })
            }
        </div>    
    </main>
}

export default Guests;