import { Schema, model, models } from 'mongoose';

const projectSchema = new Schema({
  titulo: {
    type: String,
    required: [true, 'Titulo is required'],
    unique: true,
  },
  cliente: {
    type: String,
    required: [true, 'Cliente is required'],
  },
  colaborador1: {
    type: String,
    required: [true, 'Colaborador1 is required'],
  },
  colaborador2: {
    type: String,
    required: false,
  },
  colaborador3: {
    type: String,
    required: false,
  },
  metraje: {
    type: String,
    required: [true, 'Metraje is required'],
  },
  tipologia: {
    type: String,
    required: [true, 'Tipologia is required'],
  },
  ubicacion: {
    type: String,
    required: [true, 'Ubicacion is required'],
  },
  año: {
    type: String,
    required: [true, 'Año is required'],
  },
  resumen: {
    type: String,
    required: [true, 'Resumen is required'],
  },
  portada: {
    type: String,
    required: [true, 'Portada is required'],
  },
  galeria: {
    type: [String],
    required: [true, 'Galeria is required'],
    validate: {
      validator: function (array) {
        return array.length > 0;
      },
      message: 'Galeria must not be empty',
    },
  },
  orden: {
    type: Number,
    required: [true, 'Orden is required'],
    default: 0,
  },
  url: {
    type: String,
    required: [true, 'Url is required'],
  },
});

const Project = models.Project || model('Project', projectSchema);
export default Project;
