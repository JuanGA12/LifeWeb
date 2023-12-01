'use client';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ProjectsTables from '@/components/ProjectsTables';
import { signOut, useSession } from 'next-auth/react';
export default function ManagerPage() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <div className="flex h-screen w-screen overflow-hidden flex-col items-center justify-center">
      <div className="grid grid-cols-2 w-full gap-5">
        <div className="px-10 flex flex-col justify-center">
          <ProjectsTables />
        </div>
        <div className="px-10 flex flex-col justify-center">2</div>
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
