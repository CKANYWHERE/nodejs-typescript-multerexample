import multer from 'multer'
import path from 'path'

//const upload = multer({dest:'/Users/minchang-gyeong/Pictures'});
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("asdf");
        
        cb(null, './test/')
    },
    filename: function (req, file, cb) {
        var extension = path.extname(file.originalname);
        var basename = path.basename(file.originalname, extension);
        cb(null, file.originalname);
    }
  })
   
const upload = multer({ storage: storage })

export default upload;