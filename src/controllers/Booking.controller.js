import Booking from "../models/Booking.model.js";

async function getBooking(req, res) {
  const booking = await Booking.find();
  return res.status(200).json(booking);
}

async function createBooking(req, res) {
  const booking = req.body;

  // console.log(booking);
  const newBooking = await Booking.create(booking);
  return res.status(201).json(newBooking);
  // return res.status(201).json(booking);
}

async function updateBooking(req, res) {
  const { service, date, reserva } = req.body;
  const id = req.params.id;

  const updateBooking = { service, date, reserva  };

  await Booking.findByIdAndUpdate(id, {
    $set: updateBooking,
  });
  return res.status(200).json(updateBooking);
}

async function deleteBooking(req, res) {
  //const index = res.userIndex;
  //tasks.splice(index, 1);
  const id = req.params.id;
  //console.log(req);
  await Booking.findByIdAndDelete({ _id: id });

  return res.status(200).json("Your appointment was successfully canceled !!!");
}

export { getBooking, createBooking, updateBooking, deleteBooking };
