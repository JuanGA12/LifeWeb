'use client';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useState } from 'react';
import BlogDialog from './BlogDialog';

const SectionsTables = () => {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);

  return (
    <div className="overflow-y-scroll h-full flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
      <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
        <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
          <span className="mr-3 font-semibold text-dark">Secciones</span>
        </h3>
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
              <tr className="border-b border-dashed last:border-b-0">
                <td className="p-3 pl-0">
                  <div className="flex items-center">
                    <div className="flex flex-col justify-start">
                      <div className="mb-1 font-semibold ">Blog</div>
                    </div>
                  </div>
                </td>

                <td className="p-3 pr-0 text-end">
                  <div>
                    <EditOutlinedIcon
                      className="cursor-pointer hover:text-life-green text-3xl mr-2"
                      onClick={() => {
                        setOpenBlogDialog(true);
                      }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <BlogDialog open={openBlogDialog} setOpen={setOpenBlogDialog} />
    </div>
  );
};
export default SectionsTables;
