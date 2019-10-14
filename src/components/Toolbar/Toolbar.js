import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_button">
                <DrawerToggleButton click={props.drawerclickhandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">Logo</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">Horóscopo</a></li>
                    <li><a href="/">Tarot</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;