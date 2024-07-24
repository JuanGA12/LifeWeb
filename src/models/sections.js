import { Schema, model, models } from 'mongoose';

const sectionSchema = new Schema({
  sections: {
    type: [String],
    required: [true, 'Section is required'],
    validate: {
      validator: function (array) {
        return array.length > 0;
      },
      message: 'Section must not be empty',
    },
  },
});

const Section = models.Section || model('Section', sectionSchema);
export default Section;
