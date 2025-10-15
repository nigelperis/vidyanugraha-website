'use client';

import { useState } from 'react';
import { validateEmail } from '@/utils/validateEmail';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

const MagicLink = () => {
  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email) {
      return toast.error('Please enter your email address.');
    }

    setLoader(true);
    if (!validateEmail(email)) {
      setLoader(false);
      return toast.error('Please enter a valid email address.');
    } else {
      signIn('email', {
        redirect: false,
        email: email,
      })
        .then((callback) => {
          if (callback?.ok) {
            toast.success('Email sent');
            setEmail('');
            setLoader(false);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error('Unable to send email!');
          setLoader(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[22px]">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          className="border-stroke text-dark placeholder:text-dark-6 focus:border-primary dark:border-dark-3 dark:focus:border-primary w-full rounded-md border bg-transparent px-5 py-3 text-base outline-hidden transition focus-visible:shadow-none dark:text-white"
        />
      </div>
      <div className="mb-9">
        <button
          type="submit"
          className="border-primary flex w-full cursor-pointer items-center justify-center rounded-md border bg-[#102C46] px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-[#102C46]"
        >
          Send Magic Link
        </button>
      </div>
    </form>
  );
};

export default MagicLink;
