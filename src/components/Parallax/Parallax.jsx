import {useRef} from 'react';
import {motion,useScroll,useTransform} from 'framer-motion';

const Parallax = ({type}) => {

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    });

    const yText=useTransform(scrollYProgress,[0,1],["0%","500%"]);
    const yBG=useTransform(scrollYProgress,[0,1],["0%","50%"]);
    const yStars=useTransform(scrollYProgress,[0,1],["0%","100%"]);

  return (
    <div ref={ref} className= {`h-full w-full flex items-center justify-center overflow-hidden relative   ${type=="about"? "bg-gradient-to-b from-[rgb(17,17,50)] to-[#0c0c1d]" : "bg-gradient-to-b from-[#111132] to-[rgb(80,80,100)]"} `}>
        <motion.h1 style={{y:yText}} className='text-8xl font-Montserrat font-bold max-lg:text-4xl'>{type=="about"? "ABOUT ME" : "MY PROJECTS"}</motion.h1>
        <motion.div  className='bg-mountain bg-cover  bg-bottom absolute w-full h-full z-10 max-lg:bg-contain bg-no-repeat'></motion.div>
        <motion.div style={{y:yStars}} className='bg-stars bg-cover  bg-bottom absolute w-full h-full z-20 '></motion.div>
        <motion.div style={{y:yBG}} className={`${type==="about" ? "bg-planets" : "bg-sun"} bg-planets bg-cover  bg-bottom absolute w-full h-full z-30 max-lg:bg-contain bg-no-repeat`}></motion.div>
        <div></div>
    </div>
  )
}

export default Parallax