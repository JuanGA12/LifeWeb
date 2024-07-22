import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { forwardRef, useEffect, useState } from 'react';
import Loader from './Loader';
('@mui/material');
import BadAlert from './BadAlert';
import SuccessAlert from './SuccessAlert';
import { useRouter } from 'next/navigation';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserDialog({
  open,
  setOpen,
  id,
  managerId,
  managerPassword,
}) {
  const router = useRouter();
  const handleClose = () => {
    setOpen(false);
  };
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openBadAlert, setOpenBadAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(null);
  const [masterPassword, setMasterPassword] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      setLoader(true);
      const responseUser = await fetch('/api/editUser', {
        method: 'POST',
        body: JSON.stringify({
          newPassword: formData.get('newPassword'),
          UserId: id,
          _id: managerId,
          managerPassword: formData.get('passwordManager'),
        }),
      });
      const responseUserJson = await responseUser.json();
      if (responseUser.status == 201 && responseUserJson.edited) {
        setSuccessMessage('¡Se editó el usuario correctamente!');
        setOpenSuccessAlert(true);
        window.location.reload();
      } else {
        setErrorMessage('¡Hubo un error al editar el usuario!');
        setOpenBadAlert(true);
      }
      setLoader(false);
    } catch (error) {
      console.log(error);
      setErrorMessage('¡Hubo un error al editar el usuario!');
      setOpenBadAlert(true);
      setLoader(false);
    }
  };
  const deleteUser = async () => {
    try {
      setLoader(true);
      const responseUser = await fetch('/api/deleteUser', {
        method: 'POST',
        body: JSON.stringify({
          UserId: id,
          _id: managerId,
          managerPassword: masterPassword,
        }),
      });
      const responseUserJson = await responseUser.json();
      if (responseUser.status == 201 && responseUserJson.deleted) {
        setSuccessMessage('¡Se eliminó el usuario correctamente!');
        setOpenSuccessAlert(true);
        window.location.reload();
      } else {
        setErrorMessage('¡Hubo un error al eliminar el usuario!');
        setOpenBadAlert(true);
      }
      setLoader(false);
    } catch (error) {
      // console.log(error);
      setErrorMessage(error);
      setOpenBadAlert(true);
      setLoader(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const UserFound = await fetch('/api/getUser', {
        method: 'POST',
        body: JSON.stringify({ _id: managerId, userId: id }),
      });
      if (UserFound.status == 201) {
        const UserFoundJson = await UserFound.json();
        setUser(UserFoundJson.user);
      } else {
        router.push('/error');
      }
    }
    if (id) {
      fetchData();
    }
  }, [id]);
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {loader && (
          <div className="h-screen w-screen absolute top-0 flex flex-col justify-center items-center bg-white z-50">
            <Loader />
            Uploading...
          </div>
        )}

        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Editar Usuario
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <div className="w-screen p-10">
            {user && (
              <form
                className="flex flex-col justify-center items-center"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="grid grid-cols-1 w-80">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      disabled
                      value={user.email}
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 mt-5 text-sm text-gray-600"
                    >
                      Nueva contraseña
                    </label>
                    <input
                      type="text"
                      id="newPassword"
                      name="newPassword"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="passwordManager"
                      className="block mb-2 mt-5 text-sm text-gray-600"
                    >
                      Vuelve a ingresar la Contraseña Maestra
                    </label>
                    <input
                      onChange={(e) => {
                        setMasterPassword(e.target.value);
                      }}
                      type="text"
                      id="passwordManager"
                      name="passwordManager"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                      required
                    />
                  </div>
                </div>
                <div className="flex mt-6">
                  <button
                    // onClick={handleClose}
                    type="submit"
                    className=" mr-3 w-32 bg-[#131e2f] text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 mb-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => {
                      deleteUser();
                    }}
                    type="button"
                    className=" w-32 bg-[#131e2f] text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 mb-2"
                  >
                    Borrar
                  </button>
                </div>
                <div className="mt-3 flex w-[30%] justify-center flex-col items-center self-center">
                  <SuccessAlert
                    open={openSuccessAlert}
                    setOpen={setOpenSuccessAlert}
                    message={successMessage}
                  />
                  <BadAlert
                    open={openBadAlert}
                    setOpen={setOpenBadAlert}
                    message={errorMessage}
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
}
