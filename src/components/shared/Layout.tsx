import React from 'react';
import { useLayoutStyles } from '../../styles';

function Layout({ children }: any) {
    const classes = useLayoutStyles();

    return (
        <div className={classes.section}>
            <div className={classes.main}>
                <div className={classes.childrenWrapper}>
                    <div className={classes.children}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;