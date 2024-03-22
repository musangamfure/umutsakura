import Navbar from '@/components/navbar/navbar';
import ServiceSection from './ServiceSection';
import HeroSection from './HeroSection';
import ThirdSection from './third-section';
import FourthSection from './fourth-section';
import FifthSection from './fifth-section';
import GetStartedFree from './eighth-section';
import Footer from '@/components/footer';
import CategorySection from './CategorySection';
import VendorSection from './VendorSection';

const LandingPage = () => {
  return (
    <main className='relative '>
      <Navbar />
      <div className=''>
        <HeroSection />
        <div className='absolute top-0 right-0 -z-10'>
          <img
            src='/assets/blob-shape.png'
            alt='Background'
            className='w-full object-cover -mt-40'
          />
        </div>
      </div>
      {/* <ServiceSection /> */}
      <CategorySection />
      <ThirdSection />
      <VendorSection />
      <FourthSection />
      <FifthSection />
      <GetStartedFree />
      <Footer />
    </main>
  );
};

export default LandingPage;
