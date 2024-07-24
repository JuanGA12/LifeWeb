import { Schema, model, models } from 'mongoose';

const blogSchema = new Schema({
  parrafo1ES: {
    type: String,
    required: [true, 'Parrafo 1 en español es requerido'],
  },
  parrafo1EN: {
    type: String,
    required: [true, 'Parrafo 1 en ingles es requerido'],
  },
  parrafo2ES: {
    type: String,
    required: [true, 'Parrafo 2 en español es requerido'],
  },
  parrafo2EN: {
    type: String,
    required: [true, 'Parrafo 2 en ingles es requerido'],
  },
  parrafo3ES: {
    type: String,
    required: [true, 'Parrafo 3 en español es requerido'],
  },
  parrafo3EN: {
    type: String,
    required: [true, 'Parrafo 3 en ingles es requerido'],
  },
});

const Blog = models.Blog || model('Blog', blogSchema);
export default Blog;
