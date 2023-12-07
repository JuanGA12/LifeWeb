import Footer from '@/components/Footer';

export default function StaffPage() {
  return (
    <div className="w-screen h-[100dvh] pt-20 px-10 md:px-24 md:pt-20 lg:px-28 lg:pt-24 xl:px-56 xl:pt-32">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg mb-5 md:mb-7 md:text-xl lg:text-xl xl:text-2xl dark:text-life-green self-start">
            STAFF
          </div>
          <div className="text-sm md:text-base text-justify grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            <div className="flex items-end md:block">
              <img
                src={'/staff/director.jpg'}
                className="h-56 md:h-60 lg:h-64 xl:h-72"
              />
              <div className="ml-4 md:ml-0 mt-3">
                <div className="">Arch. Javier Mautino</div>
                <div>Creative director</div>
              </div>
            </div>
            <div className="">
              <img
                src={'/staff/equipo.jpg'}
                className="md:h-60 lg:h-64 xl:h-72"
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
