// import { sql } from '../database/database.js';
// import xd from 'base64-blob';
import imageModel from '../models/imageModel.js';

let image = {};

image.postImage = (req,res) => {
    const post = imageModel(req.body);
    post.save()
    .then(data => {
        return res.json(data);
    })
    .catch(err => {
        return res.json(err);
    })
}

image.getImages = (req,res) => {
    imageModel.find()
    .then(data => {
        return res.json(data);
    })
    .catch(err => {
        return res.json(err);
    })
};

image.deleteImage = (req,res) => {
    imageModel.deleteOne({_id: req.params.id})
    .then(data => {
        return res.json(data);
    })
    .catch(err => {
        return res.json(err);
    })
};

export default image;