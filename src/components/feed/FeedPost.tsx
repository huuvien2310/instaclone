import React from 'react';
import UserCard from '../shared/UserCard';
import { Link } from 'react-router-dom';
import {
    MoreIcon,
    CommentIcon,
    ShareIcon,
    UnlikeIcon,
    LikeIcon,
    RemoveIcon,
    SaveIcon
} from "../../icons";
import {
    Typography,
    Button,
    Hidden,
    Divider,
    TextField
} from "@material-ui/core";
import FollowSuggestions from '../shared/FollowSuggestions';
import OptionsDialog from '../shared/OptionsDialog';

function FeedPost( { post, index}: any ) {

    return (
        <>
            <article
                style={{ border: "1px solid #e6e6e6", background: "#ffffff" }}
            >
                <div className='p-5 bg-white border-b border-gray-primary'>
                    <UserCard />
                    <MoreIcon 
                        style={{ marginLeft: "auto" }}
                        onClick={() => console.log('more')}
                    />
                </div>
            </article>
        </>
    );
}

export default FeedPost;