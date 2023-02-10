import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        comment_author:[{type:String, default: "unnamed"}],
        comment_msg:[{type:String, required: true}],
        comment_date: [{type: Date, default: Date.now}]
    },
    {
        versionKey: false, //sem caminho para versionamento 
    }
)

const comment = mongoose.model('comment', commentSchema);

export default comment;