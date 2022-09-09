import React from 'react';
import { Helmet } from 'react-helmet';

function Seo( { title }: any ) {
    const defaultTitle = title ? `${title} · Instagram` : "Instagram";
    
    return (
        <Helmet>
          <title>{defaultTitle}</title>
        </Helmet>
    );
}

export default Seo;