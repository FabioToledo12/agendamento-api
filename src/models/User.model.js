import mongo, { Types } from "mongoose";

const userSchema = new mongo.Schema({
  id: Types.ObjectId,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongo.model("User", userSchema);
