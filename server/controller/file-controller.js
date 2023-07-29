import { request } from "express";
import File from "../models/file.js";
export const uploadFiles = async(request, response) =>{
   const fileObj ={
    path: request.file.path,
    name: request.file.originalname,
   }
    try {
        const file= await File.create(fileObj);
        console.log(file);
        response.status(200).json({path: `http://localhost:8000/file/${file._id}` })
   } catch (error) {
    console.error(error.message);
    response. status (500).json({error: error.message });
   }
}
export const downloadFiles = async (request, response) => {
    try {
        console.log("Downloading file with ID:", request.params.fileId);

        const file = await File.findById(request.params.fileId);
        console.log("Found file:", file);

        if (!file) {
            return response.status(404).json({ error: "File not found" });
        }

        file.downloadContent++;

        await file.save();
        console.log("File updated:", file);

        response.download(file.path, file.name);
    } catch (error) {
        console.error("Error:", error.message);
        return response.status(500).json({ error: error.message });
    }
}
