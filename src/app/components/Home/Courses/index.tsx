'use client';

import { useEffect, useState } from 'react';
import { CourseDetailType } from '@/app/types/coursedetail';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import Link from 'next/link';

import CourseDetailSkeleton from '../../Skeleton/CourseDetail';

interface Name {
  imageSrc: string;
  course: string;
  price: string;
  profession: string;
  category:
    | 'webdevelopment'
    | 'mobiledevelopment'
    | 'datascience'
    | 'cloudcomputing';
}

type CourseDetailResponse = {
  CourseDetailData: CourseDetailType[];
};

const isCourseDetailResponse = (
  value: unknown,
): value is CourseDetailResponse => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'CourseDetailData' in value &&
    Array.isArray((value as { CourseDetailData: unknown }).CourseDetailData)
  );
};

const NamesList = () => {
  // -------------------------------------------------------------
  const [courseDetail, setCourseDetail] = useState<CourseDetailType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error('Failed to fetch.');
        const data: unknown = await res.json();
        if (isCourseDetailResponse(data)) {
          setCourseDetail(data.CourseDetailData);
        } else {
          console.error('Unexpected courses response', data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  // -------------------------------------------------------------

  const [selectedButton, setSelectedButton] = useState<
    | 'mobiledevelopment'
    | 'webdevelopment'
    | 'datascience'
    | 'cloudcomputing'
    | 'all'
    | null
  >('webdevelopment');
  const mobileDevelopment = courseDetail.filter(
    (name) => name.category === 'mobiledevelopment',
  );
  const webDevelopment = courseDetail.filter(
    (name) => name.category === 'webdevelopment',
  );
  const dataScience = courseDetail.filter(
    (name) => name.category === 'datascience',
  );
  const cloudComputing = courseDetail.filter(
    (name) => name.category === 'cloudcomputing',
  );

  let selectedNames: Name[] = [];
  if (selectedButton === 'mobiledevelopment') {
    selectedNames = mobileDevelopment;
  } else if (selectedButton === 'webdevelopment') {
    selectedNames = webDevelopment;
  } else if (selectedButton === 'datascience') {
    selectedNames = dataScience;
  } else if (selectedButton === 'cloudcomputing') {
    selectedNames = cloudComputing;
  }

  const nameElements = selectedNames.map((name, index) => (
    <div id="Courses" key={index} className="group flex rounded-xl shadow-lg">
      <div className="flex flex-col py-5 lg:py-0">
        <div className="overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={name.imageSrc}
            alt={name.course}
            width={700}
            height={700}
            className="h-full w-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-125"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-5 p-4">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <p className="block font-normal text-gray-900">{name.course}</p>
              <div className="text-success border-success block rounded-md border-2 border-solid px-1 text-lg font-semibold">
                <p>${name.price}</p>
              </div>
            </div>
            <Link href={'/'}>
              <p
                aria-hidden="true"
                className="group-hover:text-primary text-xl font-semibold group-hover:cursor-pointer"
              >
                {name.profession}
              </p>
            </Link>
          </div>
          <div className="flex justify-between rounded-md border-2 border-solid p-2">
            <p>12 Classes</p>
            <div className="flex flex-row space-x-4">
              <div className="flex">
                <Image
                  src={'/images/courses/account.svg'}
                  width={18}
                  height={20}
                  alt="circle"
                />
                <p className="text-lightgrey ml-1">120</p>
              </div>
              <div className="flex">
                <Image
                  src={'/images/courses/Star.svg'}
                  width={18}
                  height={20}
                  alt="star"
                />
                <p className="ml-1">4.5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="courses-section">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <h2 className="font-bold tracking-tight">Popular Courses</h2>
          <div>
            <button className="hover:bg-primary text-primary border-primary cursor-pointer rounded-sm border bg-transparent px-4 py-3 font-medium duration-300 hover:border-transparent hover:text-white">
              Explore Classes
            </button>
          </div>
        </div>
        <div className="nowhitespace mb-4 flex space-x-5 overflow-x-auto rounded-xl bg-white p-1">
          {/* FOR DESKTOP VIEW */}
          <button
            onClick={() => setSelectedButton('webdevelopment')}
            className={
              'bg-white' +
              (selectedButton === 'webdevelopment'
                ? 'border-b-2 border-yellow-200 text-black'
                : 'text-black/40') +
              ' hidden pb-2 text-lg hover:cursor-pointer sm:block'
            }
          >
            Web Development
          </button>
          <button
            onClick={() => setSelectedButton('mobiledevelopment')}
            className={
              'bg-white ' +
              (selectedButton === 'mobiledevelopment'
                ? 'border-b-2 border-yellow-200 text-black'
                : 'text-black/40') +
              ' hidden pb-2 text-lg hover:cursor-pointer sm:block'
            }
          >
            Mobile Development
          </button>
          <button
            onClick={() => setSelectedButton('datascience')}
            className={
              'bg-white ' +
              (selectedButton === 'datascience'
                ? 'border-b-2 border-yellow-200 text-black'
                : 'text-black/40') +
              ' hidden pb-2 text-lg hover:cursor-pointer sm:block'
            }
          >
            Data Science
          </button>
          <button
            onClick={() => setSelectedButton('cloudcomputing')}
            className={
              'bg-white ' +
              (selectedButton === 'cloudcomputing'
                ? 'border-b-2 border-yellow-200 text-black'
                : 'text-black/40') +
              ' hidden pb-2 text-lg hover:cursor-pointer sm:block'
            }
          >
            Cloud Computing
          </button>

          {/* FOR MOBILE VIEW */}
          <Icon
            icon="solar:global-line-duotone"
            onClick={() => setSelectedButton('webdevelopment')}
            className={
              'block text-5xl sm:hidden ' +
              (selectedButton === 'webdevelopment'
                ? 'border-b-2 border-yellow-200'
                : 'text-gray-400')
            }
          />

          <Icon
            icon="solar:smartphone-line-duotone"
            onClick={() => setSelectedButton('mobiledevelopment')}
            className={
              'block text-5xl sm:hidden ' +
              (selectedButton === 'mobiledevelopment'
                ? 'border-b-2 border-yellow-200'
                : 'text-gray-400')
            }
          />

          <Icon
            icon="solar:database-line-duotone"
            onClick={() => setSelectedButton('datascience')}
            className={
              'block text-5xl sm:hidden ' +
              (selectedButton === 'datascience'
                ? 'border-b-2 border-yellow-200'
                : 'text-gray-400')
            }
          />

          <Icon
            icon="solar:cloud-line-duotone"
            onClick={() => setSelectedButton('cloudcomputing')}
            className={
              'block text-5xl sm:hidden ' +
              (selectedButton === 'cloudcomputing'
                ? 'border-b-2 border-yellow-200'
                : 'text-gray-400')
            }
          />
        </div>
        <div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <CourseDetailSkeleton key={i} />
              ))
            ) : nameElements.length > 0 ? (
              nameElements
            ) : (
              <p>No data to show</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NamesList;
