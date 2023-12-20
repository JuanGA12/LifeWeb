import { Schema, model, models } from 'mongoose';

const managerSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false,
  },
});

const Manager_life_web_prd =
  models.Manager_life_web_prd || model('Manager_life_web_prd', managerSchema);
export default Manager_life_web_prd;
