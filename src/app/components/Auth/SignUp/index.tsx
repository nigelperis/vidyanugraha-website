'use client';

import { FormEvent, useState } from 'react';
import Loader from '@/app/components/Common/Loader';
import Logo from '@/app/components/Layout/Header/Logo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import SocialSignUp from '../SocialSignUp';

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());
    const finalData = { ...value };

    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('Successfully registered');
        setLoading(false);
        router.push('/signin');
      })
      .catch((err: unknown) => {
        console.error(err);
        const message =
          err instanceof Error ? err.message : 'An unexpected error occurred';
        toast.error(message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="mx-auto mb-10 inline-block max-w-[160px] text-center">
        <Logo />
      </div>

      <SocialSignUp />

      <span className="relative z-1 my-8 block text-center before:absolute before:top-3 before:left-0 before:h-px before:w-[40%] before:bg-black/20 before:content-[''] after:absolute after:top-3 after:right-0 after:h-px after:w-[40%] after:bg-black/20 after:content-['']">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-black">
          OR
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="text-dark focus:border-primary w-full border border-solid border-gray-200 bg-transparent px-5 py-3 text-base text-black outline-hidden transition placeholder:text-black/30 focus-visible:shadow-none"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="text-dark focus:border-primary w-full border border-solid border-gray-200 bg-transparent px-5 py-3 text-base text-black outline-hidden transition placeholder:text-black/30 focus-visible:shadow-none"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="text-dark focus:border-primary w-full border border-solid border-gray-200 bg-transparent px-5 py-3 text-base text-black outline-hidden transition placeholder:text-black/30 focus-visible:shadow-none"
          />
        </div>
        <div className="mb-9">
          <button
            type="submit"
            className="text-18 bg-primary text-darkmode hover:text-primary border-primary flex w-full items-center justify-center border px-5 py-3 font-medium text-white transition duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent"
          >
            Sign Up {loading && <Loader />}
          </button>
        </div>
      </form>

      <p className="text-body-secondary mb-4 text-base text-black">
        By creating an account you are agree with our{' '}
        <Link href="/#" className="text-primary hover:underline">
          Privacy
        </Link>{' '}
        and{' '}
        <Link href="/#" className="text-primary hover:underline">
          Policy
        </Link>
      </p>

      <p className="text-body-secondary text-base text-black">
        Already have an account?
        <Link href="/" className="text-primary pl-2 hover:underline">
          Sign In
        </Link>
      </p>
    </>
  );
};

export default SignUp;
