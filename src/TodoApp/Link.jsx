import React from 'react';
import {} from 'semantic-ui-react';


const Link = ({active, children, onFilterLinkClick}) => {
    return (
        <>
            {active ? <span>{children}</span> :
                <a href="#" onClick={onFilterLinkClick}>
                    {children}
                </a>
            }
        </>
    );
}

export default Link;