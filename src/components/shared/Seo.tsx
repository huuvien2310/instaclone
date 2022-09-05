import React from 'react';

function Seo( { title }: any ) {
    const defaultTitle = title ? `${title} · Instagram` : "Instagram";
    
    return (
        <div>
          <title>{defaultTitle}</title>
        </div>
    );
}

export default Seo;