import express from "express";
import threadController from "../controllers/thread-controllers.js";

const router = express.Router();

router.get('/thread', threadController.listThreads);

export default router;