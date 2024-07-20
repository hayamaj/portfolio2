import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLinkedin, FaGithub, FaEnvelope, FaLocationArrow, FaArrowDown } from "react-icons/fa6";
import Link from 'next/link';
import VantaBackground from './VantaBackground';

const Hero = () => {
    return (
      
        <div className="pb-20 pt-36">
            

      
         
        

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center font-medium max-w-80 text-white">CODE. PEOPLE. DESIGN.</h2>
                <TextGenerateEffect className="text-center text-3xl md:text-6xl lg:text-6xl" words={'HAYA, LIKE THE SONG.'} />
                {/*
                <p className="lowercase text-center font-medium tracking-widest md:tracking-wider mb-4 text-xs md:text-lg lg:text-xl text-white mt-4">Hi, I&apos;m Haya <span className="text-white font-light">(hey-ya)</span>, a full-stack creative product developer based in <span className="text-white font-medium">New York</span>.</p>
                {/*<a href="#about"><MagicButton title="about" icon={<FaLocationArrow />} position= "right" />
                </a> put it here
                <div className="flex items-center justify-center mt-7 mb-3 space-x-4">
            <Link href="mailto:hayamaj@bu.edu" className="text-white">
              <FaEnvelope size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/hayamaj" className="text-white">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/hayamaj" className="text-white">
              <FaGithub size={24} />
            </Link>
          </div>
          */}
            </div>
        </div>
        </div>
        );
    }
    
export default Hero