'use client';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ProjectsTables from '@/components/ProjectsTables';
import { signOut, useSession } from 'next-auth/react';
import SectionsTables from '@/components/SectionsTables';

export default function ManagerPage() {
  const { data: session, status } = useSession();

  return (
    <div className="flex h-screen w-screen overflow-hidden flex-col items-center justify-center">
      <div className="grid grid-cols-2 h-full w-full flex flex-col justify-center items-center gap-5">
        <div className="px-10 flex flex-col h-[80%] justify-center">
          <ProjectsTables />
        </div>
        <div className="px-10 flex flex-col h-[80%] justify-center">
          <SectionsTables />
        </div>
      </div>
      <div className="absolute top-4 right-5 flex">
        <div className="mr-2">Cerrar Sesión</div>
        <LogoutOutlinedIcon
          className="cursor-pointer"
          onClick={() => signOut()}
        />
      </div>
    </div>
  );
}
