import mongo, { Types } from "mongoose";

const bookingSchema = new mongo.Schema({
  id: Types.ObjectId,
  service: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  // hour: {
  //   type: Date,
  //   required: true,
  // },
  reserva: {
    type: Boolean,
    required: true,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now(),
  // },
},
{
  timestamps: true,
});

export default mongo.model("Booking", bookingSchema);