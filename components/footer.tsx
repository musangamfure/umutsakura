import Image from 'next/image';
import Link from 'next/link';
import {
  PiFacebookLogoFill,
  PiInstagramLogo,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiTwitterLogoFill,
  PiYoutubeLogoFill,
} from 'react-icons/pi';

const Footer = () => {
  return (
    <section className=' w-full bg-gray-100 md:px-8  mx-auto  md:py-8'>
      <div className='grid grid-cols-1  xl:grid-cols-4  md:grid-cols-2 md:row-span-2 lg:row-span-1 lg:grid-cols-4  m-auto gap-4  xl:gap-6'>
        <div className='pt-10 flex flex-col space-y-6  items-center'>
          <Link href='/'>
            <Image
              src='/images/logo1.png'
              alt='Umutsakura Logo'
              width={500}
              height={550}
              className='object-cover w-full h-full'
            />
          </Link>

          <div className='flex  space-x-2 '>
            <PiInstagramLogoFill className='text-2xl text-gray-500' />

            <PiFacebookLogoFill className='text-2xl text-gray-500' />
            <PiYoutubeLogoFill className='text-2xl text-gray-500' />
          </div>
        </div>

        <div className='flex-col flex space-y-6 items-center '>
          <div className='pt-10 font-semibold uppercase '>Gutegura Ibirori</div>
          <div className='font-light space-y-4 text-sm'>
            <div>Home</div>
            <div>Product</div>
            <div>What&apos;s New</div>
            <div>Pricing</div>
            <div>Premium</div>
          </div>
        </div>

        <div className='flex-col space-y-6 flex items-center '>
          <div className='pt-10 font-semibold uppercase'>
            Ibikenerwa mu Birori
          </div>
          <div className='font-light space-y-4 text-sm'>
            <div>Company</div>
            <div>Leadership</div>

            <div>Customers</div>
            <div>Diversity</div>
          </div>
        </div>

        <div className='flex-col space-y-6 flex items-center '>
          <div className='pt-10 font-semibold uppercase'>
            Gukuyobora Ibirori
          </div>
          <div className='font-light space-y-4 text-sm'>
            <div>Project Management</div>
            <div>Goal Management</div>

            <div>Increase Productivity</div>
            <div>Work Management</div>
            <div>Project Planning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
