import File from "../models/file";
export const uploadFiles = (request, response) =>{
   const fileObj ={
    path: request.file.path,
    name: request.file.originalname
   }
    try {
    
   } catch (error) {
    console.error(error.message);
   }
}