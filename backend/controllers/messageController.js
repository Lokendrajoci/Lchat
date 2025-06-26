import Message from "../model/messageModel.js";

export const createMessage = async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        message: newMessage,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({
      status: "success",
      results: messages.length,
      data: {
        messages,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
