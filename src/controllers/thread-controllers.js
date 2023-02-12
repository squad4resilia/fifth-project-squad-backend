import { Thread } from "../models/schemas.js";

class threadController{

    // lista todos os eventos (GET)
    static listThreads = (req, res) =>{
        Thread.find((err, Thread)=>{
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json(Thread);
        })
    }

    static listThreadsBySubject = (req, res) => {
        Thread.find({ thread_subject: req.params.threadSubject }, (err, threads) => {
          if (err) {
            res.status(500).send(err);
          }
          res.status(200).json(threads);
        });
      }      

    static getThreadandComments = (req, res) => {
        Thread.findById(req.params.id)
          .populate('comments')
          .exec((err, Thread) => {
            if (err) {
              res.status(500).send(err);
            }
            res.status(200).json(Thread);
          });
      };

    static createThread = (req, res)=>{
        let newThread = new Thread(req.body);
        newThread.save((err, Thread)=>{
            if(err){
                res.status(500).send(err);
            }
            res.status(201).json(newThread)
        })
    }

    static updateThread = (req, res) =>{
        Thread.findByIdAndUpdate(req.params.id, req.body, (err, Thread) => {
            if(err){
                res.status(500).send(err);
            }
            res.status(200).send({message: `${Thread.title} atualizado com sucesso!`});
            return;
        })
    }

    static deleteThread = (req, res) => {
        Thread.findByIdAndRemove(req.params.id, (err, Thread) => {
            if(err){
                res.status(500).send(err);
            }
            res.status(200).send({message: 'thread deletada!'});
            return;
        })
    }
}





export default threadController;