'use client';
import { A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [curr, setCurr] = useState(0);
  const list = [1, 2, 3, 4, 5, 6, 7];
  const next = () =>
    setCurr((curr) => (curr === list.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, 3000);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <main className="w-screen h-[100dvh] overflow-hidden">
      <div className="z-0 w-screen h-[100dvh] bg-opacity absolute  overflow-hidden"></div>
      <div className="-z-10 w-screen h-[100dvh] overflow-hidden relative">
        {/* <div
          className="flex w-full h-full transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {list.map((item, idx) => (
            <img
              key={idx}
              className="w-full h-full"
              src={`/portada/horizontal/${item}.jpg`}
            />
          ))}
        </div> */}
        <div className="hidden md:block w-full h-full">
          <Swiper
            modules={[A11y, Autoplay]}
            className="x"
            spaceBetween={80}
            slidesPerView={1}
            loop="true"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {list.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img
                    key={idx}
                    className="w-full h-full"
                    src={`/portada/horizontal/${item}.jpg`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="md:hidden w-full h-full">
          <Swiper
            modules={[A11y, Autoplay]}
            className="sliderPortada"
            spaceBetween={80}
            slidesPerView={1}
            loop="true"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {list.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img
                    key={idx}
                    className="w-full h-full"
                    src={`/portada/vertical/${item}.jpg`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </main>
  );
}
