import React, {useEffect, useState} from 'react';
import './Statistic.scss'
import IconButton from "../IconButton/IconButton";
import CirleStatistics from "../CirleStatistics/CirleStatistics";


const Statistic = () => {
    const[percentLeft,setPercentLeft]=useState(0)
    const[percentRight,setPercentRight]=useState(0)

    useEffect(()=>{
        const getProcent=(percent)=>percentLeft===100?0:percent+1

        const leftInterval=setInterval(()=>{
            setPercentLeft((percent)=>getProcent(percent))
        },200)

        const rightInterval=setInterval(()=>{
            setPercentRight((percent)=>getProcent(percent))
        },200)

        return ()=>{
            clearInterval(leftInterval)
            clearInterval(rightInterval)
        }
    })

    const onShare = () =>{
        alert('ON SHARE')
    }
    return (
        <div className="Statistic">
            <div className="Statistic__label">YOUR MONEY</div>
            <div className="Statistic_2col">
            <div className="Statistic__balance">$898,00</div>
            <IconButton icon="share" onClick={onShare}/>
            </div>
            <div className="Statistic__label">MONEY SPENT</div>
            <div className="Statistic_2col">
                <CirleStatistics
                    label="last month"
                    percent={percentLeft}
                    disabled
                >$208,00</CirleStatistics>
                <CirleStatistics
                    label="this month"
                    percent={percentRight}
                >$328,00</CirleStatistics>
            </div>
        </div>
    );
};

export default Statistic;