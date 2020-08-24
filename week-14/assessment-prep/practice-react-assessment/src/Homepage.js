import React from 'react';
import YourName from './YourName';

const Homepage = props => {
    return (
        <>
          <h1>{props.company.name}</h1>
          <h2>{props.company.established}</h2>
          <h3>{props.company.description}</h3>
          <YourName />
        </>
    )
}

export default Homepage;
