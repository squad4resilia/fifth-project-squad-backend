import Comment from "../models/comment-schema.js";

class commentController{

    static listComment = (req, res)=>{
        Comment.find((err, comment)=>{
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json(comment);
        })
    }

    static createComment = (req, res)=>{
        let newComment = new Comment(req.body);
        newComment.save((err, comment)=>{
            if(err){
                res.status(500).send(err);
            }
            res.status(201).json(newComment)
        })
    }

}

export default commentController;