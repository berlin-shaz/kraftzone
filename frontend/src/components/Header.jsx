//import React from 'react';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {motion} from 'framer-motion';

import {logo} from '../assets/images';

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fixed z-20 flex justify-between items-center px-4 py-2 bg-white bg-opacity-15 backdrop-blur-md border border-white border-opacity-20">
      <div className="flex items-center justify-start ">
        <img src={logo} alt="logo" className="w-20 h-5 md:w-36 md:h-10" />
      </div>

      <ul className="hidden md:flex flex-1 justify-center items-center list-none">
        {['startseite', 'leistungen', 'preis', 'kontakt', 'über uns'].map((item) => (
          <li key={`link-${item}`} className="flex flex-col items-center mx-4 cursor-pointer">
            <div className="w-1 h-1 bg-transparent rounded-full mb-1"></div>
            <a href={`#${item}`} className="uppercase text-orange-500 font-xs transition-colors duration-300 hover:text-secondary">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex md:hidden w-9 h-9 rounded-full bg-secondary items-center justify-center">
        <HiMenuAlt4 className="w-5 h-5 text-white" onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            className="fixed top-0 bottom-0 right-0 z-50 p-4 w-4/5 h-screen flex flex-col justify-end items-end bg-cover bg-repeat bg-white shadow-lg"
            style={{ backgroundImage: 'url("../../assets/bgWhite.png")' }}
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX className="w-9 h-9 text-secondary m-2" onClick={() => setToggle(false)} />
            <ul className="flex flex-col items-start list-none w-full h-full">
              {['startseite', 'leistungen', 'preis', 'kontakt', 'über uns'].map((item) => (
                <li key={item} className="m-4">
                  <a
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                    className="uppercase text-orange-500 text-lg font-medium transition-colors duration-300 hover:text-secondary"
                  >
                    {item}
                  </a>
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