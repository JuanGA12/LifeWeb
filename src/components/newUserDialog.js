import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { forwardRef, useState } from 'react';
import Loader from './Loader';
('@mui/material');
import BadAlert from './BadAlert';
import SuccessAlert from './SuccessAlert';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewUserDialog({ open, setOpen, id }) {
  const handleClose = () => {
    setOpen(false);
  };
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openBadAlert, setOpenBadAlert] = useState(false);

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      setLoader(true);
      const responseUser = await fetch('/api/createUser', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
          _id: id,
          managerPassword: formData.get('passwordManager'),
        }),
      });
      const responseUserJson = await responseUser.json();
      if (responseUser.status == 201 && responseUserJson.valid) {
        setOpenSuccessAlert(true);
      } else {
        setOpenBadAlert(true);
      }
      setLoader(false);
    } catch (error) {
      console.log(error);
      setOpenBadAlert(true);
      setLoader(false);
    }
  };

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
              Nuevo Usuario
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <div className="w-screen p-10">
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
                    Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="passwordManager"
                    className="block mb-2 mt-5 text-sm text-gray-600"
                  >
                    Enter your Manager Password again
                  </label>
                  <input
                    type="text"
                    id="passwordManager"
                    name="passwordManager"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                    required
                  />
                </div>
              </div>

              <button
                // onClick={handleClose}
                type="submit"
                className="mt-6 w-32 bg-[#131e2f] text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 mb-2"
              >
                Crear Usuario
              </button>
              <div className="mt-3 flex w-[30%] justify-center flex-col items-center self-center">
                <SuccessAlert
                  open={openSuccessAlert}
                  setOpen={setOpenSuccessAlert}
                  message="¡Se creó el usuario correctamente!"
                />
                <BadAlert
                  open={openBadAlert}
                  setOpen={setOpenBadAlert}
                  message="¡Hubo un error al crear el usuario!"
                />
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    </>
  );
}
