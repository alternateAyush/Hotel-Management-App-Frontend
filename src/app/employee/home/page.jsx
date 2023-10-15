'use client'
import React from 'react'
import Link from 'next/link';
import { DashCard } from '../../../components';
import bookingImage from '../../../assets/guest-home-booking.jpg'
import reservationImage from '../../../assets/guest-home-reservation.jpg'
import checkoutImage from '../../../assets/guest-home-checkout.jpg'
import "react-toastify/dist/ReactToastify.css";

const EmployeeHome=()=>{
    return <main className='absolute t-0 l-0 w-full h-fit flex flex-col justify-center items-center bg-slate-100 overflow-y-scroll py-4'>
            <h1 className='font-bold text-2xl'>Management Table</h1>
            <div className='w-4/5 h-3/4 flex flex-col justify-center items-center md:flex-row md:flex-wrap mb-10 '>
                <Link href='/guest/booking' className='flex w-full md:w-5/12 m-2 h-96 '>
                    <DashCard title="Booking" image={bookingImage}></DashCard>
                </Link>
                <Link href='/guest/reservation' className='flex w-full md:w-5/12 m-2 h-96 '>
                    <DashCard title="Reservation" image={reservationImage}></DashCard>
                </Link>           
                <Link href='/guest/guests' className='flex w-full md:w-5/12 m-2 h-96 '>
                    <DashCard title="Guests" image={bookingImage}></DashCard>
                </Link>           
                <Link href='/guest/checkOut' className='flex w-full md:w-5/12 m-2 h-96'>
                    <DashCard title="Checkout" image={checkoutImage}></DashCard>
                </Link>           
            </div>
    </main>
}

export default EmployeeHome;