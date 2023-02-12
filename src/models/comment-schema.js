import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        thread_id: {type: String, required: true},
        comment_author:{type:String, default: "unnamed"},
        comment_msg:{type:String, required: true}, //obrigatória
        comment_date: {type: Date, default: Date.now}
    },
    {
        versionKey: false, //sem caminho para versionamento 
    }
)

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;