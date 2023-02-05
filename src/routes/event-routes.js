import express from "express";
import eventController from "../controllers/event-controllers.js";

const router = express.Router();

router.get('/events', eventController.listarEventos);

export default router;