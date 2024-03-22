import {
  PiAirplaneFill,
  PiArrowRight,
  PiCalendarCheckFill,
  PiCheckCircleFill,
  PiClipboardLight,
  PiFlag,
  PiFlagCheckeredFill,
  PiHouseFill,
  PiHouseLight,
  PiWatchFill,
} from 'react-icons/pi';
import Image from 'next/image';

const items = [
  {
    icon: <PiHouseFill className='text-2xl text-red-500' />,
    title: 'Budget Worksheet',
    description:
      'A spreadsheet or document template to help couples create and manage their wedding budget, including categories for each expense and space to track actual costs.',
    image: '/assets/decoration.jpg',
  },
  {
    icon: <PiFlagCheckeredFill className='text-2xl text-sky-600' />,
    title: 'Budget Worksheet',
    description:
      'A spreadsheet or document template to help couples create and manage their wedding budget, including categories for each expense and space to track actual costs.',
  },
  {
    icon: <PiCheckCircleFill className='text-2xl text-orange-500' />,
    title: 'Budget Worksheet',
    description:
      'A spreadsheet or document template to help couples create and manage their wedding budget, including categories for each expense and space to track actual costs.',
  },
  {
    icon: <PiClipboardLight className='text-2xl text-green-500' />,
    title: 'Budget Worksheet',
    description:
      'A spreadsheet or document template to help couples create and manage their wedding budget, including categories for each expense and space to track actual costs.',
  },
  {
    icon: <PiAirplaneFill className='text-2xl text-red-500' />,
    title: 'Budget Worksheet',
    description:
      'A spreadsheet or document template to help couples create and manage their wedding budget, including categories for each expense and space to track actual costs.',
  },
  {
    icon: <PiCalendarCheckFill className='text-2xl text-emerald-500' />,
    title: 'Budget Worksheet',
    description:
      'A spreadsheet or document template to help couples create and manage their wedding budget, including categories for each expense and space to track actual costs.',
  },

  {
    icon: <PiWatchFill className='text-2xl text-indigo-500' />,
    title: 'Budget Worksheet',
    description:
      'A spreadsheet or document template to help couples create and manage their wedding budget, including categories for each expense and space to track actual costs.',
  },
];

const FifthSection = () => {
  return (
    <>
      <div className='flex flex-col pt-32 items-center justify-center'>
        <div className='text-3xl xl:text-5xl font-medium justify-center items-center flex'>
          Inyandikongero Zitandukanye
        </div>
        <div className='text-sky-500 flex items-center hover:underline hover:cursor-pointer pt-6'>
          Hitamo <PiArrowRight className='ml-3 text-sm ' />
        </div>
      </div>
      <div className='grid xl:grid-cols-4  md:grid-cols-2 md:row-span-1  gap-4  xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-3/4  2xl:w-[55%] mx-auto md:w-full'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? ' xl:col-span-2 xl:row-span-3  md:col-span-2  flex-col md:flex-row xl:flex-col'
                : ''
            } bg-[#f6f5f4] p-6 rounded-xl  flex ${
              index === 0 ? 'justify-between' : ''
            }`}
          >
            <div className='flex flex-col '>
              {item.icon}
              <div className='text-lg font-medium mt-2'>{item.title}</div>
              {item.description}
            </div>
            {item.image && (
              <div
                className={` ${
                  index !== 0 ? 'justify-between' : 'flex-col justify-end'
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} Image`}
                  width={1000}
                  height={1000}
                  className='
                  mt-10
             w-96
             rounded-xl

                  
                  '
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FifthSection;
