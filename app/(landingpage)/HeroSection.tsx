import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PiArrowRight } from 'react-icons/pi';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className=' px-6 md:px-20 flex justify-between items-center mt-10 z-[9999]'>
      <div className='flex flex-1 flex-col'>
        <p className='text-[1.128rem] font-[700] text-orange-300 uppercase mt-4'>
          One stop center for your ceremony
        </p>
        <div className='volkhov text-[2.737rem] font-[700] text-gray-600 leading-large '>
          Tugutegurira
          <div className='flex flex-col mb-4'>
            <span className='z-10'>Ibirori Neza</span>
            <Image
              src='/assets/stylish-underline.png'
              alt='stylish underline'
              className='z-0 -mt-5'
              height={40}
              width={300}
            />
          </div>
          Bikizihira Ababyitabiriye Bose.
        </div>

        <p className='text-[1.128rem] font-[500] text-gray-400 '>
          Shyira umutima Hamwe, Indashyikirwa Mu Guhiga <br />
          no Kwesa Imihigo mu Birori Turahakubereye!
        </p>

        <div className='flex gap-4 py-6 items-center'>
          <Link href='/'>
            <Button className='py-1 '>
              <div className='flex items-center justify-center'>
                <div className='text-lg'>Tuvugishe</div>
                <div>
                  <PiArrowRight className='ml-2 ' />
                </div>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <div className='hidden md:flex flex-1 justify-center items-center relative'>
        <Image
          src='/assets/bride.png'
          alt='bride'
          className='w-[78%] object-cover -mt-60'
          height={500}
          width={1024}
        />
      </div>
    </section>
  );
}

export default HeroSection;
