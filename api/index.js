import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import imagesRoute from "./routes/images.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const url = process.env.MONGO_URL;

const connect = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      // useCreateiIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    throw error;
  }
};

//Storage for Multer

// mongoose.connection.on("disconnection", () => {
//   console.log("mongoDB disconnected!");
// });
// mongoose.connection.on("connected", () => {
//   console.log("mongoDB connected without any error!");
// });

//MiddleWares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/images", imagesRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.get("/", (req, res) => {
  res.send("Hello First request!");
});

app.listen(8800, () => {
  connect();
  console.log("Server is connected to port 8800!");
});
