import thread from "../models/thread-schema.js";

class threadController{

    // lista todos os eventos (GET)
    static listThreads = (req, res) =>{
        thread.find((err, thread)=>{
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json(thread);
        })
    }
}

export default threadController;