import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';

import small_straight_line from '/public/images/svgs/smal_straight_line.svg';
import straight_line from '/public/images/svgs/straight_group.svg';
import t_half_line from '/public/images/svgs/T-half_line.svg';
import tline from '/public/images/svgs/T-Line.svg';

export const PackageStructure = () => {
  const Counts = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  return (
    <div id="structure" className="scroll-m-28 md:scroll-m-[130px]">
      <h3 className="mt-8 text-2xl font-semibold text-black">
        Pacakge Structure
      </h3>
      <div className="border-dark_border border-opacity-60 mt-6 rounded-md border p-6 pt-3">
        <div className="flex items-center gap-4">
          <h5 className="text-muted mt-3 mb-1 text-base font-medium">
            SiEducational Tailwind NextJs Template
          </h5>
        </div>
        <ul className="list-unstyled ps-0 md:ps-5">
          <li className="py-2">
            <div className="flex items-center gap-3">
              <p className="text-xl text-black">|—</p>
              <span className="text-muted font-medium">
                <Icon
                  icon="tabler:folder"
                  className="text-primary me-2 inline-block text-base"
                />
                packages
              </span>
            </div>
            <div className="flex">
              <div className="mt-2 flex flex-col justify-between gap-2">
                {Counts.slice(0, 22).map((item) => {
                  return <p className="text-xl text-black">|</p>;
                })}
              </div>
              <ul className="list-unstyled ps-5 md:ps-5">
                <li className="py-0">
                  <ul className="ps-md-3 list-unstyled ps-2">
                    <li className="py-2">
                      <ul className="list-unstyled ps-0 md:ps-5">
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black">|—</p>
                            <span className="text-muted font-medium">
                              <Icon
                                icon="tabler:folder"
                                className="text-primary me-2 inline-block text-base"
                              />
                              markdown
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black">|—</p>
                            <span className="text-muted font-medium">
                              <Icon
                                icon="tabler:folder"
                                className="text-primary me-2 inline-block text-base"
                              />
                              public
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black">|—</p>
                            <span className="text-muted font-medium">
                              <Icon
                                icon="tabler:folder"
                                className="text-primary me-2 inline-block text-base"
                              />
                              src
                            </span>
                          </div>
                          <div className="flex">
                            <div className="mt-2 flex flex-col justify-between gap-2">
                              {Counts.slice(0, 22).map((item) => {
                                return <p className="text-xl text-black">|</p>;
                              })}
                            </div>
                            <ul className="list-unstyled ps-5 md:ps-12">
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-black">|—</p>
                                  <span className="text-muted font-medium">
                                    <Icon
                                      icon="tabler:folder"
                                      className="text-primary me-2 inline-block text-base"
                                    />
                                    app
                                  </span>
                                </div>
                                <div className="flex">
                                  <div className="mt-2 flex flex-col justify-between gap-2">
                                    {Counts.slice(0, 16).map((item) => {
                                      return (
                                        <p className="text-xl text-black">|</p>
                                      );
                                    })}
                                  </div>
                                  <ul className="list-unstyled red ps-5 md:ps-12">
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black">|—</p>
                                        <span className="text-muted font-medium">
                                          <Icon
                                            icon="tabler:folder"
                                            className="text-primary me-2 inline-block text-base"
                                          />
                                          (site)
                                        </span>{' '}
                                        <span className="fs-9 text-muted ms-4">
                                          (Contains all the pages)
                                        </span>
                                      </div>
                                      <div className="flex">
                                        <div className="mt-2 flex flex-col justify-between gap-2">
                                          {Counts.slice(0, 5).map(
                                            (item, index) => {
                                              return (
                                                <p
                                                  key={index}
                                                  className="text-xl text-black"
                                                >
                                                  |
                                                </p>
                                              );
                                            },
                                          )}
                                        </div>

                                        <ul className="list-unstyled ps-5 md:ps-12">
                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-black">
                                                |—
                                              </p>
                                              <span className="text-muted font-medium">
                                                <Icon
                                                  icon="tabler:folder"
                                                  className="text-primary me-2 inline-block text-base"
                                                />
                                                (auth)
                                              </span>
                                            </div>
                                            <div className="flex">
                                              <div className="mt-2 flex flex-col justify-between gap-1">
                                                {Counts.slice(0, 2).map(
                                                  (item) => {
                                                    return (
                                                      <p className="text-xl text-black">
                                                        |
                                                      </p>
                                                    );
                                                  },
                                                )}
                                              </div>
                                              <ul className="list-unstyled ps-5 md:ps-12">
                                                <li className="py-2">
                                                  <div className="flex items-center gap-8">
                                                    <p className="text-xl text-black">
                                                      |
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                      <p className="text-xl text-black">
                                                        |—
                                                      </p>
                                                      <span className="text-muted font-medium">
                                                        <Icon
                                                          icon="tabler:folder"
                                                          className="text-primary me-2 inline-block text-base"
                                                        />
                                                        signin
                                                      </span>
                                                    </div>
                                                  </div>
                                                </li>
                                                <li className="py-2">
                                                  <div className="flex items-center gap-8">
                                                    <p className="text-xl text-black">
                                                      |
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                      <p className="text-xl text-black">
                                                        |—
                                                      </p>
                                                      <span className="text-muted font-medium">
                                                        <Icon
                                                          icon="tabler:folder"
                                                          className="text-primary me-2 inline-block text-base"
                                                        />
                                                        signup
                                                      </span>
                                                    </div>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </li>
                                          <li className="py-2">
                                            <div className="flex items-center gap-3">
                                              <p className="text-xl text-black">
                                                |—
                                              </p>
                                              <span className="text-muted font-medium">
                                                <Icon
                                                  icon="tabler:folder"
                                                  className="text-primary me-2 inline-block text-base"
                                                />
                                                documentation
                                              </span>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black">|—</p>
                                        <span className="text-muted font-medium">
                                          <Icon
                                            icon="tabler:folder"
                                            className="text-primary me-2 inline-block text-base"
                                          />
                                          api
                                        </span>
                                      </div>
                                      <div className="flex">
                                        <div className="mt-2 flex flex-col justify-between gap-2">
                                          {Counts.slice(0, 2).map((item) => {
                                            return (
                                              <p className="text-xl text-black">
                                                |
                                              </p>
                                            );
                                          })}
                                        </div>
                                        <ul className="list-unstyled ps-5 md:ps-12">
                                          <li className="py-2">
                                            <div className="flex items-center gap-8">
                                              <p className="text-xl text-black">
                                                |
                                              </p>
                                              <div className="flex items-center gap-3">
                                                <p className="text-xl text-black">
                                                  |—
                                                </p>
                                                <span className="text-muted font-medium">
                                                  <Icon
                                                    icon="tabler:folder"
                                                    className="text-primary me-2 inline-block text-base"
                                                  />
                                                  auth
                                                </span>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="py-2">
                                            <div className="flex items-center gap-8">
                                              <p className="text-xl text-black">
                                                |
                                              </p>
                                              <div className="flex items-center gap-3">
                                                <p className="text-xl text-black">
                                                  |—
                                                </p>
                                                <span className="text-muted font-medium">
                                                  <Icon
                                                    icon="tabler:folder"
                                                    className="text-primary me-2 inline-block text-base"
                                                  />
                                                  contex
                                                </span>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black">|—</p>
                                        <span className="text-muted font-medium">
                                          <Icon
                                            icon="tabler:folder"
                                            className="text-primary me-2 inline-block text-base"
                                          />
                                          Context
                                        </span>
                                      </div>
                                      <div className="flex">
                                        <div className="mt-2 flex flex-col justify-between gap-2">
                                          {Counts.slice(0, 1).map((item) => {
                                            return (
                                              <p className="text-xl text-black">
                                                |
                                              </p>
                                            );
                                          })}
                                        </div>
                                        <ul className="list-unstyled ps-5 md:ps-12">
                                          <li className="py-2">
                                            <div className="flex items-center gap-8">
                                              <p className="text-xl text-black">
                                                |
                                              </p>
                                              <div className="flex items-center gap-3">
                                                <p className="text-xl text-black">
                                                  |—
                                                </p>
                                                <span className="text-muted flex flex-wrap items-center font-medium">
                                                  <Icon
                                                    icon="tabler:folder"
                                                    className="text-primary me-2 inline-block text-base"
                                                  />
                                                  <p className="max-w-12 truncate lg:max-w-full">
                                                    authDialogContext.tsx
                                                  </p>
                                                </span>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black">|—</p>
                                        <span className="text-muted font-medium">
                                          global.css
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black">|—</p>
                                        <span className="text-muted font-medium">
                                          layout.tsx
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black">|—</p>
                                        <span className="text-muted font-medium">
                                          not-found.tsx
                                        </span>
                                      </div>
                                    </li>
                                    <li className="py-2">
                                      <div className="flex items-center gap-3">
                                        <p className="text-xl text-black">|—</p>
                                        <span className="text-muted font-medium">
                                          page.tsx
                                        </span>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="py-2">
                                <div className="flex flex-wrap items-center gap-3">
                                  <p className="text-xl text-black">|—</p>
                                  <span className="text-muted font-medium">
                                    <Icon
                                      icon="tabler:folder"
                                      className="text-primary me-2 inline-block text-base"
                                    />
                                    components
                                  </span>{' '}
                                  <span className="fs-9 text-muted ms-4">
                                    (All the Components of this template.)
                                  </span>
                                </div>
                              </li>
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-black">|—</p>
                                  <span className="text-muted font-medium">
                                    <Icon
                                      icon="tabler:folder"
                                      className="text-primary me-2 inline-block text-base"
                                    />
                                    styles
                                  </span>
                                </div>
                              </li>
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-black">|—</p>
                                  <span className="text-muted font-medium">
                                    <Icon
                                      icon="tabler:folder"
                                      className="text-primary me-2 inline-block text-base"
                                    />
                                    types
                                  </span>
                                </div>
                              </li>
                              <li className="py-2">
                                <div className="flex items-center gap-3">
                                  <p className="text-xl text-black">|—</p>
                                  <span className="text-muted font-medium">
                                    <Icon
                                      icon="tabler:folder"
                                      className="text-primary me-2 inline-block text-base"
                                    />
                                    utils
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black">|—</p>
                            <span className="text-muted font-medium">
                              <i className="ti ti-file text-primary me-2 font-bold" />
                              next.config.mjs
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black">|—</p>
                            <span className="text-muted font-medium">
                              <i className="ti ti-file text-primary me-2 font-bold" />
                              postcss.config.mjs
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black">|—</p>
                            <span className="text-muted font-medium">
                              <i className="ti ti-file text-primary me-2 font-bold" />
                              package.json
                            </span>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-3">
                            <p className="text-xl text-black">|—</p>
                            <span className="text-muted font-medium">
                              <i className="ti ti-file text-primary me-2 font-bold" />
                              tsconfig.json
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
