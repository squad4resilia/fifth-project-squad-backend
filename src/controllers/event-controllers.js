import event from "../models/event-schema.js";

class eventController{

    // lista todos os eventos (GET)
    static listarEventos = (req, res) =>{
        event.find((err, event)=>{
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json(event);
        })
    }
}

export default eventController;