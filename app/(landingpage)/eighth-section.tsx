import { PiArrowRight } from 'react-icons/pi';

const GetStartedFree = () => {
  return (
    <>
      <div className='py-20 xl:py-24 flex justify-center items-center flex-col border-b'>
        <div className='text-4xl xl:text-5xl font-medium  text-center'>
          Get started for free
        </div>
        <div className='py-4 xl:w-1/3  text-center px-10'>
          Never lose a great idea again. Capture, organize, and share with Umutsakura.
        </div>
        <div className='text-sky-500 flex items-center hover:underline hover:cursor-pointer'>
          Contact Us Now <PiArrowRight className='ml-3 text-sm ' />
        </div>

       
      </div>
    </>
  );
};

export default GetStartedFree;
