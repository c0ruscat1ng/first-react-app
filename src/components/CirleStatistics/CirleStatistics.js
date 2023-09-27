import React from 'react';
import './CirleStatistics.scss'

const CirleStatistics = ({children,label,percent,disabled}) => {
    const totalPercent=314
    const _percent=314/100*percent
    let circleClass=`CirleStatistics__circle-primary`
    let contentClass='CirleStatistics__content'

    if(disabled){
        circleClass=`CirleStatistics__circle-disabled`
        contentClass+=" disabled"
    }

    return (
        <div className="CirleStatistics">
            <div className="CirleStatistics__circle">
                <svg viewBox="0 0 106 106">
                    <linearGradient id="grey" x1="0" y1="0" x2="0" y2="100%">
                        <stop offset="0%" stopColor="#5E5A5A"/>
                        <stop offset="100%" stopColor="#BEC7D7"/>
                    </linearGradient>
                    <linearGradient id="primary" x1="0" y1="0" x2="0" y2="100%">
                        <stop offset="0%" stopColor="#614AD3"/>
                        <stop offset="100%" stopColor="#E42C64"/>
                    </linearGradient>
                    <circle r="50" cx="50%" cy="50%"/>
                    <circle className={circleClass}
                            style={{strokeDasharray:`${_percent}px ${totalPercent}px`
                    }}
                            r="50" cx="50%" cy="50%"
                    />
                </svg>
                <div className={contentClass}>
                    {children}</div>
            </div>
            <div className="CirleStatistics__label">{label}</div>
        </div>
    );
};

export default CirleStatistics;