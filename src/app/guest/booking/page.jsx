'use client'
import React,{useState} from 'react' 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking=()=>{
    const inputStyle='w-1/2 p-1 outline-0 border-b border-black';
    const notifyError = (info) => toast.error(info);
    const notifySuccess = (info) => toast.success(info,{autoClose:2000});
    const bookGuest = async(data)=>{
        try{
            console.log(data)
            const res = await fetch('http://localhost:8080/api/booking/addBooking',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(data),
            })
            if (!res.ok) return undefined
            return res.json()
        }catch(err){
            console.log("error in bookGuest() ",err);
            return undefined
        }        
    }
    const handleSubmit=async (event)=>{
        event.preventDefault();
        const data=new FormData(event.target);
        const fullName = data.get('fullName')
        const primaryContact = data.get('primaryContact');
        const secondaryContact = data.get('secondaryContact');
        const dob = data.get('dob');
        const govIdType = data.get('govIdType');
        const govId=data.get('govId');
        const roomType=data.get('roomType');
        const checkIn = data.get('checkIn');
        const checkOut = data.get('checkOut');
        const paymentType = data.get('paymentType')
        const total = data.get('total');
        const note=data.get('note');
        const res = await bookGuest({
            fullName,primaryContact,secondaryContact,dob,govIdType,govId,roomType,checkIn,checkOut,paymentType,total,note
        })
        if(res && res.availability==true){
            notifySuccess(`Successfully booked ${res.booking.fullName}.`)
        }else{
            notifyError("Error in sign up.")
        }
        console.log('checkIn - ',checkIn);
        console.log('checkOut - ',checkOut);

    }
    return <main className='w-full h-full flex justify-center items-center'>
        <div className='border rounded shadow p-2 bg-white md:w-1/2 mt-4 mb-4'>
            <form className='flex flex-col space-y-2' onSubmit={handleSubmit}>
                <div className='flex flex-row space-x-2 justify-between'>
                    <label htmlFor='fullName'>Full Name</label>
                    <input className={`${inputStyle}`} name='fullName' type="text" placeholder='John Doe' required/>
                </div>
                <div className='flex flex-row space-x-2 justify-between'>
                    <label htmlFor='primaryContact'>Contact Number (Primary)</label>
                    <input className={`${inputStyle}`} name='primaryContact' type="tel" placeholder='9XXXXXXXXX' required/>
                </div>
                <div className='flex flex-row space-x-2 justify-between'>
                    <label htmlFor='secondaryContact'>Contact Number (Secondary)</label>
                    <input className={`${inputStyle}`} name='primaryContact' type="tel" placeholder='8XXXXXXXXX'/>
                </div>
                <div className='flex flex-row space-x-2 justify-between'>
                    <label htmlFor='dob'>Date of Birth</label>
                    <input className={`${inputStyle}`} name='dob' type="date" required/>
                </div>
                <div className='flex flex-row space-x-2 justify-between'>
                    <label htmlFor='govIdType'>Government Id Type</label>
                    <select name='govIdType' className={`${inputStyle}`} defaultValue='AadharCard'>
                        <option value="Pan Card">Pan Card</option>
                        <option value="Aadhar Card">Aadhar Card</option>
                        <option value="Voter Id">Voter Id</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='flex flex-row space-x-2 justify-between'>
                    <label htmlFor='govId'>Government Id</label>
                    <input className={`${inputStyle}`} name='govId' type="text" required/>
                </div>
                <div className='flex flex-row space-x-2 justify-between'>
                    <label htmlFor='roomType'>Room Type</label>
                    <select name='roomType' className={`${inputStyle}`} defaultValue='Standard'>
                        <option value="RT001">Standard</option>
                        <option value="RT003">Deluxe</option>
                        <option value="RT004">Suite</option>
                        <option value="RT002">Family</option>
                        <option value="RT1005">Executive</option>
                    </select>
                </div>
                <div className='flex flex-row space-x-2 justify-between'>
                    <label htmlFor='checkIn'>Check in</label>
                    <input className={`${inputStyle}`} name='checkIn' type="datetime-local" required/>
                </div>
                <div className='flex flex-row space-x-2 justify-between'>
                    <label htmlFor='checkOut'>Check out</label>
                    <input className={`${inputStyle}`} name='checkOut' type="datetime-local" required/>
                </div>
                <div className='flex flex-row space-x-2 justify-between'>
                    <label htmlFor='total'>Total (&#8377;) </label>
                    <input className={`${inputStyle}`} name='total' type="number" required/>
                </div> 
                <div className='flex flex-row space-x-2 justify-between'>
                    <label htmlFor='paymentType'>Payment Type</label>
                    <select name='paymentType' className={`${inputStyle}`} defaultValue='Cash'>
                        <option value="Cash">Cash</option>
                        <option value="UPI">UPI</option>
                        <option value="CreditCard">Credit Card</option>
                        <option value="DebitCard">Debit Card</option>
                        <option value="NetBanking">Net Banking</option>
                    </select>
                </div>  
                <div className='flex flex-row space-x-2 justify-between'>
                    <label htmlFor='note'>Note</label>
                    <input className={`${inputStyle}`} name='note' type="textarea" placeholder=''/>
                </div> 
                <div className='flex flex-row justify-evenly p-2'>
                    <button className='p-2 bg-red-500 text-white border rounded' type='reset'>Reset</button>
                    <button className='p-2 bg-lime-400 text-white border rounded' type='submit'>Book</button>
                </div>                             
            </form>
        </div>
    </main>
}

export default Booking;