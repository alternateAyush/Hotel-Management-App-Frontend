'use client'
import React from 'react'
import Link from 'next/link';
import { DashCard } from '../../components';
import guestImage from "../../assets/hotelDashboard-guest.jpg";
import guestEmployee from "../../assets/hotelDashboard-employee.jpg";
import "react-toastify/dist/ReactToastify.css";

const HotelDashboard=()=>{
    return <main className='absolute t-0 l-0 w-full h-screen flex flex-col justify-center items-center bg-slate-100 '>
        <h1 className='font-bold text-2xl'>Hotel Dahsboard</h1>
        <div className='w-4/5 h-3/4 flex flex-col md:flex-row'>
            <Link href='/guest/home' className='flex m-2 w-full md:w-1/2 h-96'><DashCard title="Guests" image={guestImage}></DashCard></Link>
            <Link href='/employee/home' className='flex m-2 w-full md:w-1/2 h-96 '><DashCard title="Empolyees" image={guestEmployee}></DashCard></Link>           
        </div>    
    </main>
}

export default HotelDashboard;