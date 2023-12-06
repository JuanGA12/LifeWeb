'use client';

import Footer from '@/components/Footer';

export default function ClientsPage() {
  const list = [1, 2, 3];
  return (
    <div className="w-screen h-[100dvh] pt-20 px-10 md:px-24 md:pt-20 lg:px-32 lg:pt-24 xl:px-56 xl:pt-36">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center ">
          <div className="text-lg mb-5 md:mb-7 xl:mb-10 md:text-xl lg:text-2xl xl:text-3xl text-life-green self-start">
            OUR CLIENTS
          </div>
          <div className="  text-sm md:text-base lg:text-lg xl:text-xl text-justify grid grid-cols-1 md:grid-cols-3 gap-10 md:mt-20">
            {list.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="w-full h-full flex justify-center items-center"
                >
                  <img
                    src={`/clients/${item}.png`}
                    className="w-[90%] h-[90%] md:w-full md:h-full"
                  />
                </div>
              );
            })}
            <div></div>
            <div></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
