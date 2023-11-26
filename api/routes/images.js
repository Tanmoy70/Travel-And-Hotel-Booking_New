import express from "express";

import { uploadImage } from "../controllers/image.js";
const router = express.Router();
// Import image

router.post("/:hotelid", uploadImage);

export default router;
