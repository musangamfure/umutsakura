'use client';

import React, { useRef, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import DropDownMenu from './drop-down-menu';

import { X, AlignJustify } from 'lucide-react';
import Link from 'next/link';

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className='pr-2'>
      <div className='flex xl:space-x-6 lg:space-x-4 space-x-2'>
        <Link
          href='/contact-us'
          className='hidden xl:flex items-center text-lg'
        >
          <div>Contact Us</div>
        </Link>

        <div className='flex lg:space-x-4 items-center text-lg'>
          <div>
            <Button
              variant={'default'}
              className='hidden lg:flex items-center border-none text-md'
            >
              Get Started
            </Button>
          </div>
        </div>
        {isDropdownVisible && (
          <div onClick={toggleDropdown} className='rounded-full xl:hidden'>
            <X className='h-5 w-5 items-center justify-center cursor-pointer' />
          </div>
        )}

        {!isDropdownVisible && (
          <div onClick={toggleDropdown} className='flex lg:hidden'>
            <AlignJustify className='h-5 w-5 items-center justify-center cursor-pointer' />
          </div>
        )}

        {isDropdownVisible && <DropDownMenu onClose={closeDropdown} />}
      </div>
    </div>
  );
};

export default ActionButtons;
