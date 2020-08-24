import React from 'react';
import StaffBox from './StaffBox';

const StaffPage = props => {
    console.log(props)
    return (
        <>
          { props.staff.map(person => <StaffBox key={person.id} {...person} />) }
        </>
    )
}

export default StaffPage;
