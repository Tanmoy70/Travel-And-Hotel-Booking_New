import Hotel from "../models/Hotel.js";
import ImageModel from "../models/Image.js";
import Room from "../models/Room.js";
import fs from "fs";
import path from "path";

//CreateHotels

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (err) {
    next(err);
  }
};

//UpdateHotels

export const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (err) {
    next(err);
  }
};

//deleteHotels

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted!");
  } catch (err) {
    next(err);
  }
};

//GetHotels

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const photoData = [];
    const uploadFolder = path.join(process.cwd(), "uploads");
    for (let i = 0; i < hotel.photos.length; i++) {
      photoData.push(fs.readFileSync(path.join(uploadFolder, hotel.photos[i])));
    }
    hotel.photos = photoData;
    const dataToBesend = {
      _id: hotel._id,
      name: hotel.name,
      photos: photoData,
      desc: hotel.desc,
      title: hotel.title,
      cheapestPrice: hotel.cheapestPrice,
      distance: hotel.distance,
      address: hotel.address,
    };
    res.status(200).send(dataToBesend); //yttttttttttttttttttttttttttttttttttttttt
  } catch (err) {
    next(err);
  }
};

//getAllHotels

export const getHotels = async (req, res, next) => {
  const { minPrice, maxPrice, ...others } = req.query;
  try {
    const rawHotelData = await Hotel.find({
      ...others,
      cheapestPrice: { $gte: minPrice | 1, $lte: maxPrice || 999 },
    }).limit(req.query.limit);

    const dataTobeSend = [];
    const uploadFolder = path.join(process.cwd(), "uploads");

    for (let i = 0; i < rawHotelData.length; i++) {
      const photos = [];

      for (let j = 0; j < rawHotelData[i].photos.length; j++) {
        console.log(rawHotelData[i].photos[j]);
        photos.push(
          fs.readFileSync(path.join(uploadFolder, rawHotelData[i].photos[j]))
        );
      }

      dataTobeSend.push({
        _id: rawHotelData[i]._id,
        name: rawHotelData[i].name,
        type: rawHotelData[i].type,
        city: rawHotelData[i].city,
        address: rawHotelData[i].address,
        distance: rawHotelData[i].distance,
        photos,
        title: rawHotelData[i].title,
        desc: rawHotelData[i].desc,
        rating: rawHotelData[i].rating,
        rooms: rawHotelData[i].rooms,
        cheapestPrice: rawHotelData[i].cheapestPrice,
        featured: rawHotelData[i].featured,
      });
    }

    console.log(dataTobeSend);
    res.status(200).send(dataTobeSend);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//Count By Cities for hotels

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    console.log(list);
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

//count by Type

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotels", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getHotelRoom = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
