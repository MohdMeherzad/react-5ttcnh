import React from 'react';

function MedicalTreatment(props){
  return (
    <h4>
        TreatId: {props.TreatId},
        TypeCourseId: {props.TypeCourseId},
        Type: {props.Type},
        Category {props.Category},
        Name: {props.Name},
        StartDate: {props.StartDate}
    </h4>
  );
}
export default MedicalTreatment;
