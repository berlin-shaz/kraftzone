//import React from 'react';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {FaPhoneAlt, FaWhatsapp} from 'react-icons/fa';
import {motion} from 'framer-motion';
import {Link as ScrollLink} from "react-scroll";
import {Link as RouterLink} from "react-router-dom";

import {logo} from '../assets/images';

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fixed z-20 flex justify-end items-center px-4 py-2 bg-white bg-opacity-15 backdrop-blur-md border border-white border-opacity-20">
      
      {/* logo */}
      <div className="flex items-center justify-start ">
        <RouterLink to={'/kraftzone'}>
          <img src={logo} alt="logo" width={404} height={127} title='logo' loading='eager'
          className="w-20 h-5 md:w-36 md:h-10" />
        </RouterLink>
      </div>
      <div className="flex items-center space-x-2 px-4 font-bold text-orange-500">
        <FaPhoneAlt />
        <p>030 – 817 999 80</p>
      </div>
      
      {/* menu */}
      <ul className="hidden md:flex flex-1 justify-end items-center list-none">
        {['startseite', 'leistungen', 'preis', 'kontakt', 'über uns'].map((item) => (
          <li key={`link-${item}`} className="flex flex-col items-center mx-4 cursor-pointer hover:font-bold">
            <div className="w-1 h-1 bg-transparent rounded-full mb-1"></div>
            <ScrollLink 
            to={`${item}`}
            smooth={true}
            duration={500} 
            className="uppercase text-orange-500 font-xs transition-colors duration-300 hover:text-secondary">
              {item}
            </ScrollLink>
          </li>
        ))}
      </ul>


      <div className="flex md:hidden w-9 h-9 rounded-full bg-secondary items-center justify-center">
        <HiMenuAlt4 className="w-5 h-5 text-white" onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            className="fixed top-0 bottom-0 right-0 z-50 p-4 w-4/5 h-screen flex flex-col justify-end items-end bg-cover bg-repeat bg-white shadow-lg"
            /* style={{ backgroundImage: 'url("../../assets/bgWhite.png")' }} */
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX className="w-9 h-9 text-secondary m-2" onClick={() => setToggle(false)} />
            <ul className="flex flex-col items-start list-none w-full h-full">
              {['startseite', 'leistungen', 'preis', 'kontakt', 'über uns'].map((item) => (
                <li key={item} className="m-2">
                  <ScrollLink
                    to={`${item}`}
                    smooth={true}
                    duration={500}
                    onClick={() => setToggle(false)}
                    className="uppercase text-orange-500 transition-colors duration-300 hover:text-secondary"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header