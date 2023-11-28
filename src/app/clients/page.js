'use client';

export default function ClientsPage() {
  const list = [1, 2, 3];
  return (
    <div className="overflow-hidden w-screen h-screen px-56 py-36">
      <div className="flex flex-col justify-start items-center h-full w-full">
        <div className="mb-10 text-3xl text-life-green self-start">
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
