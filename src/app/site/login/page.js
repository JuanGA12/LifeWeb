'use client';
import BadAlert from '@/components/BadAlert';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status == 'authenticated') router.push('/site/manager');
  }, [status]);

  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });
    if (res.error) {
      setError(res.error);
      setOpenBadAlert(true);
    }

    if (res.ok) return router.push('/site/manager/');
  };
  const [openBadAlert, setOpenBadAlert] = useState(false);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="py-12 px-12 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-[#131e2f] dark:bg-white rounded-2xl shadow-xl z-20"
      >
        <div>
          <h1 className="text-3xl font-bold text-center mb-10 text-white dark:text-[#131e2f]">
            ¡Bienvenido!
          </h1>
        </div>
        <div className="space-y-4">
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="text-white dark:text-[#131e2f] bg-[#131e2f] dark:bg-white block text-sm py-3 px-4 rounded-lg w-full border outline-life-green"
          />
          <input
            name="password"
            type="text"
            placeholder="Contraseña"
            className="text-white dark:text-[#131e2f] bg-[#131e2f] dark:bg-white block text-sm py-3 px-4 rounded-lg w-full border outline-life-green"
          />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="text-white dark:text-[#131e2f] w-full py-2 text-xl  bg-life-green/[.3] rounded-lg hover:bg-life-green transition-all"
          >
            Ingresar
          </button>
        </div>
      </form>
      <div className="mt-3 flex w-[30%] justify-center flex-col items-center self-center">
        <BadAlert
          open={openBadAlert}
          setOpen={setOpenBadAlert}
          message={error}
        />
      </div>
    </div>
  );
}
