import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        name: {type: String, required:true},
        date: {type: Date, default: Date.now}
    },
    {
        versionKey: false, //sem caminho para versionamento 
    }
)

const event = mongoose.model('event', eventSchema);

export default event;