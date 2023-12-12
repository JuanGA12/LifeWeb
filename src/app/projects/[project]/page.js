'use client';
import Footer from '@/components/Footer';
import ImageDialog from '@/components/ImageDialog';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function Page() {
  const pathname = usePathname();
  const projectTitle = pathname.split('/')[2];
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const projectFound = await fetch('/api/getProjectByName', {
        method: 'POST',
        body: JSON.stringify({ titulo: projectTitle }),
      });
      if (projectFound.status == 201) {
        const projectFoundJson = await projectFound.json();
        setProject(projectFoundJson);
        console.log(projectFoundJson);
      } else {
        router.push('/error');
      }
    }
    fetchData();
  }, []);
  const [project, setProject] = useState(null);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');
  return (
    <>
      {project && (
        <div
          className={`dvhTOvh w-screen h-[100dvh] pt-20 px-10 md:px-24 md:pt-20 lg:px-28 lg:pt-24 xl:px-56 xl:pt-32 ${
            open ? 'overflow-hidden' : ''
          }`}
        >
          <div className="flex flex-col justify-start items-center h-full w-full">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 overflow-hidden hiddenTOscroll">
              <div>
                <div className="flex flex-col justify-start items-start">
                  <div className="text-lg md:text-xl lg:text-xl xl:text-2xl mb-5 md:mb-5 xl:mb-6 dark:text-life-green self-start">
                    {project.titulo.toLocaleUpperCase()}
                  </div>
                  {project.colaborador1 && (
                    <div className="italic text-sm md:text-base">
                      +{project.colaborador1}
                    </div>
                  )}
                  {project.colaborador2 && (
                    <div className="italic text-sm md:text-base">
                      +{project.colaborador2}
                    </div>
                  )}
                  {project.colaborador3 && (
                    <div className="italic text-sm md:text-base">
                      +{project.colaborador3}
                    </div>
                  )}
                  <div className="w-full border-t border-life-green mt-6" />
                  <div className="mb-3 text-sm md:text-base">
                    {project.tipologia}
                  </div>
                  <div className="mb-3 text-sm md:text-base">
                    {project.metraje} m&sup2;
                  </div>
                  <div className="mb-3 text-sm md:text-base">
                    {project.ubicacion}
                  </div>
                  <div className="mb-3 text-sm md:text-base">{project.año}</div>
                  <div>Client: {project.cliente}</div>
                </div>
              </div>
              <div className="lg:col-start-2 lg:col-span-3 overflow-scroll scrollTOvisible flex flex-col items-center">
                <div className="flex justify-center flex-wrap items-center">
                  {project.galeria.map((item, id) => {
                    return (
                      <div
                        key={id}
                        className="m-2 md:m-5 w-full md:w-2/5 cursor-pointer"
                        onClick={() => {
                          setImage(item);
                          setOpen(true);
                        }}
                      >
                        <img src={item} className="" />
                      </div>
                    );
                  })}
                </div>
                <div className="text-center">{project.resumen}</div>
              </div>
            </div>
            <Footer />
          </div>

          <ImageDialog open={open} setOpen={setOpen} image={image} />
        </div>
      )}
    </>
  );
}
