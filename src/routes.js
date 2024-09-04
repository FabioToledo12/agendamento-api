import { Router } from "express";

import { getLogin } from "./controllers/Login.controller.js";

import {
  getUsers,
  createUsers,
  deleteUsers,
} from "./controllers/User.controller.js";

import {
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
} from "./controllers/Booking.controller.js";

const routes = new Router();
routes.post("/login", getLogin);

/* rotas de users */
routes.get("/users", getUsers);
routes.post("/users", createUsers);
routes.delete("/users/:id", deleteUsers);

/* rotas de booking */
routes.get("/booking", getBooking);
routes.post("/booking", createBooking);
routes.put("/booking/:id", updateBooking);
routes.delete("/booking/:id", deleteBooking);

export default routes;
