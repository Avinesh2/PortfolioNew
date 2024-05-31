import React from 'react'
import { motion } from 'framer-motion'
const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={()=>setOpen(prev=>!prev)} className='z-50 w-12 h-12 fixed rounded-xl top-[25px] left-[37px] bg-transparent border-none'>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path  stroke="#000000" strokeWidth="2" className="w-4" stroke-linecap="round" variants={{closed:{d:"M4 18L20 18"}, open:{d:"M 3 16.5 L 17 2.5"}}}/>
<motion.path d="M4 12L20 12" stroke="#000000" strokeWidth="2" stroke-linecap="round" variants={{open:{opacity:0},closed:{opacity:1}}}/>
<motion.path  stroke="#000000" strokeWidth="2" stroke-linecap="round" variants={{closed:{d:"M4 6L20 6"}, open:{d:"M 3 2.5.5 L 17 16"}}}/>
</svg>
    </button>
  )
}

export default ToggleButton