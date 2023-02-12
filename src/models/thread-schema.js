import mongoose from "mongoose";

const threadSchema = new mongoose.Schema(
    {
        thread_author: {type: String, default: "unnamed"}, //juquinha
        thread_subject: {type: String, required:true}, // tecnologia/ esportes/ culinaria/filmes
        thread_title: {type: String, required:true}, //doces ou titulo
        thread_msg: {type: String, required: true}, //msg principal da thread
        thread_date: {type: Date, default: Date.now},
        thread_CN: {type: Number, default: 0}
    },
    {
        versionKey: false, //sem caminho para versionamento 
    }
)


const Thread = mongoose.model('Thread', threadSchema);


export default Thread;