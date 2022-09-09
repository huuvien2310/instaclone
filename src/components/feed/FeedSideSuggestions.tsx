import { Paper, Typography } from '@material-ui/core';
import React from 'react';
import UserCard from "../shared/UserCard";
import { LoadingIcon } from '../../icons';
import { useFeedSideSuggestionsStyles } from '../../styles';
import FollowButton from '../shared/FollowButton';
import { getDefaultUser } from "../../data";

function FeedSideSuggestions() {
    const classes = useFeedSideSuggestionsStyles();

    let loading = false;

    return (
        <article className={classes.article}>
            <Paper className={classes.paper}>
                <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    component="h2"
                    align="left"
                    gutterBottom
                    className={classes.typography}
                >
                    Suggestions for you
                </Typography>
                {loading ? (
                        <LoadingIcon /> 
                ) : (
                    Array.from({ length: 5 }, () => getDefaultUser()).map((user) => (
                        <div className={classes.card}>
                            <UserCard key={user.id} user={user} />
                            <FollowButton side/>
                        </div>
                    ))
                )}
            </Paper>
        </article>
    );
}

export default FeedSideSuggestions;