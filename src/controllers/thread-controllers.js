import Thread from "../models/thread-schema.js";

class threadController{

    // lista todos os eventos (GET)
    static listThreads = (req, res) =>{
        Thread.find((err, thread)=>{
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json(thread);
        })
    }

    static createThread = (req, res)=>{
        let newThread = new Thread(req.body);
        newThread.save((err, thread)=>{
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