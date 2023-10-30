import Projects from "./Projects";
import { motion } from "framer-motion";
import { fadeIn } from "./Utilities/Variants";

export default function About() {
  return (
  <>

<section className="grid grid-cols-1 2xl:grid-cols-2  scroll-smooth   h-auto ">

<div className="overflow-hidden rounded-lg  from-gray-900 to-gray-600 bg-gradient-to-r
  mx-8 mb-8 sm:mx-16 sm:mb-12 sm:mt-2 md:mx-24 2xl:mb-16 2xl:ml-20 2xl:mr-10 2xl:col-start-1 ">
  <motion.div variants={fadeIn("down", 0.3)} initial="hidden" whileInView={"show"} 
  viewport={{once: false}}  
  className="px-6 py-5 mb-2 ">


<img src="src/assets/AI.png" alt="Image of me" 
className="filter -hue-rotate-180 saturate-100 brightness-90 mb-2 h-auto    "></img>


<div className="font-montserrat text-justify text-white ">
  
<h2 className="  text-2xl text-center font-semibold uppercase mb-2 ">About Me</h2>
<hr className="mx-auto mb-6 h-1 w-[15rem] border-0 bg-gray-100" />
  

  <div className=" text-md">

  <p className="">Greetings, I'm Jeremy Francis, a self-taught developer
   with a unique background as a combat veteran, having proudly served in the military
   for eight years. My journey in the armed forces has honed not only my discipline
   but also my unwavering commitment to attention to detail. This invaluable 
   experience has equipped me with a set of skills that I now channel
   into my passion for development, ensuring precision and excellence in 
   every project I undertake.</p>
   <p className="pt-8 mb-6">As a passionate developer, I thrive on crafting clean, creative, and user-friendly 
    digital solutions. My aspirations in the world of development is marked by a relentless 
    pursuit of knowledge. Proficient in  
  
  <span className="font-semibold"> HTML, CSS, JavaScript, React, and Tailwind 
  </span>
   , I'm dedicated to transforming ideas into functional and exceptional web experiences.

</p>
<p className="pb-4 text-center font-bold translate-y-4
text-transparent bg-clip-text bg-gradient-to-r
    to-sky-500 from-white">Let's collaborate to bring your digital dreams to life.</p>


 



</div>
</div>
</motion.div>
</div>


{/*                              PROJECTS CONTAINER                                     */}

<Projects />


</section>
  </>

  );
}
