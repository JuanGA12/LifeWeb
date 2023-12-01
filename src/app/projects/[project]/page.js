'use client';
import ImageDialog from '@/components/ImageDialog';
import { useState } from 'react';
export default function Page() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div
      className={`dvhTOvh w-screen h-[100dvh] pt-20 px-10 md:px-24 md:pt-20 lg:px-32 lg:pt-24 xl:px-56 xl:pt-36 ${
        open ? 'overflow-hidden' : ''
      }`}
    >
      <div className="flex flex-col justify-start items-center h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 overflow-hidden hiddenTOscroll">
          <div>
            <div className="flex flex-col justify-start items-start">
              <div className="text-lg mb-5 md:mb-7 xl:mb-10 md:text-xl lg:text-2xl xl:text-3xl text-life-green self-start">
                CASERTA
              </div>
              <div className="italic text-sm md:text-base lg:text-lg xl:text-xl">
                +Nomena
              </div>
              <div className="w-full border-t border-life-green mt-10" />
              <div className="mb-3 text-sm md:text-base lg:text-lg xl:text-xl">
                Multi-family building
              </div>
              <div className="mb-3 text-sm md:text-base lg:text-lg xl:text-xl">
                2,190 m&sup2;
              </div>
              <div className="mb-3 text-sm md:text-base lg:text-lg xl:text-xl">
                Miraflores, Lima
              </div>
              <div className="mb-3 text-sm md:text-base lg:text-lg xl:text-xl">
                2023
              </div>
              <div>Client: Reyna Grupo Inmobilario</div>
            </div>
          </div>
          <div className="lg:col-start-2 lg:col-span-3 overflow-scroll scrollTOvisible">
            <div className="flex justify-center flex-wrap items-center">
              {list.map((item, id) => {
                return (
                  <div
                    key={id}
                    className="m-2 md:m-5 w-full md:w-2/5 cursor-pointer"
                    onClick={() => {
                      setImage(`/project1/${item}.png`);
                      setOpen(true);
                    }}
                  >
                    <img src={`/project1/${item}.png`} className="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ImageDialog open={open} setOpen={setOpen} image={image} />
    </div>
  );
}
