import React from 'react';
import { useUserCardStyles } from "../../styles";
import { Link } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";
import { getDefaultUser } from '../../data';

function UserCard({ avatarSize = 44, user = getDefaultUser() }) {
    const classes = useUserCardStyles({ avatarSize });
    const { profile_image, username } = user;

    return (
        <div className={classes.container}>
            <Link to={`/${username}`}>
            <Avatar
                src={profile_image}
                alt="User avatar"
                className={classes.avatar}
            />
        </Link>
        <div className={classes.nameWrapper}>
            <Link to={`/${username}`}>
            <Typography variant="subtitle2" className={classes.typography}>
                {username}
            </Typography>
            </Link>
            <Typography
                color="textSecondary"
                variant="body2"
                className={classes.typography}
            >
            </Typography>
        </div>
        </div>
    );
}

export default UserCard;