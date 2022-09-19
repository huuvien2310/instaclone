import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { defaultUser, getDefaultPost } from '../../data';
import { LoadingLargeIcon } from '../../icons';
import GridPost from '../shared/GridPost';
import { useMorePostsFromUserStyles } from './styles';

function MorePostsFromUser() {
    const classes = useMorePostsFromUserStyles();
    const [loading, setLoading] = React.useState(true);

    setTimeout(() => setLoading(false), 1000);
    
    return (
        <div className={classes.container}>
            <Typography
                color="textSecondary"
                variant="subtitle2"
                component="h2"
                gutterBottom
                className={classes.typography}
            >
                More Post from {" "}
                <Link to={`/${defaultUser.username}`} className={classes.link}>
                    {defaultUser.username}
                </Link>
            </Typography>
            {loading ? (
                <LoadingLargeIcon />
            ) : (
                <article className={classes.article}>
                    <div className={classes.postContainer}>
                        {Array.from({ length: 6 }, () => getDefaultPost()).map(post => (
                            <GridPost key={post.id} post={post}/>
                        ))}
                    </div>
                </article>
            )}
        </div>
    );
}

export default MorePostsFromUser;