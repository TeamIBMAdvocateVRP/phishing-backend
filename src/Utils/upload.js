const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_REPO,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const imagesStore = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'some-folder-name',
});

module.exports = {
  imagesStore,
};
