'use client';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { forwardRef, useEffect, useState } from 'react';
import SuccessAlert from './SuccessAlert';
import BadAlert from './BadAlert';
import Loader from './Loader';
import { useRouter } from 'next/navigation';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectDialog({ open, setOpen, _id }) {
  const router = useRouter();
  const [project, setProject] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const projectFound = await fetch('/api/getProjectById', {
        method: 'POST',
        body: JSON.stringify({ _id }),
      });

      if (projectFound.status == 201) {
        const projectFoundJson = await projectFound.json();
        setProject(projectFoundJson);
      } else {
        router.push('/error');
      }
    }
    if (titulo) {
      fetchData();
    }
  }, [titulo]);

  const handleClose = () => {
    setEditTitulo(null);
    setCliente(null);
    setColaborador1(null);
    setColaborador2(null);
    setColaborador3(null);
    setTipologia(null);
    setMetraje(null);
    setUbicacion(null);
    setAño(null);
    setResumen(null);
    setNewPortada(null);
    setNewPortadaPlaceHolder(null);
    setNewGaleria(null);
    setNewGaleriaPlaceHolder(null);
    setOrden(null);
    setOpen(false);
  };
  const [succesMessage, setSuccesMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleDeletePhoto = async (titulo, img) => {
    try {
      setLoader(true);
      const response = await fetch('/api/deletePhoto', {
        method: 'POST',
        body: JSON.stringify({ imageLink: img }),
      });
      if (response.status == 201) {
        const remainedGaleria = project.galeria.filter((image) => image != img);
        const response2 = await fetch('/api/updateGaleria', {
          method: 'POST',
          body: JSON.stringify({ titulo, galeria: remainedGaleria }),
        });
        if (response2.status == 201) {
          setSuccesMessage('¡Foto eliminada correctamente!');
          setOpenSuccessAlert(true);
          setLoader(false);
          window.location.reload();
        } else {
          setErrorMessage('¡Hubo un problema el eliminar la foto!');
          setOpenBadAlert(true);
        }
      } else {
        setErrorMessage('¡Hubo un problema el eliminar la foto!');
        setOpenBadAlert(true);
      }
      setLoader(false);
    } catch (error) {
      console.log(error);
      setErrorMessage('¡Hubo un problema el eliminar la foto!');
      setOpenBadAlert(true);
      setLoader(false);
    }
  };
  const [newPortada, setNewPortada] = useState(null);
  const [newPortadaPlaceHolder, setNewPortadaPlaceHolder] = useState(null);
  const handleNewPortada = (e) => {
    const files = Array.from(e.target.files);
    const data = new FormData();
    data.append('portada', files[0]);

    setNewPortada(data);
    setNewPortadaPlaceHolder(
      files.length > 0 ? URL.createObjectURL(files[0]) : null
    );
  };

  const [newGaleria, setNewGaleria] = useState(null);
  const [newGaleriaPlaceHolder, setNewGaleriaPlaceHolder] = useState(null);
  const handleNewGaleria = (e) => {
    const files = Array.from(e.target.files);
    const data = new FormData();
    files.map((file, i) => {
      data.append(`galeria-${i}`, file, file.name);
    });
    setNewGaleria(data);

    const images = files.map((file) => {
      return URL.createObjectURL(file);
    });
    setNewGaleriaPlaceHolder(images);
  };

  const [loader, setLoader] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openBadAlert, setOpenBadAlert] = useState(false);

  const [editTitulo, setEditTitulo] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [colaborador1, setColaborador1] = useState(null);
  const [colaborador2, setColaborador2] = useState(null);
  const [colaborador3, setColaborador3] = useState(null);
  const [tipologia, setTipologia] = useState(null);
  const [metraje, setMetraje] = useState(null);
  const [ubicacion, setUbicacion] = useState(null);
  const [año, setAño] = useState(null);
  const [resumen, setResumen] = useState(null);
  const [orden, setOrden] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      setLoader(true);
      let responseImagePortadaJson;
      if (newPortada) {
        const responseImagePortada = await fetch('/api/uploadPhoto', {
          method: 'POST',
          body: newPortada,
        });
        responseImagePortadaJson = await responseImagePortada.json();
      }
      const urlListGaleria = [];
      if (newGaleria) {
        for (const [key, value] of newGaleria) {
          const data = new FormData();
          data.append(key, value);
          const responseImageGaleria = await fetch('/api/uploadPhoto', {
            method: 'POST',
            body: data,
          });
          const responseImageGaleriaJson = await responseImageGaleria.json();
          urlListGaleria.push(responseImageGaleriaJson.url);
        }
      }

      const newProject = {
        _id: project._id,
        url: formData.get('titulo').replaceAll(' ', '_').toLocaleLowerCase(),
        orden: formData.get('orden'),
        titulo: formData.get('titulo'),
        cliente: formData.get('cliente'),
        colaborador1: formData.get('colaborador1'),
        colaborador2: formData.get('colaborador2'),
        colaborador3: formData.get('colaborador3'),
        tipologia: formData.get('tipología'),
        metraje: formData.get('metraje'),
        ubicacion: formData.get('ubicación'),
        resumen: formData.get('resumen'),
        año: formData.get('año'),
        portada: responseImagePortadaJson
          ? responseImagePortadaJson.url
          : project.portada,
        galeria: [...project.galeria, ...urlListGaleria],
      };
      const responseProject = await fetch('/api/updateProject', {
        method: 'POST',
        body: JSON.stringify(newProject),
      });
      if (responseProject.status == 201) {
        const responseProjectJson = await responseProject.json();
        // Se deberia eliminar la portada antigua de bitbucket?
        if (responseImagePortadaJson?.url) {
          await fetch('/api/deletePhoto', {
            method: 'POST',
            body: JSON.stringify({ imageLink: project.portada }),
          });
        }

        setSuccesMessage('¡Se editó el proyecto correctamente!');
        setOpenSuccessAlert(true);
        window.location.reload();
      } else {
        setErrorMessage('¡Hubo un error al editar el proyecto!');
        setOpenBadAlert(true);
      }
      setLoader(false);
    } catch (error) {
      // console.log(error);
      setErrorMessage('¡Hubo un error al editar el proyecto!');
      setOpenBadAlert(true);
      setLoader(false);
    }
  };
  const valueInput = (a, b) => {
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
              Editar proyecto
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <div className="w-screen p-10">
            {project && (
              <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="grid grid-cols-3 gap-5 mb-4">
                      <div>
                        <label
                          htmlFor="titulo"
                          className="block mb-2 text-sm text-gray-600"
                        >
                          Titulo
                        </label>
                        <input
                          onChange={(e) => {
                            setEditTitulo(e.target.value);
                          }}
                          value={valueInput(editTitulo, project.titulo)}
                          // defaultValue={project.titulo}
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
                          onChange={(e) => {
                            setCliente(e.target.value);
                          }}
                          value={valueInput(cliente, project.cliente)}
                          type="text"
                          id="cliente"
                          name="cliente"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="orden"
                          className="block mb-2 text-sm text-gray-600"
                        >
                          Orden
                        </label>
                        <input
                          onChange={(e) => {
                            setOrden(e.target.value);
                          }}
                          value={valueInput(orden, project.orden)}
                          type="number"
                          id="orden"
                          name="orden"
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
                          onChange={(e) => {
                            setColaborador1(e.target.value);
                          }}
                          value={valueInput(colaborador1, project.colaborador1)}
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
                          onChange={(e) => {
                            setColaborador2(e.target.value);
                          }}
                          value={valueInput(colaborador2, project.colaborador2)}
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
                          onChange={(e) => {
                            setColaborador3(e.target.value);
                          }}
                          value={valueInput(colaborador3, project.colaborador3)}
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
                          onChange={(e) => {
                            setTipologia(e.target.value);
                          }}
                          value={valueInput(tipologia, project.tipologia)}
                          type="text"
                          id="tipología"
                          name="tipología"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                          required
                        />
                      </div>

                      <div className="">
                        <label
                          htmlFor="Metraje"
                          className="block mb-2 text-sm text-gray-600"
                        >
                          Metraje
                        </label>
                        <input
                          onChange={(e) => {
                            setMetraje(e.target.value);
                          }}
                          value={valueInput(metraje, project.metraje)}
                          type="text"
                          id="metraje"
                          name="metraje"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
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
                          onChange={(e) => {
                            setUbicacion(e.target.value);
                          }}
                          value={valueInput(ubicacion, project.ubicacion)}
                          type="text"
                          id="ubicación"
                          name="ubicación"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 mb-4 gap-5">
                      <div className="">
                        <label
                          htmlFor="Año"
                          className="block mb-2 text-sm text-gray-600"
                        >
                          Año
                        </label>
                        <input
                          onChange={(e) => {
                            setAño(e.target.value);
                          }}
                          value={valueInput(año, project.año)}
                          type="text"
                          id="año"
                          name="año"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#131e2f]"
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="Resumen"
                          className="block mb-2 text-sm text-gray-600"
                        >
                          Resumen
                        </label>
                        <textarea
                          onChange={(e) => {
                            setResumen(e.target.value);
                          }}
                          value={valueInput(resumen, project.resumen)}
                          type="text"
                          id="resumen"
                          name="resumen"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="portada"
                        className="block mb-2 text-sm text-gray-600"
                      >
                        Foto de portada (750px x 750px)
                      </label>
                      Cambiar portada
                      <input
                        className="ml-3"
                        onChange={(e) => {
                          handleNewPortada(e);
                        }}
                        type="file"
                        accept="image/*"
                      />
                      <img
                        src={newPortadaPlaceHolder || project.portada}
                        className="w-1/5 m-3"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="galeria"
                        className="block mb-2 text-sm text-gray-600"
                      >
                        Galeria de imagenes
                      </label>
                      Agregar imágenes
                      <input
                        className="ml-3"
                        type="file"
                        accept="image/*"
                        id="galeria"
                        name="galeria"
                        multiple
                        onChange={(e) => {
                          handleNewGaleria(e);
                        }}
                      />
                      <div className="flex flex-col items-start overflow-scroll h-96 m-3">
                        {project.galeria.map((img, idx) => {
                          return (
                            <div
                              key={idx}
                              className="flex items-end mb-5 h-3/6"
                            >
                              <img
                                key={img}
                                src={img}
                                className="h-full mr-3"
                              />
                              <DeleteForeverOutlinedIcon
                                onClick={() =>
                                  handleDeletePhoto(project.titulo, img)
                                }
                                className="text-3xl hover:text-red-500 cursor-pointer"
                              />
                            </div>
                          );
                        })}
                        {newGaleriaPlaceHolder &&
                          newGaleriaPlaceHolder.length > 0 &&
                          newGaleriaPlaceHolder.map((img, idx) => {
                            return (
                              <img
                                key={idx}
                                src={img}
                                className="h-full mr-3"
                              />
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
