import Image from 'next/image';
import Link from 'next/link';

import Dropdownone from './Dropdownone';
import Dropdowntwo from './Dropdowntwo';

const Banner = () => {
  return (
    <section id="Home" className="bg-banner-image pt-28 pb-20">
      <div className="relative px-6 lg:px-8">
        <div className="container">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="mx-auto max-w-4xl leading-tight font-bold tracking-tight">
              Advance your engineering skills with our courses
            </h1>
            <p className="text-lg leading-8 text-black">
              Build skills with our courses and mentor from world-class
              companies.
            </p>
            <div className="mx-auto w-fit border border-white/30 bg-white/30 p-6 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-center gap-8">
                <div className="hidden -space-x-2 overflow-hidden sm:block">
                  <Image
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="img1"
                    width={12}
                    height={12}
                  />

                  <Image
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="img2"
                    width={12}
                    height={12}
                  />
                  <Image
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt="img3"
                    width={12}
                    height={12}
                  />
                  <Image
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="img4"
                    width={12}
                    height={12}
                  />
                  <Image
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="img5"
                    width={12}
                    height={12}
                  />
                </div>
                <div>
                  <div className="flex justify-center sm:justify-start">
                    <h3 className="mr-2 text-2xl font-semibold">4.6</h3>
                    <Image
                      src={'/images/banner/Stars.svg'}
                      alt="stars-icon"
                      width={32}
                      height={32}
                      className="w-[60%]"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm">Rated by 25k on google.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DROPDOWN BUTTONS */}

          <div className="boxshadow mx-auto mt-12 max-w-4xl bg-white p-6 lg:max-w-4xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
              <div className="col-span-3">
                <Dropdownone />
              </div>
              <div className="col-span-3">
                <Dropdowntwo />
              </div>
              <div className="col-span-3 mt-2 sm:col-span-2">
                <Link href={'/#courses-section'}>
                  <button className="bg-primary hover:text-primary border-primary w-full border px-3 py-4 font-bold text-white duration-300 hover:cursor-pointer hover:bg-transparent">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
