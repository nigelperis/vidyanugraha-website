import Link from 'next/link';

const Volunteer = () => {
  return (
    <section className="bg-volunteer-bg bg-cover bg-no-repeat py-28">
      <div className="container mx-auto px-4 lg:max-w-(--breakpoint-xl)">
        <div className="text-center">
          <h2 className="text-30 mb-6 font-medium text-white">
            Become a Volunteer
          </h2>
          <p className="text-16 lg:max-w-60% mx-auto mb-6 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscelit. Nam malesu
            dolor sit amet, consectetur adipiscelit. consectetur adipiscelit.
            Nam malesu dolor.
          </p>
          <div className="flex justify-center">
            <Link
              href="#"
              className="from-error to-warning hover:border-error hover:text-error border border-transparent bg-linear-to-r px-7 py-5 text-white hover:from-transparent hover:to-transparent"
            >
              Donate now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
