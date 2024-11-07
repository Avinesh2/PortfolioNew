import React from 'react'
import {motion} from "framer-motion"
const textVariants={
  initial:{
    opacity:0,
    x:-500,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }

  },
  scrollButton:{
    opacity:0,
    y:8,
    transition:{
      duration:2,
      repeat:Infinity
    }


  }
}
const sliderText={
  initial:{
    x:0
  },
  animate:{
    x:"-220%",
    transition:{
      duration:20,
      repeat:Infinity,
      repeatType:"mirror"
      
    }

  }
}

const Hero = ({ scrollToProjects, scrollToContact }) => {
  return (
    <div className='h-[calc(100vh-80px)] bg-gradient-to-b from-[#0c0c1d] to-[rgb(17,17,50)] overflow-hidden relative'>
    <div className='max-container ml-[120px] h-full w-5/12 max-lg:ml-[0px]'>
    <motion.div className='h-full flex flex-col justify-center gap-10 max-lg:items-center max-lg:w-screen max-lg:justify-start max-lg:mt-[45px] max-lg:gap-[50px]' variants={textVariants} initial="initial" animate="animate">
      <motion.div variants={textVariants} className='text-xl font-montserrat font-bold text-[#663399] tracking-[6px] max-lg:text-xl max-sm:flex-row max-lg:tracking-[6px]'>AVINESH RATHORE </motion.div>
      <motion.div variants={textVariants} className='text-6xl font-palanquin font-bold max-lg:text-4xl max-lg:text-center'>Web Developer and UI Designer</motion.div>
      <motion.div variants={textVariants}
      className=' max-lg:flex max-lg:flex-row'>
        <motion.button  onClick={scrollToProjects} variants={textVariants} className='p-5 border border-white rounded-lg bg-transparent text-white mr-5 max-lg:flex z-10'>See the Latest Work</motion.button>
        <motion.button  onClick={scrollToContact} variants={textVariants} className='p-5  border border-white rounded-lg bg-transparent text-white mr-5 z-10'>Contact Me</motion.button>
      </motion.div>
      <motion.img variants={textVariants} animate="scrollButton" src='/scroll.png' width={40} />
    </motion.div>
    </div>
    <motion.div className='absolute text-[50vh] -bottom-20 whitespace-nowrap text-[#ffffff09] w-5/6 font-bold pointer-events-none' variants={sliderText} initial="initial" animate="animate">
    Developer Designer Editor
    </motion.div>
    <div className=' '>
      <img className='absolute  bottom-0 right-0 max-lg:object-fill w-[90vh] max-lg:w-[600px]' src='64431-PhotoRoom.png-PhotoRoom.png '  />
    </div>
      
    </div>
  )
}

export default Hero