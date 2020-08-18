import React from 'react';

const PetInformationItem = props =>
    <>
      <dt>{props.name}</dt>
      <dt>{props.age}</dt>
      <dt>{props.type}</dt>
      <dd>{props.value}</dd>
    </>
;

export default PetInformationItem;
