import { useState } from "react";
import "./styles/forms.css";
import "./styles/global.css";
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

  const [educationInfo, setEducationInfo] = useState([
    {
      school: "",
      title: "",
      from: "",
      until: "",
    },
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    {
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      until: "",
    },
  ]);

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

  function handleEducationChange(index, event) {
    const { name, value } = event.target;

    setEducationInfo((currentInfo) =>
      currentInfo.map((education, currentIndex) =>
        currentIndex === index ? { ...education, [name]: value } : education,
      ),
    );
  }

  function handleAddEducation() {
    setEducationInfo((currentInfo) => [
      ...currentInfo,
      {
        school: "",
        title: "",
        from: "",
        until: "",
      },
    ]);
  }

  function handleRemoveEducation(indexToRemove) {
    setEducationInfo((currentInfo) =>
      currentInfo.filter((_, index) => index !== indexToRemove),
    );
  }

  function handleExperienceChange(index, event) {
    const { name, value } = event.target;

    setExperienceInfo((currentInfo) =>
      currentInfo.map((experience, currentIndex) =>
        currentIndex === index ? { ...experience, [name]: value } : experience,
      ),
    );
  }

  function handleAddExperience() {
    setExperienceInfo((currentInfo) => [
      ...currentInfo,
      {
        company: "",
        position: "",
        responsibilities: "",
        from: "",
        until: "",
      },
    ]);
  }

  function handleRemoveExperience(indexToRemove) {
    setExperienceInfo((currentInfo) =>
      currentInfo.filter((_, index) => index !== indexToRemove),
    );
  }

  function handleSave() {
    setCurrentStep(3);
  }

  function handleEdit() {
    setCurrentStep(1);
  }

  function handlePrint() {
    window.print();
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
          onChange={handleEducationChange}
          onAdd={handleAddEducation}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onRemove={handleRemoveEducation}
        />
      )}

      {currentStep === 2 && (
        <ExperienceInfo
          data={experienceInfo}
          onChange={handleExperienceChange}
          onAdd={handleAddExperience}
          onPrevious={handlePrevious}
          onSave={handleSave}
          onRemove={handleRemoveExperience}
        />
      )}

      {currentStep === 3 && (
        <CVPreview
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
          onEdit={handleEdit}
          handlePrint={handlePrint}
        />
      )}
    </main>
  );
}
