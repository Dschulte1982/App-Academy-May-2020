import React from 'react';

const Homepage = (props) => {
    return (
        <>
          <h1>{props.company.name}</h1>
          <h2>{props.company.established}</h2>
          <h3>{props.company.description}</h3>
        </>
    )
}

export default Homepage;
