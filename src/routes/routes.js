import express from "express";
import threadController from "../controllers/thread-controllers.js";
import commentController from "../controllers/comment-controllers.js";

const router = express.Router();

router
    .get('/thread', threadController.listThreads)
    .get('/thread/:id', threadController.getThreadandComments)
    .get('/comment', commentController.listComment)
    .get('/thread/subject/:threadSubject', threadController.listThreadsBySubject)
    .post('/thread', threadController.createThread)
    .post('/thread/:id/comment', commentController.addComment)
    .put('/threadd/:id',threadController.updateThread)
    .delete('/threadd/:id', threadController.deleteThread);

export default router;

//A rota '/thread' é para listar todas as threads e usa o método listThreads do controlador da thread.

//A rota '/thread/:id' é para recuperar uma thread específica usando o Id, também retorna os comentários da thread. Ela usa o método getThread do controlador da thread.

//A rota '/thread/:id/comment' é para adicionar um comentário a uma thread específica. Ela usa o threadId como parâmetro na URL e o método addComment do controlador de comentários

//A rota '/thread/subject/:threadSubject' é para retornar todas as threads que tiverem relação com um determinado assunto (subject).