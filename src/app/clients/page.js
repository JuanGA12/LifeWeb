'use client';

export default function ClientsPage() {
  const list = [1, 2, 3];
  return (
    <div className="overflow-hidden px-10 py-20 md:px-24 md:py-20 lg:px-32 lg:py-24 xl:px-56 xl:py-36">
      <div className="flex flex-col justify-start items-center">
        <div className="text-lg mb-5 md:mb-7 xl:mb-10 md:text-xl lg:text-2xl xl:text-3xl text-life-green self-start">
          OUR CLIENTS
        </div>
        <div className="flex justify-center items-center flex-wrap w-full">
          {list.map((item, idx) => {
            return (
              <img
                key={idx}
                src={`/clients/${item}.jpg`}
                className="w-3/12 mx-10"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
