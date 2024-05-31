import React from 'react'
import Links from './Links'
import ToggleButton from './ToggleButton'
import { useState } from 'react'
import {motion} from 'framer-motion'

const sidebar = () => {
  const [open,setOpen]=useState(false)

  const variants={
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:20,
        
      }
    },
    closed: {
      clipPath:"circle(30px at 50px 50px)",
      transition:{
        delay:0.1,
        type:"spring",
        stiffness:400,
        damping:40,
      }
    }
  }
  return (
    <motion.div animate={open?'open':'closed'} className=' flex flex-col justify-center items-center bg-white text-black'>
      <motion.div variants={variants} className='z-50 fixed top-0 left-0 bottom-0 w-[400px] bg-white'>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default sidebar