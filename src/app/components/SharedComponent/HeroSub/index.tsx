import React, { FC } from 'react';

interface HeroSubProps {
  title: string;
}

const HeroSub: FC<HeroSubProps> = ({ title }) => {
  return (
    <>
      <section className="bg-herosub-bg mt-20 bg-cover bg-no-repeat py-40 sm:mt-44 lg:mt-40">
        <div className="container mx-auto px-4 lg:max-w-(--breakpoint-xl)">
          <h2 className="md:text-56 text-36 font-medium text-white">{title}</h2>
        </div>
      </section>
    </>
  );
};

export default HeroSub;
