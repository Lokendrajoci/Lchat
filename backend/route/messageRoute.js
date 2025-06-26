import express from "express";
import * as userController from "../controllers/messageController.js";

const router = express.Router();

router.route("/").post(userController.createMessage);
router.route("/").get(userController.getAllMessages);

export default router;
