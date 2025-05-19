import React from 'react';
import Image from 'next/image';

const AllWorkExperience = () => {
  return (
    <div className="py-10">
      <p className="text-2xl font-semibold">Work Experience</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div>
          <p className="text-lg font-medium">IT Intern</p>
          <p className="text-muted-foreground">Spicejet | May - June (2024)</p>
          <p className="mt-2">
          Worked on the development of SpiceJet\u0027s upcoming mobile application for cabin crew using React Native. Contributed to designing and implementing user interface components, ensuring a seamless and intuitive user experience. Collaborated closely with the design and backend teams to integrate APIs and optimize performance.
          </p>
        </div>
        <div className="relative">
          <Image
            src="/Screenshot 2025-05-19 170303.png"
            alt="Work Experience"
            width={600}
            height={400}
            className="object-cover rounded-md"
          />
        </div>
        <div className="mt-8">
          <p className="text-lg font-medium">Software Developer Intern</p>
          <p className="text-muted-foreground">Kawatatec | September - October (2025)</p>
          <p className="mt-2">
            Selected as the sole candidate for a prestigious internship in Nara, Japan, taking place in September 2025. Will be working on cutting-edge projects alongside experts in the field, gaining hands-on experience in a culturally and technologically rich environment. This unique opportunity reflects a strong academic foundation and a commitment to excellence.
          </p>
        </div>
        <div className="relative mt-8">
          <Image
            src="/JAPAN.jpg"
            alt="Work Experience in Japan"
            width={600}
            height={400}
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AllWorkExperience;
