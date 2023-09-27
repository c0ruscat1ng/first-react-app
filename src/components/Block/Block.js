import React from 'react';
import './Block.scss'
const Block = ({children,className,onClick,big}) => {
    let cls="Block"

    if(className){
        cls+=` ${className}`
    }

    if(big){
        cls+=` big`
    }
    return (
        <div className={cls} onClick={onClick}>
            {children}
        </div>
    );
};

export default Block;