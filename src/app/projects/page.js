'use client';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ProjectsPage() {
  const list = ['Amaz', 'Caserta', 'Goretti', 'Amaz', 'Caserta', 'Goretti'];
  return (
    <div className="overflow-hidden w-screen h-screen px-10 py-36">
      <div className="flex justify-center items-center h-full w-full">
        <Swiper
          // install Swiper modules
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={80}
          slidesPerView={1}
          navigation
          loop="true"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          // autoplay
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {list.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="flex justify-center flex-col items-center cursor-pointer">
                  <img
                    key={idx}
                    src={`/projects/${item}.jpg`}
                    // className="w-10/12 h-10/12"
                  />
                  <div className="mt-4 text-sm md:text-base lg:text-lg xl:text-xl">
                    {item}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
