import Footer from '@/components/Footer';

export default function StaffPage() {
  return (
    <div className="w-screen h-[100dvh] pt-20 px-10 md:px-24 md:pt-20 lg:px-32 lg:pt-24 xl:px-56 xl:pt-36">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg mb-5 md:mb-7 xl:mb-10 md:text-xl lg:text-2xl xl:text-3xl text-life-green self-start">
            STAFF
          </div>
          <div className="text-sm md:text-base lg:text-lg xl:text-xl text-justify grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center md:block">
              <img
                src={'/staff/director.jpg'}
                className="h-56 md:h-64 lg:h-80 xl:h-96"
              />
              <div className="ml-4 md:ml-0 mt-3">
                <div className="text-sm md:text-base lg:text-lg xl:text-xl">
                  Arch. Javier Mautino
                </div>
                <div>Creative director</div>
              </div>
            </div>
            <div className="">
              <img
                src={'/staff/equipo.jpg'}
                className="md:h-64 lg:h-80 xl:h-96"
              />
              <div className="mt-3">
                <div>Arch. Renato Ferrando</div>
                <div>Arch. Ana Paula Gálvez</div>
                <div>Eng. Alicia Artica</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
