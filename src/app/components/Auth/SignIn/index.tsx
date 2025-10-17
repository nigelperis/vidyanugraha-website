'use client';

import { MouseEvent, useState } from 'react';
import Loader from '@/app/components/Common/Loader';
import Logo from '@/app/components/Layout/Header/Logo';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import SocialSignIn from '../SocialSignIn';

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    checkboxToggle: false,
  });
  const [loading, setLoading] = useState(false);

  const loginUser = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setLoading(true);
    signIn('credentials', { ...loginData, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error);
          console.log(callback?.error);
          setLoading(false);
          return;
        }

        if (callback?.ok && !callback?.error) {
          toast.success('Login successful');
          setLoading(false);
          router.push('/');
        }
      })
      .catch((err: unknown) => {
        setLoading(false);
        console.error(err);
        const message =
          err instanceof Error ? err.message : 'An unexpected error occurred';
        toast.error(message);
      });
  };

  return (
    <>
      <div className="mx-auto mb-10 inline-block max-w-[160px] text-center">
        <Logo />
      </div>

      <SocialSignIn />

      <span className="relative z-1 my-8 block text-center before:absolute before:top-3 before:left-0 before:h-px before:w-[40%] before:bg-black/20 before:content-[''] after:absolute after:top-3 after:right-0 after:h-px after:w-[40%] after:bg-black/20 after:content-['']">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-black">
          OR
        </span>
      </span>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className="text-dark focus:border-primary w-full border border-solid border-gray-200 bg-transparent px-5 py-3 text-base text-black outline-hidden transition placeholder:text-black/30 focus-visible:shadow-none"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="text-dark focus:border-primary w-full border border-solid border-gray-200 bg-transparent px-5 py-3 text-base text-black outline-hidden transition placeholder:text-black/30 focus-visible:shadow-none"
          />
        </div>
        <div className="mb-9">
          <button
            onClick={loginUser}
            type="submit"
            className="bg-primary text-18 border-primary hover:text-primary w-full border py-3 font-medium text-white transition duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent"
          >
            Sign In {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href="/"
        className="text-primary mb-2 inline-block text-base hover:underline"
      >
        Forgot Password?
      </Link>
      <p className="text-body-secondary text-base text-black">
        Not a member yet?{' '}
        <Link href="/" className="text-primary hover:underline">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default Signin;
