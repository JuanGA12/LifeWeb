const BlogsTables = () => {
  return (
    <div class="flex flex-wrap -mx-3 mb-5">
      <div class="w-full max-w-full px-3 mb-6  mx-auto">
        <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
          <div class="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
            <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
              <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                <span class="mr-3 font-semibold text-dark">Proyectos</span>
              </h3>
            </div>
            <div class="flex-auto block py-8 pt-6 px-9">
              <div class="overflow-x-auto">
                <table class="w-full my-0 align-middle text-dark border-neutral-200">
                  <thead class="align-bottom">
                    <tr class="font-semibold text-[0.95rem] text-secondary-dark">
                      <th class="pb-3 text-start min-w-[175px]">TASK</th>
                      <th class="pb-3 text-end min-w-[100px]">OWNER</th>

                      <th class="pb-3 pr-12 text-end min-w-[175px]">STATUS</th>

                      <th class="pb-3 text-end min-w-[50px]">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-dashed last:border-b-0">
                      <td class="p-3 pl-0">
                        <div class="flex items-center">
                          <div class="relative inline-block shrink-0 rounded-2xl me-3">
                            <img
                              src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                              class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                              alt=""
                            />
                          </div>
                          <div class="flex flex-col justify-start">
                            <a
                              href="javascript:void(0)"
                              class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                            >
                              {' '}
                              Social Media API{' '}
                            </a>
                          </div>
                        </div>
                      </td>
                      <td class="p-3 pr-0 text-end">
                        <span class="font-semibold text-light-inverse text-md/normal">
                          Olivia Cambell
                        </span>
                      </td>

                      <td class="p-3 pr-12 text-end">
                        <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                          {' '}
                          In Progress{' '}
                        </span>
                      </td>

                      <td class="p-3 pr-0 text-end">
                        <button class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                          <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed last:border-b-0">
                      <td class="p-3 pl-0">
                        <div class="flex items-center">
                          <div class="relative inline-block shrink-0 rounded-2xl me-3">
                            <img
                              src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-40-new.jpg"
                              class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                              alt=""
                            />
                          </div>
                          <div class="flex flex-col justify-start">
                            <a
                              href="javascript:void(0)"
                              class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                            >
                              {' '}
                              Geolocation App{' '}
                            </a>
                          </div>
                        </div>
                      </td>
                      <td class="p-3 pr-0 text-end">
                        <span class="font-semibold text-light-inverse text-md/normal">
                          Luca Micloe
                        </span>
                      </td>

                      <td class="p-3 pr-12 text-end">
                        <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-light-inverse bg-light rounded-lg">
                          {' '}
                          Under Review{' '}
                        </span>
                      </td>

                      <td class="p-3 pr-0 text-end">
                        <button class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                          <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed last:border-b-0">
                      <td class="p-3 pl-0">
                        <div class="flex items-center">
                          <div class="relative inline-block shrink-0 rounded-2xl me-3">
                            <img
                              src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-39-new.jpg"
                              class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                              alt=""
                            />
                          </div>
                          <div class="flex flex-col justify-start">
                            <a
                              href="javascript:void(0)"
                              class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                            >
                              {' '}
                              iOS Login <span class="text-sm">(Morra)</span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td class="p-3 pr-0 text-end">
                        <span class="font-semibold text-light-inverse text-md/normal">
                          Bianca Winson
                        </span>
                      </td>

                      <td class="p-3 pr-12 text-end">
                        <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                          {' '}
                          In Progress{' '}
                        </span>
                      </td>

                      <td class="p-3 pr-0 text-end">
                        <button class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                          <span class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsTables;
