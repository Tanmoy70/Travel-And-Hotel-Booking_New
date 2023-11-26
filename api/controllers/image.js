import Image from "../models/Image.js";
import multer from "multer";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

//Storage for Multer

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("testImage");

export const uploadImage = async (req, res, next) => {
  const hotelId = req.params.hotelid;

  upload(req, res, async (err) => {
    if (err) {
      console.log(err);
    } else {
      const newImage = new Image({
        name: req.body.name,
        image: {
          data: req.file.filename,
          contentType: "image/jpeg",
        },
      });
      try {
        const savedImage = await newImage.save();
        try {
          await Hotel.findByIdAndUpdate(hotelId, {
            $push: { photos: savedImage.image.data },
          });
        } catch (err) {
          next(err);
        }
        res.status(200).json(savedImage);
      } catch (err) {
        next(err);
      }
    }
  });
};
