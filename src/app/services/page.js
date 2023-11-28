export default function ServicesPage() {
  return (
    <div className="overflow-hidden w-screen h-screen px-56 py-36">
      <div className="flex flex-col justify-start items-center h-full w-full">
        <div className="mb-10 text-3xl text-life-green self-start">
          SERVICES
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div>We have different services which include:</div>
            <ul className="list-disc mt-4">
              <li>Architectural spaces.</li>
              <li>
                Architectural design:
                <ul className="list-decimal ml-5">
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
          <div>
            <div>
              Contamos con distintos servicios los cuales comprenden en:
            </div>
            <ul className="list-disc  mt-4">
              <li>Cabidas arquitectónicas.</li>
              <li>
                Diseño arquitectónico:
                <ul className="list-decimal ml-5">
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
    </div>
  );
}
