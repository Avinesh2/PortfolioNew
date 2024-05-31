
import { useRef } from 'react'
import {motion,useScroll,useSpring, useTransform} from "framer-motion"
 const items=[
    {
        id:1,
        title:"Nike Landing Page",
        img:"https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:"Employing the winning combination of Tailwind CSS and React, I skillfully integrated Tailwind's utility-first styling with React's component-based architecture."
    },
    {
        id:2,
        title:"This Portfolio",
        img:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:"This portfolio was built using React and Tailwind CSS. I used Framer Motion to create the animations and React Scroll to create the smooth scrolling."
    },
    {
        id:3,
        title:"Snake Game",
        img:"https://images.unsplash.com/photo-1528158222524-d4d912d2e208?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:"This is a simple snake game built using HTML , CSS and Javascript."
    },
    {
        id:4,
        title:"Qr-code generator",
        img:"https://images.unsplash.com/photo-1550482781-48d477e61c72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:"This is a simple Qr-code generator built using Node and Node Package Manager."
    },
 ]

 const Section=({item})=>{
    const ref=useRef()
     const {scrollYProgress}= useScroll({
        target:ref,
       
    })
    const y=useTransform(scrollYProgress,[0,1],[-300,300])
    return(
        <section className='h-screen snap-always snap-center mx-[100px] max-lg:mx-[10px] '>
            <motion.div className='flex gap-5 items-center justify-center h-full max-lg:flex-col '>
                <img src={item.img} className='object-cover h-1/2 w-1/2 rounded-xl max-lg:object-contain max-lg:rounded-3xl max-lg:pt-20'/>
                <motion.div className='flex flex-col gap-[30px] items-start'>
                    <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl '>{item.title}</h2>
                    <p className='mt-4 text-xl text-white text-justify'>{item.description}</p>
                    <button className='bg-[#FFA500] rounded-md text-black font-montserrat p-2'>See Demo</button>
                </motion.div>
            </motion.div>
        </section>
    )
 }

const Portfolio = () => {
    const ref=useRef()
     const {scrollYProgress}= useScroll({
        target:ref,
       offset:["end end","start start"],
    })

    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:40,
    })
  return (
    <div ref={ref} className="relative bg-black">
        <div className='sticky top-0 left-0 pt-12 text-center text-[#FFA500] text-4xl font-palanquin font-bold'>
            <h1 className='pb-5'>Featured Work</h1>
            <motion.div style={{scaleX}}className='h-1 bg-white'></motion.div>
        </div>
        {items.map(item=>(
            <Section item={item} id={item.id}/>
        ))}
        
    </div>
  )
}

export default Portfolio