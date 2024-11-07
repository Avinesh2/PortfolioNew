import React from 'react'
import {motion} from "framer-motion"
const items=["Homepage","About Me","Projects","Contact"]
const Links = () => {
  return (
    <div className='absolute w-full h-full flex flex-col justify-center items-center gap-[20px]'>
      {items.map((item)=>(
        <motion.a href={`#${item}`} key={item} className='font-montserrat font-semibold text-xl' whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</motion.a>
      ))}  
    </div>
  )
}

export default Links