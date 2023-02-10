import mongoose, { Schema } from "mongoose";

const threadSchema = new mongoose.Schema(
    {
        thread_id: Schema.Types.ObjectId,
        thread_author: {type: String, default: "unnamed"},
        thread_name: {type: String, required:true},
        thread_date: {type: Date, default: Date.now}
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