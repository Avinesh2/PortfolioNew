import React from 'react'
import {motion} from 'framer-motion' 
import Sidebar from '../sidebar/Sidebar'
const Navbar = () => {
  return (
    <div className='h-20 text-white'>
      <Sidebar />
        <div className='flex justify-between m-auto max-container items-center  h-full'>
            <motion.span 
            initial={{opacity:0,scale:0.5}} 
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
             className='font-palanquin font-semibold ml-[120px] text-xl mt-3 max-lg:invisible'>Welcome</motion.span>
            <div className='flex gap-3 mx-3'>
                <a href='https://www.linkedin.com/in/avinesh-rathore-a73159257/'><img src='/linkedin.png' width={18}/></a>
                <a href='https://www.instagram.com/avinesh__22/'><img src='/instagram.png' width={18}/></a>
            </div>

        </div>
    </div>
  )
}

export default Navbar