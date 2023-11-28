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
          slidesPerView={3}
          navigation
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
                    // className="w-10/12"
                  />
                  <div className="mt-4">{item}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
