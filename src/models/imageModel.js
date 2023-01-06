import { model, Schema } from 'mongoose';

const schema = Schema({
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
});

const imageModel = model('image',schema);
export default imageModel;