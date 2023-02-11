import mongoose, { Schema } from "mongoose";
import comment from "./comment-schema.js";

const threadSchema = new mongoose.Schema(
    {
        thread_id: Schema.Types.ObjectId, //1
        thread_author: {type: String, default: "unnamed"}, //juquinha
        thread_subject: {type: String, required:true}, // tecnologia/ esportes/ culinaria/filmes
        thread_title: {type: String, required:true}, //doces ou titulo
        thread_msg: {type: String, required: true}, //msg principal da thread
        thread_date: {type: Date, default: Date.now},
        comments: [{type: Schema.Types.ObjectId, ref: 'comment'}]
    },
    {
        versionKey: false, //sem caminho para versionamento 
    }
)


const thread = mongoose.model('thread', threadSchema);

// thread publicacoes
// comment

//post
//patch

//[{"comentario1","comentario2","comentario3","comentario4"}]
//[{"unnamed","unnamed","unnamed","unnamed"}]
//[{"datadeagr","datadeagr","datadeagr","datadeagr"}]

//div0 = {comentario1}, {unnamed}, {datadeagr}
//div1 = {comentario2}, {unnamed}, {datadeagr}

export default thread;