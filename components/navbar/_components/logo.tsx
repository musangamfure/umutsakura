import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <Link href='/'>
        <Image
          src='/images/logo1.png'
          alt='Umutsakura Logo'
          width={500}
          height={550}
          className='object-cover w-full h-full'
        />
      </Link>
    </div>
  );
};

export default Logo;
