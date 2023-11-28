export default function Page({ params }) {
  return (
    <div className="w-screen h-screen px-56 py-36">
      <div className="flex flex-col justify-start items-center h-full w-full">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col justify-start items-start">
              <div className="mb-5 text-4xl text-life-green">CASERTA</div>
              <div className="italic"> +Nomena</div>
              <div className="w-full border-t border-life-green mt-10" />
              <div className="mb-3">Multi-family building</div>
              <div className="mb-3">2,190 m&sup2;</div>
              <div className="mb-3">Miraflores, Lima</div>
              <div className="mb-3">2023</div>
              <div>Client: Reyna Grupo Inmobilario</div>
            </div>
          </div>
          <div className="col-start-2 col-span-3">
            <div className="flex justify-center items-center flex-wrap">
              Somos Life Arquitectos, una empresa naciente en servicios de
              arquitectura, diseño y trámites municipales. Orientado a toda
              empresa que desee profesionales confiables para obtener su diseño,
              licencias y ejecución de proyecto ya sea vivienda, oficina, retail
              o salud.
              <br /> <br /> Life arquitectos, significa dar vitalidad a los
              proyectos y como parte de la vida desarrollarlos de la manera más
              profesional para generar flujos confiables y saludables entre
              cliente y empresa.
              <br /> <br />
              Somos profesionales confiables con capacidades de adaptabilidad
              muy desarrolladas, comprometido con llegar a los objetivos.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
