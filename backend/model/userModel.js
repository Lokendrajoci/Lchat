import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
    unique: true,
    maxlength: [15, "A user name must have less or equal than 40 characters"],
    minlength: [3, "A user name must have more or equal than 3 characters"],
  },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dz3qj1x2f/image/upload/v1698851234/avatars/avatar_1.png",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
