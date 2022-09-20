import { Typography } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useGridPostStyles } from "./styles/useGridPostStyles";

function GridPost({ post }: any) {
  const classes = useGridPostStyles();
  const navigate = useNavigate();

  function handleOpenPost() {
    navigate(`/p/${post.id}`, { state: { modal: true } });
  }

  return (
    <div onClick={handleOpenPost} className={classes.gridPostContainer}>
      <div className={classes.gridPostOverlay}>
        <div className={classes.gridPostInfo}>
          <span className={classes.likes} />
          <Typography>{post.likes}</Typography>
        </div>
        <div className={classes.gridPostInfo}>
          <span className={classes.comments} />
          <Typography>{post.comments.length}</Typography>
        </div>
      </div>
      <img src={post.media} alt="Post media" className={classes.image} />
    </div>
  );
}

export default GridPost;
