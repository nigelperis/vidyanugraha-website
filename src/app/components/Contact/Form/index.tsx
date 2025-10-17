'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

type ContactFormData = {
  firstname: string;
  lastname: string;
  email: string;
  phnumber: string;
  Message: string;
};

type SubmitResponse = {
  success: boolean;
};

const isSubmitResponse = (value: unknown): value is SubmitResponse => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'success' in value &&
    typeof (value as { success: unknown }).success === 'boolean'
  );
};

const initialFormData: ContactFormData = {
  firstname: '',
  lastname: '',
  email: '',
  phnumber: '',
  Message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [loader, setLoader] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== '',
    );
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const reset = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/bhainirav772@gmail.com',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            Name: formData.firstname,
            LastName: formData.lastname,
            Email: formData.email,
            PhoneNo: formData.phnumber,
            Message: formData.Message,
          }),
        },
      );

      const data: unknown = await response.json();

      if (isSubmitResponse(data) && data.success) {
        setSubmitted(true);
        setShowThanks(true);
        reset();

        setTimeout(() => {
          setShowThanks(false);
        }, 5000);
      } else {
        reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="relative">
          <h2 className="mb-9 font-bold tracking-tight">Get in Touch</h2>
          <form
            onSubmit={handleSubmit}
            className="m-auto flex w-full flex-wrap justify-between"
          >
            <div className="w-full gap-3 sm:flex">
              <div className="mx-0 my-2.5 flex-1">
                <label htmlFor="fname" className="inline-block pb-3 text-base">
                  First Name
                </label>
                <input
                  id="fname"
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="John"
                  className="focus:border-primary w-full border border-solid px-4 py-2.5 text-base transition-all duration-500 focus:outline-0"
                />
              </div>
              <div className="mx-0 my-2.5 flex-1">
                <label htmlFor="lname" className="inline-block pb-3 text-base">
                  Last Name
                </label>
                <input
                  id="lname"
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="focus:border-primary w-full border border-solid px-4 py-2.5 text-base transition-all duration-500 focus:outline-0"
                />
              </div>
            </div>
            <div className="w-full gap-3 sm:flex">
              <div className="mx-0 my-2.5 flex-1">
                <label htmlFor="email" className="inline-block pb-3 text-base">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  className="focus:border-primary w-full border border-solid px-4 py-2.5 text-base transition-all duration-500 focus:outline-0"
                />
              </div>
              <div className="mx-0 my-2.5 flex-1">
                <label
                  htmlFor="Phnumber"
                  className="inline-block pb-3 text-base"
                >
                  Phone Number
                </label>
                <input
                  id="Phnumber"
                  type="tel"
                  name="phnumber"
                  placeholder="+1234567890"
                  value={formData.phnumber}
                  onChange={handleChange}
                  className="focus:border-primary w-full border border-solid px-4 py-2.5 text-base transition-all duration-500 focus:outline-0"
                />
              </div>
            </div>
            <div className="mx-0 my-2.5 w-full flex-1">
              <label htmlFor="message" className="inline-block text-base">
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                className="focus:border-primary mt-2 w-full border border-solid px-5 py-3 transition-all duration-500 focus:outline-0"
                placeholder="Anything else you wanna communicate"
              ></textarea>
            </div>
            <div className="mx-0 my-2.5 w-full">
              <button
                type="submit"
                disabled={!isFormValid || loader}
                className={`rounded-full border px-6 py-4 text-lg leading-none font-medium ${
                  !isFormValid || loader
                    ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                    : 'bg-primary border-primary hover:text-primary cursor-pointer text-white hover:bg-transparent'
                }`}
              >
                Submit
              </button>
            </div>
          </form>
          {showThanks && (
            <div className="bg-primary absolute mt-1 mb-4.5 flex items-center gap-2 rounded-full px-4 text-lg text-white">
              Thank you for contacting us! We will get back to you soon.
              <div className="h-3 w-3 animate-spin rounded-full border-2 border-solid border-white border-t-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
