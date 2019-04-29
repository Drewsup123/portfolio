import React from 'react';
import './AnimatedBtn.css';

export default function AnimatedBtn(props){
    return(
        <div className='btn-cont' style={{cursor: 'pointer'}}>
            <div className='btn' >
            {props.title}
            <span className='line-1'></span>
            <span className='line-2'></span>
            <span className='line-3'></span>
            <span className='line-4'></span>
            </div>
        </div>
    )
}