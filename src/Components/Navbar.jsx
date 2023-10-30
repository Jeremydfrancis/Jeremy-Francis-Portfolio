import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {

    setIsOpen(!isOpen);
    };

return (
    <>
    <header className="static z-9999 pb-0">
        <nav   className=" w-full   z-1000 text-2xl 
        flex flex-wrap justify-around py-6 text-sky-600 font-bold font-montserrat  tracking-wide ">
            <Link to="/" className=" font-bold text-center pr-24" >Jeremy Francis</Link>
            
            <ul className="hidden items-center   gap-x-20  lg:flex ">
                <Navigation />
            </ul>
            <button onClick={toggleNavbar} className='sm:block md:block lg:hidden'>
            {isOpen ? <X /> : <Menu />} 
            </button>
           
            
        
      

        </nav>

        {isOpen && (
            <>
            <motion.ul onClick={() => setIsOpen(false) }  className=" w-full sticky font-montserrat top-28 lg:hidden 
            gap-y-6 flex flex-col items-center  py-4 bg-black
              border-y-2 border-sky-600   text-sky-600 text-lg font-bold">
                
                <Navigation />
            </motion.ul>

            </>
           

        )}
        </header>
    </>
        )
        }

        



