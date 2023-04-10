import React from "react";
import classes from "./Comments.module.css";
const Comments = () => {
  return (
    <div className={classes.Comments}>
      <h3>Comments</h3>
      <div className={classes.Comments_AddCommentContainer}>
        <textarea rows={5} placeholder={"Enter your comment here"} />
        <button className={classes.Comments_AddBtn}>Add Comment</button>
      </div>
      <div className={classes.Comments_commentsContainer}>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
        <div className={classes.Comments_SingleComment}>
          <div className={classes.Comments_CommentInfo}>
            <p className={classes.Comments_Author}>Utkarsh Mandape</p>
            <p className={classes.Comments_Data}>26 Mar 2023</p>
          </div>
          <p>This blog is awesome and nice to see you growing</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
