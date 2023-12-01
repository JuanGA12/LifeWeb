'use client';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ProjectDialog from './ProjectDialog';
import { useState } from 'react';
import NewProjectDialog from './NewProjectDialog';
const ProjectsTables = () => {
  const [open, setOpen] = useState(false);
  const [newProject, setNewProject] = useState(false);
  const [projectId, setProjectId] = useState('');

  const projects = [
    {
      nombre: 'Social Media Api',
      image:
        'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg',
      id: 1,
    },
    {
      nombre: 'Social Media Api2',
      image:
        'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg',
      id: 2,
    },
    {
      nombre: 'Social Media Api3',
      image:
        'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg',
      id: 3,
    },
    {
      nombre: 'Social Media Api2',
      image:
        'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg',
      id: 4,
    },
    {
      nombre: 'Social Media Api3',
      image:
        'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg',
      id: 5,
    },
    {
      nombre: 'Social Media Api2',
      image:
        'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg',
      id: 6,
    },
    {
      nombre: 'Social Media Api3',
      image:
        'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg',
      id: 7,
    },
    {
      nombre: 'Social Media Api2',
      image:
        'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg',
      id: 8,
    },
    {
      nombre: 'Social Media Api3',
      image:
        'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg',
      id: 9,
    },
    {
      nombre: 'Social Media Api2',
      image:
        'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg',
      id: 10,
    },
    {
      nombre: 'Social Media Api3',
      image:
        'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg',
      id: 11,
    },
  ];
  return (
    <div className="overflow-y-scroll max-h-[80%] flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
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
                <th className="pb-3 text-end min-w-[50px]">DETALLE</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, id) => {
                return (
                  <tr
                    key={id}
                    className="border-b border-dashed last:border-b-0"
                  >
                    <td className="p-3 pl-0">
                      <div className="flex items-center">
                        <div className="relative inline-block shrink-0 rounded-2xl me-3">
                          <img
                            src={project.image}
                            className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-start">
                          <div classNameName="mb-1 font-semibold ">
                            {project.nombre}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="p-3 pr-0 text-end">
                      <EditOutlinedIcon
                        className="cursor-pointer"
                        onClick={() => {
                          setProjectId(project.id);
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
      <ProjectDialog open={open} setOpen={setOpen} id={projectId} />
      <NewProjectDialog open={newProject} setOpen={setNewProject} />
    </div>
  );
};
export default ProjectsTables;
