import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "./Utilities/Variants";


const Home = () => {
    return ( 
     
<motion.section variants={fadeIn("down", 0.3)} 
initial="hidden" whileInView={"show"} viewport={{once: false}} 
className=" scroll-smooth font-montserrat text-center h-[92vh] px-5 w-full flex-col flex justify-center 
items-center bg-transparent">


<h1 className=" pb-[0.8rem] text-5xl font-extrabold  leading-none tracking-wide 
    md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r
  to-blue-600 from-sky-400">Jeremy Francis </h1>

<p className="my-4 text-lg  font-bold text-white
    lg:text-2xl md:text-lg px-16 uppercase 
  dark:text-gray-400 italic ">
    <span>I am a </span>
    <TypeAnimation sequence={[
        "Front-End Developer",
        3000,
        "Designer",
        3000,
    ]}
    speed={40}
    className=" text-transparent bg-clip-text bg-gradient-to-r
    to-sky-600 from-sky-400"
    repeat={Infinity}
       />

    </p>

    <p className="  text-md font-extrabold leading-none 
    tracking-wide md:text-lg lg:text-2xl text-white">
    I have a passion for creating exceptional web experiences.</p>



<div className="gap-5 mt-4 flex ">
    <Link to="/Contact" className="inline-flex w-[6rem] lg:w-[7rem] lg:h-[3.3rem] 
    md:w-[6rem] md:h-[3rem]
    sm:w-[6rem] h-auto lg:px-5 lg:py-3    
    items-center justify-center text-center  tracking-normal font-bold text-white
     bg-sky-600 rounded-lg hover:bg-sky-700 shadow-cyan-600/40 shadow-2xl  ">Hire Me!</Link>

    <Link to="/About" className="inline-flex   items-center justify-center w-[8rem] 
    lg:w-[8rem] lg:h-[3.3rem]  h-[3rem] lg:px-5 lg:py-3 
    md:w-[8rem] md:h-[3rem]  
    text-center text-white bg-transparent border-sky-500 
    border-y-4 border-x-4 rounded-lg hover:bg-sky-500">Explore

    <svg className="w-4 h-5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
     fill="none" viewBox="0 0 14 10">

    <path stroke="currentColor" 
     d="M1 5h12m0 0L9 1m4 4L9 9"/>

    </svg>
    </Link>

</div>



</motion.section>
            
 
    );
    
};

export default Home;