import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { forwardRef, useEffect, useState } from 'react';
import Loader from './Loader';
import { useRouter } from 'next/navigation';
import BadAlert from './BadAlert';
import SuccessAlert from './SuccessAlert';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BlogDialog({ open, setOpen }) {
  const router = useRouter();
  const handleClose = () => {
    setOpen(false);
  };
  const [succesMessage, setSuccesMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openBadAlert, setOpenBadAlert] = useState(false);
  const [loader, setLoader] = useState(false);

  const [parrafo1ES, setParrafo1ES] = useState(null);
  const [parrafo1EN, setParrafo1EN] = useState(null);
  const [parrafo2ES, setParrafo2ES] = useState(null);
  const [parrafo2EN, setParrafo2EN] = useState(null);
  const [parrafo3ES, setParrafo3ES] = useState(null);
  const [parrafo3EN, setParrafo3EN] = useState(null);
  const validateInput = (a, b) => {
    if (a != null && a != '') {
      return a;
    }
    if (a == null) {
      return b;
    }
    if (a == '') {
      return '';
    }
  };

  const [blog, setBlog] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const blogInfo = await fetch('/api/getBlogInfo', {
        method: 'POST',
        body: JSON.stringify({ validation: 'x07v' }),
      });

      if (blogInfo.status == 201) {
        const blogInfoJson = await blogInfo.json();
        setBlog(blogInfoJson);
      } else {
        router.push('/error');
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      setLoader(true);
      const editBlog = {
        _id: blog._id,
        parrafo1ES: formData.get('parrafo1ES'),
        parrafo1EN: formData.get('parrafo1EN'),
        parrafo2ES: formData.get('parrafo2ES'),
        parrafo2EN: formData.get('parrafo2EN'),
        parrafo3ES: formData.get('parrafo3ES'),
        parrafo3EN: formData.get('parrafo3EN'),
      };
      const responseBlog = await fetch('/api/updateBlog', {
        method: 'POST',
        body: JSON.stringify(editBlog),
      });
      if (responseBlog.status == 201) {
        const responseBlogJson = await responseBlog.json();
        setSuccesMessage('¡Se editó el blog correctamente!');
        setOpenSuccessAlert(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setErrorMessage('¡Hubo un error al editar el blog!');
        setOpenBadAlert(true);
      }
      setLoader(false);
    } catch (error) {
      setErrorMessage('¡Hubo un error al editar el blog!');
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
            Editando...
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
              Editar Blog
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <div className="w-screen p-10">
            {blog && (
              <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
                <div className="grid grid-cols-1 gap-8">
                  <div>
                    <div className="grid grid-cols-2 mb-4 gap-5">
                      <div className="">
                        <label
                          htmlFor="parrafo1ES"
                          className="block mb-2 text-sm text-gray-600"
                        >
                          Párrafo 1 español
                        </label>
                        <textarea
                          onChange={(e) => {
                            setParrafo1ES(e.target.value);
                          }}
                          value={validateInput(parrafo1ES, blog.parrafo1ES)}
                          type="text"
                          id="parrafo1ES"
                          name="parrafo1ES"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div className="">
                        <label
                          htmlFor="parrafo1EN"
                          className="block mb-2 text-sm text-gray-600"
                        >
                          Párrafo 1 ingles
                        </label>
                        <textarea
                          onChange={(e) => {
                            setParrafo1EN(e.target.value);
                          }}
                          value={validateInput(parrafo1EN, blog.parrafo1EN)}
                          type="text"
                          id="parrafo1EN"
                          name="parrafo1EN"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 mb-4 gap-5">
                      <div className="">
                        <label
                          htmlFor="parrafo2ES"
                          className="block mb-2 text-sm text-gray-600"
                        >
                          Párrafo 2 español
                        </label>
                        <textarea
                          onChange={(e) => {
                            setParrafo2ES(e.target.value);
                          }}
                          value={validateInput(parrafo2ES, blog.parrafo2ES)}
                          type="text"
                          id="parrafo2ES"
                          name="parrafo2ES"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div className="">
                        <label
                          htmlFor="parrafo2EN"
                          className="block mb-2 text-sm text-gray-600"
                        >
                          Párrafo 2 ingles
                        </label>
                        <textarea
                          onChange={(e) => {
                            setParrafo2EN(e.target.value);
                          }}
                          value={validateInput(parrafo2EN, blog.parrafo2EN)}
                          type="text"
                          id="parrafo2EN"
                          name="parrafo2EN"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 mb-4 gap-5">
                      <div className="">
                        <label
                          htmlFor="parrafo3ES"
                          className="block mb-2 text-sm text-gray-600"
                        >
                          Párrafo 3 español
                        </label>
                        <textarea
                          onChange={(e) => {
                            setParrafo3ES(e.target.value);
                          }}
                          value={validateInput(parrafo3ES, blog.parrafo3ES)}
                          type="text"
                          id="parrafo3ES"
                          name="parrafo3ES"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div className="">
                        <label
                          htmlFor="parrafo3EN"
                          className="block mb-2 text-sm text-gray-600"
                        >
                          Párrafo 3 ingles
                        </label>
                        <textarea
                          onChange={(e) => {
                            setParrafo3EN(e.target.value);
                          }}
                          value={validateInput(parrafo3EN, blog.parrafo3EN)}
                          type="text"
                          id="parrafo3EN"
                          name="parrafo3EN"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  //   onClick={() => setOpen(false)}
                  type="submit"
                  className="w-36 bg-[#131e2f] text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 mb-2"
                >
                  Guardar cambios
                </button>
                <div className="mt-3 flex w-[30%] justify-center flex-col items-center self-center">
                  <SuccessAlert
                    open={openSuccessAlert}
                    setOpen={setOpenSuccessAlert}
                    message={succesMessage}
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
