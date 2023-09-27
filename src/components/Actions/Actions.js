import React from 'react';
import Block from "../Block/Block";
import './Actions.scss'

const Actions = () => {
    const onCopy=()=>{
        alert('ON COPY')
    }
    const onShow=()=>{
        alert('ON SHOW')
    }
    return (
        <div className="Actions">
            <Block className="action" onClick={onCopy}>
                <i className="icon-twocirls"/>
                <span>COPY CARD NUMBER</span>
            </Block>
            <Block className="action" onClick={onShow}>
                <i className="icon-twocircles"/>
                <span>SHOW CVV</span>
            </Block>
        </div>
    );
};

export default Actions;