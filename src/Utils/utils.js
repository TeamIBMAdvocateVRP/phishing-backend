module.exports = {
    checkFileType: (file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const extname = filetypes.test(file.originalname.toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if(mimetype && extname){
            return cb(null,true);
        } else {
            cb('Error: Solo Imagenes!');
        }
    }
}