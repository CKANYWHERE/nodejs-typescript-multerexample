import express,{Response,Request} from 'express'
import multer from 'multer'
import fs from 'fs'

const upload = multer().single('avatar')
const app = express();

/*
* save image
* route @POST
*/
export const postImage = async(req: Request, res: Response) => {
    res.json(req.files);
}

/*
* get Image
* route @GET
*/
export const getImage = async(req: Request, res: Response) => {

    let fileName = req.params.id;
    fs.exists('C://UserPicture/'+fileName, (exists:boolean) => {
        if(exists){
            fs.readFile('C://UserPicture/' + fileName, (err ,data) =>{
                try{
                    res.end(data)
                }catch{
                    console.log(err);
                }
            });
        }else{
            fs.readFile('C://NoImage/noimage.jpg', (err ,data) =>{
                try{
                    console.log('asdf');
                    
                    res.end(data)
                }catch{
                    console.log(err);
                }
            });
        }
    });
}

export const test = async(req: Request, res: Response) => {
    res.send('test')
}
