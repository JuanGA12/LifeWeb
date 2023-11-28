export default function AboutPage() {
  return (
    <div className="md:overflow-hidden w-screen h-screen px-10 py-20 md:px-24 md:py-20 lg:px-32 lg:py-24 xl:px-56 xl:py-36">
      <div className="flex flex-col justify-start items-center h-full w-full">
        <div className="text-lg mb-5 md:mb-10 md:text-xl lg:text-2xl xl:text-3xl text-life-green self-start">
          ABOUT US
        </div>

        <div className="text-sm text-justify grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            We are Life Architects, an architecture studio specialized in
            architecture, design and municipal procedures services. Aimed at any
            company that wants reliable professionals to obtain its design,
            licenses and execution of a project, whether housing, office, retail
            or health. <br /> <br />
            Life architects means giving vitality to projects and as part of the
            life develop them in the most professional way to generate flows
            reliable and healthy between client and company. <br />
            <br />
            We are reliable professionals with very adaptable capabilities.
            Developed, committed to reaching the objectives.
          </div>
          <div>
            Somos Life Arquitectos, una empresa naciente en servicios de
            arquitectura, diseño y trámites municipales. Orientado a toda
            empresa que desee profesionales confiables para obtener su diseño,
            licencias y ejecución de proyecto ya sea vivienda, oficina, retail o
            salud.
            <br /> <br /> Life arquitectos, significa dar vitalidad a los
            proyectos y como parte de la vida desarrollarlos de la manera más
            profesional para generar flujos confiables y saludables entre
            cliente y empresa.
            <br /> <br />
            Somos profesionales confiables con capacidades de adaptabilidad muy
            desarrolladas, comprometido con llegar a los objetivos.
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 md:gap-8">
          <div className="flex items-end flex-col mr-2 md:mr-8">
            <div className="flex flex-col justify-center items-center">
              <div className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-life-green mb-4">
                + 05
              </div>
              <div className="text-xl md:text-3xl lg:text-4xl xl:text-3xl">
                Proyectos
              </div>
              <div className="text-xl md:text-3xl lg:text-4xl xl:text-3xl">
                desarrollados
              </div>
            </div>
          </div>
          <div className="flex items-start flex-col ml-2 md:ml-8">
            <div className="flex flex-col justify-center items-center">
              <div className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-life-green mb-4">
                + 18, 000 m&sup2;
              </div>
              <div className="text-xl md:text-3xl lg:text-4xl xl:text-3xl">
                Proyectos
              </div>
              <div className="text-xl md:text-3xl lg:text-4xl xl:text-3xl">
                desarrollados
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
