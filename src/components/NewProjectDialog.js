import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { forwardRef, useState } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewProjectDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const [portada, setPortada] = useState(null);
  const [galeria, setGaleria] = useState(null);

  const [galeriaData, setGaleriaData] = useState(null);
  const [portadaData, setPortadaData] = useState(null);

  const handlePortada = (e) => {
    const files = Array.from(e.target.files);
    const data = new FormData();
    data.append('portada', files[0]);
    setPortadaData(data);
    setPortada(files.length > 0 ? URL.createObjectURL(files[0]) : null);
  };
  const handleGaleria = (e) => {
    const files = Array.from(e.target.files);
    const data = new FormData();

    files.map((file, i) => {
      data.append(`galeria-${i}`, file, file.name);
    });
    setGaleriaData(data);

    const images = files.map((file) => {
      return URL.createObjectURL(file);
    });
    setGaleria(images);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const project = {
      titulo: formData.get('titulo'),
      cliente: formData.get('cliente'),
      colaborador1: formData.get('colaborador1'),
      colaborador2: formData.get('colaborador2'),
      colaborador3: formData.get('colaborador3'),
      tipologia: formData.get('tipología'),
      ubicacion: formData.get('ubicación'),
      resumen: formData.get('resumen'),
      año: formData.get('año'),
    };

    const response = await fetch('/api/createProject', {
      method: 'POST',
      body: JSON.stringify(project),
    });
    const f = await response.json();
    console.log(f);
    // const imagesToUpload = galeriaData;

    // for (const [key, value] of portadaData) {
    //   imagesToUpload.append(key, value);
    // }
    // await fetch('/api/uploadPhoto', {
    //   method: 'POST',
    //   body: imagesToUpload,
    // });
  };
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
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
              Nuevo projecto
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              Crear
            </Button> */}
          </Toolbar>
        </AppBar>
        <div>
          <div className="w-screen p-10">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="grid grid-cols-2 gap-5 mb-4">
                    <div>
                      <label
                        htmlFor="titulo"
                        className="block mb-2 text-sm text-gray-600"
                      >
                        Titulo
                      </label>
                      <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cliente"
                        className="block mb-2 text-sm text-gray-600"
                      >
                        Cliente
                      </label>
                      <input
                        type="text"
                        id="cliente"
                        name="cliente"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mb-4 gap-5">
                    <div className="">
                      <label
                        htmlFor="colaborador1"
                        className="block mb-2 text-sm text-gray-600"
                      >
                        Colaborador
                      </label>
                      <input
                        type="text"
                        id="colaborador1"
                        name="colaborador1"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="colaborador2"
                        className="block mb-2 text-sm text-gray-600"
                      >
                        Colaborador 2 (opcional)
                      </label>
                      <input
                        type="text"
                        id="colaborador2"
                        name="colaborador2"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="colaborador3"
                        className="block mb-2 text-sm text-gray-600"
                      >
                        Colaborador 3 (opcional)
                      </label>
                      <input
                        type="text"
                        id="colaborador3"
                        name="colaborador3"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mb-4 gap-5">
                    <div className="">
                      <label
                        htmlFor="Tipología"
                        className="block mb-2 text-sm text-gray-600"
                      >
                        Tipología
                      </label>
                      <input
                        type="text"
                        id="tipología"
                        name="tipología"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                        required
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="Ubicación"
                        className="block mb-2 text-sm text-gray-600"
                      >
                        Ubicación
                      </label>
                      <input
                        type="text"
                        id="ubicación"
                        name="ubicación"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                        required
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="Año"
                        className="block mb-2 text-sm text-gray-600"
                      >
                        Año
                      </label>
                      <input
                        type="text"
                        id="año"
                        name="año"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                        required
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="Resumen"
                      className="block mb-2 text-sm text-gray-600"
                    >
                      Resumen
                    </label>
                    <textarea
                      type="text"
                      id="resumen"
                      name="resumen"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <label
                      htmlFor="portada"
                      className="block mb-2 text-sm text-gray-600"
                    >
                      Foto de portada (23px x 23px)
                    </label>
                    <input
                      onChange={(e) => {
                        handlePortada(e);
                      }}
                      type="file"
                      id="portada"
                      name="portada"
                      accept="image/*"
                      required
                    />
                    {portada && <img src={portada} className="w-1/3 m-3" />}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="galeria"
                      className="block mb-2 text-sm text-gray-600"
                    >
                      Galeria de imagenes
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      id="galeria"
                      name="galeria"
                      multiple
                      required
                      onChange={(e) => {
                        handleGaleria(e);
                      }}
                    />
                    <div className="flex flex-wrap w-full">
                      {galeria &&
                        galeria.map((img) => {
                          return (
                            <img key={img} src={img} className="w-1/3 m-3" />
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
              <button
                // onClick={handleClose}
                type="submit"
                className="w-32 bg-[#131e2f] text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 mb-2"
              >
                Registro
              </button>
            </form>
          </div>
        </div>
      </Dialog>
    </>
  );
}
