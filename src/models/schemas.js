import mongoose from "mongoose";

const threadSchema = new mongoose.Schema(
    {
        thread_author: {type: String, default: "unnamed"},
        thread_subject: {type: String, required:true},
        thread_title: {type: String, required:true},
        thread_msg: {type: String, required: true},
        thread_date: {type: Date, default: Date.now},
        thread_CN: {type: Number, default: 0},
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
    },
    {
        versionKey: false,
    }
)

const commentSchema = new mongoose.Schema(
    {
        comment_author:{type:String, default: "unnamed"},
        comment_msg:{type:String, required: true},
        comment_date: {type: Date, default: Date.now}
    },
    {
        versionKey: false,
    }
)

const Thread = mongoose.model('Thread', threadSchema);
const Comment = mongoose.model('Comment', commentSchema);



export {Thread, Comment};