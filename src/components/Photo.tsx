import React from 'react';
import Image from 'next/image';
import CreImg1 from '../assets/images/image1.png'
import CreImg2 from '../assets/images/image2.jpg'
import CreImg3 from '../assets/images/image3.jpg'
import GuiImg from '../assets/images/guide.png'

export const Photo = () => {
  const creators = [
    { id: 1, alt: "Creator 1", image: CreImg2, name: "Anirudh Sarkar (2348009)"},
    { id: 2, alt: "Creator 2", image: CreImg1, name: "Joseph PJ (2348035)" },
    { id: 3, alt: "Creator 3", image: CreImg3, name: "Sagar James (2348050)"},
  ];

  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-3xl font-bold text-center mb-6">CREATORS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {creators.map((creator) => (
          <div key={creator.id} className="flex flex-col items-center text-center">
            <Image
              src={creator.image}
              alt={creator.alt}
              className="w-40 h-40 rounded-full object-cover object-center"
            />
            <p className="mt-4">{creator.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center my-8">GUIDE</h2>
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-center">
          <Image
            src={GuiImg}
            alt="Guide"
            className="w-40 h-40 rounded-full object-cover"
          />
          <p className="mt-4">Dr. Dalvin Vinoth Kumar</p>
          <p className='mt-1'>Asst Prof., Dept Of Statistics and Data Science</p>
        </div>
      </div>
    </div>
  );
};

