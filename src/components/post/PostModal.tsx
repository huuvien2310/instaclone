import React from "react";
import Modal from "react-modal";
import { usePostModalStyles } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { CloseIcon } from "../../icons";
import Post from "./Post";

function PostModal() {
  const classes = usePostModalStyles();
  const navigate = useNavigate();
  const { postId } = useParams();

  return (
    <>
      <Modal
        isOpen
        ariaHideApp={false}
        overlayClassName={classes.overlay}
        onRequestClose={() => navigate(-1)}
        style={{
          content: {
            display: "flex",
            alignItems: "center",
            maxWidth: 935,
            width: "100%",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            margin: 0,
            padding: 0,
            overflow: "none",
            WebkitOverflowScrolling: "touch",
          },
        }}
      >
        <Post id={postId} />
      </Modal>
      <div onClick={() => navigate(-1)} className={classes.close}>
        <CloseIcon />
      </div>
    </>
  );
}

export default PostModal;
