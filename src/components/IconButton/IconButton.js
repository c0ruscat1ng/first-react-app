import React from 'react';
import './IconButton.scss'

const IconButton = ({icon,onClick}) => {
    return (
        <div className="IconButton" onClick={onClick}>
            <i className={`icon-${icon}`}/>
        </div>
    );
};

export default IconButton;