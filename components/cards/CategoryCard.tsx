import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  description: string;
  iconUrl: string;
  highlighted: boolean;
}

function CategoryCard({ title, description, iconUrl, highlighted }: Props) {
  return (
    <div
      className={`flex flex-col gap-1 justify-center items-center relative ${
        highlighted
          ? 'bg-white shadow-md p-[1.5rem] rounded-[2.5rem]'
          : 'bg-[#f6f5f4] p-[1.5rem] rounded-[1.5rem]'
      } `}
    >
      <div className=''>
        <img
          src={iconUrl}
          alt='icon'
          className={highlighted ? 'md:w-[100px]' : 'w-[70px]'}
        />
      </div>
      <p className='text-gray-800 text-[1.42rem] font-[700] mb-2 '>{title}</p>
      <p className='text-gray-500 text-[1rem] font-[500] text-center'>
        {' '}
        {description}
      </p>
      {highlighted && (
        <div className='absolute -bottom-2 left-0 -z-50'>
          <Image
            src='/assets/rectangle-shape.png'
            alt='shape'
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
}

export default CategoryCard;
