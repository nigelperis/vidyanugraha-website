'use client';

import { useEffect, useState } from 'react';
import { MentorType } from '@/app/types/mentor';
import Image from 'next/image';
import Link from 'next/link';

import MentorSkeleton from '../../Skeleton/Mentor';

type MentorResponse = {
  MentorData: MentorType[];
};

const isMentorResponse = (value: unknown): value is MentorResponse => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'MentorData' in value &&
    Array.isArray((value as { MentorData: unknown }).MentorData)
  );
};

const Mentor = () => {
  const [mentor, setMentor] = useState<MentorType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data: unknown = await res.json();
        if (isMentorResponse(data)) {
          setMentor(data.MentorData);
        } else {
          console.error('Unexpected mentor response', data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="mentors-section">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <h2 className="font-bold tracking-tight">Meet with our Mentors</h2>
          <div>
            <button className="hover:bg-primary text-primary border-primary cursor-pointer border bg-transparent px-4 py-3 font-medium duration-300 hover:border-transparent hover:text-white">
              Explore 10+ our Mentor
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <MentorSkeleton key={i} />
              ))
            : mentor.map((item, index) => (
                <div key={index} className="group relative shadow-lg">
                  <div className="min-h-80 w-full overflow-hidden bg-gray-200 lg:h-80">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={700}
                      height={700}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="my-4 flex justify-center">
                    <div>
                      <div className="shadow-mentorShadow -mt-8 flex items-center justify-center border border-white bg-white p-2">
                        <Link
                          href="/"
                          className="text-center text-sm text-gray-700"
                        >
                          {item.name}
                        </Link>
                      </div>
                      <p className="mt-3 text-center text-2xl font-semibold text-black/80">
                        {item.color}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
