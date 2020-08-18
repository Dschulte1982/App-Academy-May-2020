import React from 'react';
import PetInformationItem from './PetInformationItem';

const PetDetailList = props =>
    <>
      <h2>Details</h2>
      <dl>
        <PetInformationItem name="Name" value={props.pet.name}/>
        <PetInformationItem age="Age" value={props.pet.age}/>
        <PetInformationItem type="Type" value={props.pet.PetType.type}/>
      </dl>
    </>
;

export default PetDetailList;
