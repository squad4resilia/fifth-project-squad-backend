import { Comment } from "../models/schemas.js";
import { Thread } from "../models/schemas.js";

class commentController{

    static listComment = (req, res)=>{
        Comment.find((err, comment)=>{
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json(comment);
        })
    }

    static addComment = async (req, res) => {
        const threadId = req.params.threadId;
        const thread = await Thread.findById(threadId);
        const comment = new Comment({
          thread_id: threadId,
          comment_author: req.body.comment_author,
          comment_msg: req.body.comment_msg
        });
    
        thread.comments.push(comment);
        await thread.save();
        await comment.save();
    
        res.status(200).json({ message: 'Comment added successfully!' });
      };

}

export default commentController;