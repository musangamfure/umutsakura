'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useState } from 'react';
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiCheckLight,
  PiClockAfternoonLight,
  PiCompassLight,
  PiFileThin,
  PiHeadset,
  PiMegaphoneLight,
  PiRocketLaunchFill,
  PiSparkleLight,
  PiTargetLight,
} from 'react-icons/pi';

const tabs = [
  {
    icon: <PiSparkleLight />,
    name: 'Initial Consultation',
    image: '/assets/DancingDoodle.svg',
  },
  {
    icon: <PiBookOpenTextLight />,
    name: 'Budget Management',
    image: '/assets/DogJumpDoodle.svg',
  },
  {
    icon: <PiRocketLaunchFill />,
    name: 'Theme and Design',
    image: '/assets/MeditatingDoodle.svg',
  },
  {
    icon: <PiFileThin />,
    name: 'Services Selection',
    image: '/assets/MeditatingDoodle.svg',
  },
];

const ThirdSection = () => {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className=' relative flex justify-center items-center flex-col px-8 md:my-20 md:px-0  mx-auto '>
      <div className='text-gray-900 text-[3.125rem]  font-[700] text-center md:mb-4'>
        Tugufasha Gutegura Ibirori Neza
      </div>

      <div className='grid grid-cols-2  md:grid-cols-4 md:row-span-1  gap-4  xl:gap-6 mt-8   xl:px-0  '>
        {tabs.map((tab) => (
          <motion.div
            key={tab.name}
            className={`
              flex 
            p-1
              md:p-4
             
      
                cursor-pointer
        
                ${
                  activeTab.name === tab.name
                    ? 'rounded-md md:rounded-xl bg-[#f6f5f4]  md:bg-white border-gray-200 md:border items-center justify-center flex p-1 '
                    : 'md:bg-[#f6f5f4]  rounded-md xl:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7] '
                } `}
            onClick={() => setActiveTab(tab)}
          >
            <div className='flex flex-col   items-center md:justify-center mx-auto'>
              <div className='hidden md:flex text-4xl text-orange-300'>
                {tab.icon}
              </div>
              <div className='font-medium text-sm  xl:text-lg mt-1'>
                {tab.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='py-4 lg:px-6 xl:px-0 md:px-6  w-[50%] md:w-[60%] xl:w-[70%]  '>
        {activeTab && (
          <div className='flex flex-col '>
            <div className='text-2xl font-medium w-2/3 mt-4 text-center'>
              Understanding the Couple&apos;s Vision
            </div>
            <div className='py-4 text-gray-500 text-center w-2/3'>
              Let&apos;s Discovering Your Perfect Wedding Style.
            </div>

            <div className='bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-lg my-4'>
              <div className='flex gap-4 border-b '>
                <PiCheckLight className='text-2xl ' />

                <div className=' font-normal pb-4 w-80'>
                  Meet with the couple to discuss their wedding vision, style,
                  and preferences.
                </div>
              </div>

              <div className='flex gap-4 border-b '>
                <PiCheckLight className='text-2xl ' />

                <div className=' font-normal pb-4 w-80'>
                  Gather information on their desired wedding theme, colors, and
                  atmosphere.
                </div>
              </div>

              <div className='flex gap-4  '>
                <PiCheckLight className='text-2xl ' />

                <div className=' font-normal pb-4 w-80'>
                  Listen attentively to their ideas and provide expert guidance
                  and suggestions.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ThirdSection;
