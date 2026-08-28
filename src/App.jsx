import { useState } from "react";

import { GeneralInfo } from "./components/GeneralInfo";
import { EducationInfo } from "./components/EducationInfo";
import { ExperienceInfo } from "./components/ExperienceInfo";

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
    date: "",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });

  return <main></main>;
}
