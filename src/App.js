import React from 'react';
import './style.css';
import MedicalTreatment from './MedicalTreatment';

export default function App() {
  return (
    <div>
      <MedicalTreatment
        TreatId="001"
        TypeCourseId="123"
        Type="2166"
        Category="Vaccines"
        Name="Zarif"
        StartDate="21.12.2021"
      >
      </MedicalTreatment>
    </div>
  );
}
