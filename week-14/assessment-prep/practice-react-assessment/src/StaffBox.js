import React from 'react';

const StaffBox = props => {
    return (
        <div>
            <div className='staff-box__name'>{props.name}</div>
            <div className='staff-box__title'>{props.title}</div>
            <div className='staff-box__photo'>{props.photo}</div>
        </div>
    )
};

export default StaffBox;
