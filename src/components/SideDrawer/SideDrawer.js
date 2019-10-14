import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerclasses = 'side_drawer';
    if (props.show){
        drawerclasses = 'side_drawer open';
    }
    return (
        <nav className={drawerclasses}>
            <ul>
                <li><a href="/">Horóscopo</a></li>
                <li><a href="/">Tarot</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;