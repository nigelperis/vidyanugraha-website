'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { TestimonialType } from '@/app/types/testimonial';

import TestimonialSkeleton from '../../Skeleton/Testimonial';

type TestimonialResponse = {
  TestimonialData: TestimonialType[];
};

const isTestimonialResponse = (
  value: unknown,
): value is TestimonialResponse => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'TestimonialData' in value &&
    Array.isArray((value as { TestimonialData: unknown }).TestimonialData)
  );
};

// CAROUSEL SETTINGS

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data: unknown = await res.json();
        if (isTestimonialResponse(data)) {
          setTestimonial(data.TestimonialData);
        } else {
          console.error('Unexpected testimonial response', data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id="testimonial-section" className="bg-cream">
      <div className="container">
        <div className="mb-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <h2 className="font-bold tracking-tight">
            What Our Happy <br /> Students Says
          </h2>
          <div>
            <button className="hover:bg-primary text-primary border-primary cursor-pointer rounded-sm border bg-transparent px-4 py-3 font-semibold duration-300 hover:border-transparent hover:text-white">
              Give Your Review
            </button>
          </div>
        </div>
        <p className="mb-6 text-lg font-medium">
          Build skills with our courses and mentor <br /> from world-class
          companies.
        </p>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <TestimonialSkeleton key={i} />
              ))
            : testimonial.map((items, i) => (
                <div key={i}>
                  <div className="m-4 rounded-lg bg-white px-12 pt-8 pb-10 text-center">
                    <div className="before:left-54% relative z-0 flex items-center justify-center before:absolute before:bottom-0 before:z-10 before:h-6 before:w-6 before:bg-[url('/images/testimonial/greenpic.svg')]">
                      <Image
                        src={items.imgSrc}
                        alt="gaby"
                        width={64}
                        height={64}
                        className="relative inline-block rounded-full ring-2 ring-white"
                      />
                    </div>
                    <p className="pt-4 pb-2 text-sm">{items.profession}</p>
                    <p className="pb-3 text-2xl font-semibold">{items.name}</p>
                    <Image
                      src={items.starimg}
                      alt="stars-img"
                      className="m-auto w-[30%] pb-6"
                      width={32}
                      height={32}
                    />
                    <p className="text-lg leading-7 font-medium">
                      {items.detail}
                    </p>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
