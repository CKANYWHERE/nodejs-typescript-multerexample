import express,{Response,Request} from 'express'
import multer from 'multer'

import path from 'path'

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
}

export const test = async(req: Request, res: Response) => {
    res.send('test')
}
