import { Schema, model, models } from 'mongoose';

const blogSchema = new Schema({
  parrafoES: {
    type: String,
    required: [true, 'Parrafo 1 en español es requerido'],
  },
  parrafoEN: {
    type: String,
    required: [true, 'Parrafo 1 en ingles es requerido'],
  },
});

const Blog = models.Blog || model('Blog', blogSchema);
export default Blog;
