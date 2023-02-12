import express from "express";
import threadController from "../controllers/thread-controllers.js";
import commentController from "../controllers/comment-controllers.js";

const router = express.Router();

router
    .get('/thread', threadController.listThreads)
    .get('/comment', commentController.listComment)
    .post('/thread', threadController.createThread)
    .post('/comment', commentController.createComment)
    .put('/threadd/:id',threadController.updateThread)
    .delete('/threadd/:id', threadController.deleteThread);

export default router;