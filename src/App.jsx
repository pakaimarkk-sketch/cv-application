import { useState } from "react";

import { GeneralInfo } from "./components/GeneralInfo";
import { EducationInfo } from "./components/EducationInfo";
import { ExperienceInfo } from "./components/ExperienceInfo";
import { CVPreview } from "./components/CVPreview";

export function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isEditing, setIsEditing] = useState(true);

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "",
    title: "",
    from: "",
    until: "",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });

  function handleNext() {
    setCurrentStep((step) => step + 1);
  }

  function handlePrevious() {
    setCurrentStep((step) => step - 1);
  }

  function handleChange(event, setter) {
    const { name, value } = event.target;

    setter((currentInfo) => ({
      ...currentInfo,
      [name]: value,
    }));
  }

  function handleSave() {
    setCurrentStep(3);
  }

  function handleEdit() {
    setCurrentStep(0);
  }

  return (
    <main>
      {currentStep === 0 && (
        <GeneralInfo
          data={generalInfo}
          onChange={(event) => handleChange(event, setGeneralInfo)}
          onNext={handleNext}
        />
      )}

      {currentStep === 1 && (
        <EducationInfo
          data={educationInfo}
          onChange={(event) => handleChange(event, setEducationInfo)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}

      {currentStep === 2 && (
        <ExperienceInfo
          data={experienceInfo}
          onChange={(event) => handleChange(event, setExperienceInfo)}
          onPrevious={handlePrevious}
          onSave={handleSave}
        />
      )}

      {currentStep === 3 && (
        <CVPreview
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
          onEdit={handleEdit}
        />
      )}
    </main>
  );
}
