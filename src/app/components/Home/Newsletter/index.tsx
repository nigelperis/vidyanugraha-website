import Image from 'next/image';

const Newsletter = () => {
  return (
    <section id="join-section" className="-mb-64">
      <div className="relative z-10">
        <div className="bg-orange bg-newsletter mx-auto max-w-2xl rounded-lg bg-contain bg-right-bottom bg-no-repeat px-4 py-16 sm:px-6 md:max-w-7xl md:py-24 lg:px-24">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="mb-3 text-5xl font-bold"> Join Our Newsletter </h3>
              <h4 className="mb-7 text-lg font-medium">
                Subscribe our newsletter for discounts, promo and many more.
              </h4>
              <div className="flex gap-2">
                <input
                  type="Email address"
                  name="q"
                  className="focus:border-primary w-full rounded-lg bg-white px-4 py-4 pl-4 text-base transition-all duration-500 focus:outline-1"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
                <button className="bg-primary border-primary hover:text-primary cursor-pointer rounded-sm border px-4 py-2 font-medium text-white hover:bg-transparent">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="float-right -mt-32">
                <Image
                  src={'/images/newsletter/Free.svg'}
                  alt="bgimg"
                  width={64}
                  height={64}
                  className="w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
