import app from "./index.js";
import { config } from "dotenv";
import mongoose from "mongoose";
import http from "http";
import { Server } from "socket.io";

config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const server = http.createServer(app);
const io = new Server(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
