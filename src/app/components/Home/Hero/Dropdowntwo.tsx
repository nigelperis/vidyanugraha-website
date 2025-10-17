'use client';

import { Fragment, useEffect, useState } from 'react';
import { Hourtype } from '@/app/types/hour';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import { Icon } from '@iconify/react/dist/iconify.js';

type HourResponse = {
  HourData: Hourtype[];
};

const isHourResponse = (value: unknown): value is HourResponse => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'HourData' in value &&
    Array.isArray((value as { HourData: unknown }).HourData)
  );
};

const Dropdown = () => {
  const [hour, setHour] = useState<Hourtype[]>([]);
  const [selected, setSelected] = useState<Hourtype | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data: unknown = await res.json();
        if (isHourResponse(data)) {
          setHour(data.HourData);
          setSelected(data.HourData[0] ?? null);
        } else {
          console.error('Unexpected hour response', data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <p className="text-lg text-gray-500">Hours you going to invest?</p>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <ListboxButton className="focus-visible:ring-opacity-75 relative w-full cursor-default bg-white py-2 pr-10 text-left text-xl hover:cursor-pointer focus:outline-hidden focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-xl font-semibold">
              {selected?.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <Icon
                icon="tabler:chevron-down"
                className="me-2 inline-block text-xl text-gray-400"
              />
            </span>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="ring-opacity-5 absolute mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black focus:outline-hidden sm:text-sm">
              {hour.map((person, personIdx) => (
                <ListboxOption
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default py-2 pr-4 pl-10 select-none ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <Icon
                            icon="tabler:check"
                            className="me-2 inline-block text-xl"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Dropdown;
