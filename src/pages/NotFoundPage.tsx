import { Typography } from '@material-ui/core';
import React from 'react';
import Layout from '../components/shared/Layout';

function NotFoundPage() {
    return (
        <Layout>
            <Typography>
                Sorry, this page isn't available.
            </Typography>
            <Typography>
                The link you followed may be broken, or the page may have been removed.
            </Typography>
        </Layout>
    );
}

export default NotFoundPage;