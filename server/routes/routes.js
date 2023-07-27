import express from "express";
import { downloadFiles, uploadFiles } from "../controller/file-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post('/upload', upload.single('file'), uploadFiles);
router.get('/file/:fileId', downloadFiles); // Added a forward slash before 'file'

export default router;
