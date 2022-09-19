import { Typography, Divider, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { defaultPost } from '../../data';
import { CommentIcon, LikeIcon, MoreIcon, RemoveIcon, SaveIcon, ShareIcon, UnlikeIcon } from '../../icons';
import UserCard from '../shared/UserCard';
import { usePostStyles } from './styles';
import OptionsDialog from '../shared/OptionsDialog';

function Post({ postId }: any) {
    const classes = usePostStyles();
    const [showOptionsDialog, setOptionsDialog] = React.useState(false);
    const { id, media, likes, user, caption, comments } = defaultPost;

    return (
        <div className={classes.postContainer}>
            <article className={classes.article}>
                <div className={classes.postHeader}>
                    <UserCard user={user} avatarSize={32} />
                    <MoreIcon 
                        className={classes.moreIcon}
                        onClick={() => setOptionsDialog(true)}
                    />
                </div>
                <div className={classes.postImage}>
                    <img src={media} alt="Post media" className={classes.image}/>
                </div>
                <div className={classes.postButtonsWrapper}>
                    <div className={classes.postButtons}>
                        <LikeButton />
                        <Link to={`/p/${id}`}>
                            <CommentIcon />
                        </Link>
                        <ShareIcon />
                        <SaveButton />
                    </div>
                    <Typography className={classes.likes} variant="subtitle2">
                        <span>
                            {likes === 1 ? '1 like' : `${likes} likes`}
                        </span>
                    </Typography>
                    <div className={classes.postCaptionContainer}>
                        <Typography 
                            variant="body2"
                            component="span"
                            className={classes.postCaption}
                            dangerouslySetInnerHTML={{ __html: caption }}
                        />
                        {/* comment: never */}
                        {comments.map((comment: any) => (
                            <div key={comment.id}>
                                <Link to={`/${comment.user.username}`}>
                                <Typography
                                    variant="subtitle2"
                                    component="span"
                                    className={classes.commentUsername}
                                >
                                    {comment.user.username}
                                </Typography>{" "}
                                <Typography variant="body2" component="span">
                                    {comment.content}
                                </Typography>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Typography color="textSecondary" className={classes.datePosted}>
                        5 DAYS AGO
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }} className={classes.comment}>
                        <Divider />
                        <Comment />
                    </Box>
                </div>
            </article>
            {showOptionsDialog && (
                <OptionsDialog onClose={() => setOptionsDialog(false)} />
            )}
        </div>
    );
}

function LikeButton() {
    const classes = usePostStyles();
    const [liked, setLiked] = React.useState(false);
    const Icon = liked ? UnlikeIcon : LikeIcon;
    const className = liked ? classes.liked : classes.like;
    const onClick = liked ? handleUnlike : handleLike;
  
    function handleLike() {
      console.log("like");
      setLiked(true);
    }
  
    function handleUnlike() {
      console.log("unlike");
      setLiked(false);
    }
    
    return <Icon className={className} onClick={onClick} />;
}

function SaveButton() {
    const classes = usePostStyles();
    const [saved, setSaved] = React.useState(false);
    const Icon = saved ? RemoveIcon : SaveIcon;
    const onClick = saved ? handleRemove : handleSave;
  
    function handleSave() {
      console.log("save");
      setSaved(true);
    }
  
    function handleRemove() {
      console.log("unsave");
      setSaved(false);
    }
    
    return <Icon className={classes.saveIcon} onClick={onClick} />;
}

function Comment() {
    const classes = usePostStyles();
    const [content, setContent] = React.useState("");

    return (
        <div className={classes.commentContainer}>
            <TextField
                fullWidth
                value={content}
                placeholder="Add a comment..."
                multiline
                rowsMax={2}
                rows={1}
                onChange={event => setContent(event.target.value)}
                className={classes.textField}
                InputProps={{
                    classes: {
                        root: classes.root,
                        underline: classes.underline
                    }
                }}
            />
            <Button
                color="primary"
                className={classes.commentButton}
                disabled={!content.trim()}
            >
                Post
            </Button>
        </div>
    );
}

export default Post;