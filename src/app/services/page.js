import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <div className="w-screen h-[100dvh] pt-20 px-10 md:px-24 md:pt-20 lg:px-28 lg:pt-24 xl:px-56 xl:pt-32">
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg mb-5 md:mb-7 md:text-xl lg:text-xl xl:text-2xl dark:text-life-green self-start">
            SERVICES
          </div>
          <div className="text-sm md:text-base text-justify grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
            <div>
              <div>We have different services which include:</div>
              <ul className="list-disc ml-3 md:ml-4 mt-4">
                <li>Architectural spaces.</li>
                <li>
                  Architectural design:
                  <ul className="list-decimal ml-7">
                    <li>Living place</li>
                    <li>Offices</li>
                    <li>Health</li>
                    <li>Retail</li>
                  </ul>
                </li>
                <li>Remodeling and implementations.</li>
                <li>BIM development.</li>
                <li>Construction plans.</li>
                <li>Construction management.</li>
                <li>Development of the master plan.</li>
              </ul>
            </div>
            <div className="italic mt-4 md:mt-0">
              <div>
                Contamos con distintos servicios los cuales comprenden en:
              </div>
              <ul className="list-disc ml-3 md:ml-4 mt-4">
                <li>Cabidas arquitectónicas.</li>
                <li>
                  Diseño arquitectónico:
                  <ul className="list-decimal ml-7">
                    <li>Vivienda</li>
                    <li>Oficinas</li>
                    <li>Salud</li>
                    <li>Retail</li>
                  </ul>
                </li>
                <li>Remodelaciones e implementaciones.</li>
                <li>Desarrollo BIM.</li>
                <li>Planos de construcción.</li>
                <li>Gestión de construcción.</li>
                <li>Desarrollo del plan maestro.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
