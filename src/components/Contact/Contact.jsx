import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const [error,setError] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y8musd4', 'template_ct2r3s7', form.current, 'Oh4pOL1I2Zf-LVg_H')
          .then((result) => {
              setError(false);
          }, (error) => {
            setError(true);
          });
      };
  return (
    <div className=' flex h-auto items-center gap-[50px] m-[100px] max-lg:flex-col max-lg:items-start max-lg:gap-[7px] max-lg:m-[30px]'>
        <div className='w-1/2 flex flex-col gap-[40px] max-lg:pt-20 max-lg:w-full '>
            <h1 className='text-6xl font-bold font-Palanquin max-lg:text-5xl'>Let's Work Together</h1>
            <div> 
                <h2 className='font-palanquin'>Mail</h2>
                <span className='font-medium font-montserrat'>avineshoffice@gmail.com</span>
            </div>
            <div>
                <h2 className='font-palanquin'>Address</h2>
                <span className='font-medium font-montserrat'>IIIT Kota Ranpur ,Kota </span>
            </div>
        </div>
        <div className='w-1/2 mt-[70px] max-lg:w-full max-lg:mt-[5px]'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5'>
                <input className='p-5 bg-transparent border-white border-2  text-white rounded-md focus:border-white ' type='text' required placeholder='Name' name="from_name" />
                <input className='p-5 bg-transparent border-2 border-white text-white rounded-md ' type='email' required placeholder='Email' name="user_email"  />
                <textarea name="message" className='p-5 bg-transparent border-2 border-white text-white rounded-md ' rows={5} placeholder='Message'/>
                <button className='bg-[#FFA500] rounded-md text-black font-montserrat p-2'>Submit</button>
                <div className='text-lime-400'>{error===false? "Success":""}</div>
                <div className='text-[#ff0000]'>{error===true? "Error":""}</div>

            </form>
        </div>
    </div>
  )
} 

export default Contact