import CategoryCard from '@/components/cards/CategoryCard';
import React from 'react';

function CategorySection() {
  const fearures = [
    {
      id: 0,
      title: 'Gutegura Ibirori',
      description:
        'Budget, Reception, Ceremony planning, theme & Design, Vennue selection and more',
      iconUrl: '/assets/cog.png',
      highlighted: false,
    },

    {
      id: 1,
      title: 'Ibikenerwa mu Birori',
      description:
        'Photography & Videograph, Catering, Makeup Artist, DJ, Music, Dressing, Decoration, Florist, Bouquet, and more',
      iconUrl: ' assets/aircraft.png',
      highlighted: true,
    },
    {
      id: 2,
      title: 'Kuyobora Ibirori',
      description:
        'Wedding Day Coordination, Timeline Management, Problem Solving, Communication Liaison Vendor Coordination and more',
      iconUrl: ' assets/mic.png',
      highlighted: false,
    },
  ];

  return (
    <section className='px-6 md:px-20 pt-10 md:my-10 '>
      <p className='text-gray-700 text-[1.125rem] text-center font-semibold uppercase'>
        Category
      </p>
      <p className='text-gray-900 text-[3.125rem]  font-[700] text-center mb-10 '>
        Our Best Ceremony Services
      </p>
      <div className='flex flex-col md:flex-row justify-between items-center  gap-4 md:gap-6  w-full'>
        {fearures.map((feature) => (
          <CategoryCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            iconUrl={feature.iconUrl}
            highlighted={feature.highlighted}
          />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
