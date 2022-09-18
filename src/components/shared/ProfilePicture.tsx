import React from 'react';
import { useProfilePictureStyles } from './styles/useProfilePictureStyles';
import { Person } from "@material-ui/icons";

function ProfilePicture({
    size,
    image,
    isOwner
}: any) {
    const classes = useProfilePictureStyles({ size, isOwner });

    return (
        <section className={classes.section}>
            {
                image ? (
                    <div className={classes.wrapper}>
                        <img src="../images/blah.jpg" alt="User profile" className={classes.image} />
                    </div>
                ) : (
                    <div className={classes.wrapper}>
                        <Person className={classes.person} />
                    </div>
                )
            }
        </section>
    );
}

export default ProfilePicture;