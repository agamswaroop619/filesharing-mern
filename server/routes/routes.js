import express from "express";
import { uploadFiles } from "../controller/file-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post('/upload',upload.single('file'),uploadFiles);

export default router;