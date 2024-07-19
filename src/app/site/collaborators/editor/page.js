'use client';
import { useRouter } from 'next/navigation';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useEffect, useState } from 'react';
import NewUserDialog from '@/components/newUserDialog';
import UserDialog from '@/components/UserDialog';
import BadAlert from '@/components/BadAlert';
export default function Page() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [id, setId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState(null);
  const [newUser, setNewUser] = useState(false);
  const [userId, setUserId] = useState(null);
  const [open, setOpen] = useState(false);
  const [masterPassword, setMasterPassword] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const user = await fetch('/api/getEditor', {
        method: 'POST',
        body: JSON.stringify({
          username: formData.get('username'),
          password: formData.get('password'),
        }),
      });
      const userResponse = await user.json();
      if (userResponse.valid) {
        setError('');
        sessionStorage.setItem('managerID', userResponse.managerFoundId);
        setMasterPassword(formData.get('password'));
        setId(userResponse.managerFoundId);
        setSuccess(true);
      } else {
        setOpenBadAlert(true);
        setError('Error');
      }
    } catch (error) {
      setOpenBadAlert(true);
      setError('Error');
    }
  };
  useEffect(() => {
    const retrievedValue = sessionStorage.getItem('managerID');
    if (retrievedValue) {
      setSuccess(true);
      setId(retrievedValue);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const users = await fetch('/api/getUsers', {
        method: 'POST',
        body: JSON.stringify({
          _id: id,
        }),
      });
      const usersResponse = await users.json();
      if (usersResponse.valid && users.status == 201) {
        setUsers(usersResponse.users);
      }
    }

    if (success && id) {
      fetchData();
    }
  }, [success, id]);
  const [openBadAlert, setOpenBadAlert] = useState(false);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {success ? (
        <div className="overflow-y-scroll h-full flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
          <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
            <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
              <span className="mr-3 font-semibold text-dark">Usuarios</span>
            </h3>
            <div className="relative flex flex-wrap items-center my-2">
              <AddCircleOutlineOutlinedIcon
                className="cursor-pointer"
                onClick={() => setNewUser(true)}
              />
            </div>
          </div>
          {users && (
            <div className="flex-auto block py-8 pt-6 px-9">
              <div className="overflow-x-auto">
                <table className="w-full my-0 align-middle text-dark border-neutral-200">
                  <thead className="align-bottom">
                    <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                      <th className="pb-3 text-start min-w-[175px]">EMAIL</th>
                      <th className="pb-3 text-end min-w-[50px]">OPCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, id) => {
                      return (
                        <tr
                          key={id}
                          className="border-b border-dashed last:border-b-0"
                        >
                          <td className="p-3 pl-0">
                            <div className="flex items-center">
                              <div className="flex flex-col justify-start">
                                <div className="mb-1 font-semibold ">
                                  {user.email}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="p-3 pr-0 text-end">
                            <EditOutlinedIcon
                              className="cursor-pointer hover:text-life-green text-3xl"
                              onClick={() => {
                                setUserId(user._id);
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
          )}
          <UserDialog
            open={open}
            setOpen={setOpen}
            managerId={id}
            managerPassword={masterPassword}
            id={userId}
          />
          <NewUserDialog open={newUser} setOpen={setNewUser} id={id} />
        </div>
      ) : (
        <>
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
                name="username"
                type="text"
                placeholder="Usuario"
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
        </>
      )}
    </div>
  );
}
