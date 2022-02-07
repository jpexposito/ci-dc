const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: {
        data: Buffer,
        contentType: String
    }
});

module.exports = new mongoose.Model('Image', ImageSchema);
