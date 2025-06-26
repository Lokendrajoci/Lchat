import express from "express";
import userRouter from "./route/userRoute.js";
import messageRouter from "./route/messageRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// app.use(express.json({ limit: "10kb" }));
//routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/messages", messageRouter);

export default app;
