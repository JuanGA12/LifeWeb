'use client';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ProjectDialog from './ProjectDialog';
import { useEffect, useState } from 'react';
import NewProjectDialog from './NewProjectDialog';
import { useRouter } from 'next/navigation';
const ProjectsTables = () => {
  const [open, setOpen] = useState(false);
  const [newProject, setNewProject] = useState(false);
  const [projectId, setProjectId] = useState(null);
  const [list, setList] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const listPro = await fetch('/api/getProjectsCarrousel', {
        method: 'GET',
      });
      if (listPro.status == 201) {
        const listProJson = await listPro.json();
        setList(listProJson);
      } else {
        router.push('/error');
      }
    }
    fetchData();
  }, []);

  return (
    <div className="overflow-y-scroll h-full flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
      <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
        <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
          <span className="mr-3 font-semibold text-dark">Projectos</span>
        </h3>
        <div className="relative flex flex-wrap items-center my-2">
          <AddCircleOutlineOutlinedIcon
            className="cursor-pointer"
            onClick={() => setNewProject(true)}
          />
        </div>
      </div>
      <div className="flex-auto block py-8 pt-6 px-9">
        <div className="overflow-x-auto">
          <table className="w-full my-0 align-middle text-dark border-neutral-200">
            <thead className="align-bottom">
              <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                <th className="pb-3 text-start min-w-[175px]">NOMBRE</th>
                <th className="pb-3 text-end min-w-[50px]">OPCIONES</th>
              </tr>
            </thead>
            <tbody>
              {list &&
                list.map((project, id) => {
                  return (
                    <tr
                      key={id}
                      className="border-b border-dashed last:border-b-0"
                    >
                      <td className="p-3 pl-0">
                        <div className="flex items-center">
                          <div className="relative inline-block shrink-0 rounded-2xl me-3">
                            <img
                              src={project.portada}
                              className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                              alt=""
                            />
                          </div>
                          <div className="flex flex-col justify-start">
                            <div className="mb-1 font-semibold ">
                              {project.titulo.toLocaleUpperCase()}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="p-3 pr-0 text-end">
                        <EditOutlinedIcon
                          className="cursor-pointer hover:text-life-green text-3xl"
                          onClick={() => {
                            setProjectId(project.titulo);
                            setOpen(true);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <ProjectDialog open={open} setOpen={setOpen} titulo={projectId} />
      <NewProjectDialog open={newProject} setOpen={setNewProject} />
    </div>
  );
};
export default ProjectsTables;
