
import React from 'react';
import BasicInfoSection from './BasicInfoSection';
import PersonalAttributesSection from './PersonalAttributesSection';
import ProfessionalExperienceSection from './ProfessionalExperienceSection';
import MediaUploadsSection from './MediaUploadsSection';
import RoleSpecificQuestionsSection from './RoleSpecificQuestionsSection';
import SkillsCapabilitiesSection from './SkillsCapabilitiesSection';

interface FormStepContentProps {
  currentStep: number;
  basicInfo: any;
  setBasicInfo: React.Dispatch<React.SetStateAction<any>>;
  personalInfo: any;
  setPersonalInfo: React.Dispatch<React.SetStateAction<any>>;
  professionalInfo: any;
  setProfessionalInfo: React.Dispatch<React.SetStateAction<any>>;
  mediaUploads: any;
  setMediaUploads: React.Dispatch<React.SetStateAction<any>>;
  roleQuestions: any;
  setRoleQuestions: React.Dispatch<React.SetStateAction<any>>;
  skillsInfo: any;
  setSkillsInfo: React.Dispatch<React.SetStateAction<any>>;
  consents: any;
  setConsents: React.Dispatch<React.SetStateAction<any>>;
}

const FormStepContent = ({
  currentStep,
  basicInfo,
  setBasicInfo,
  personalInfo,
  setPersonalInfo,
  professionalInfo,
  setProfessionalInfo,
  mediaUploads,
  setMediaUploads,
  roleQuestions,
  setRoleQuestions,
  skillsInfo,
  setSkillsInfo,
  consents,
  setConsents
}: FormStepContentProps) => {
  switch (currentStep) {
    case 1:
      return <BasicInfoSection basicInfo={basicInfo} setBasicInfo={setBasicInfo} />;
    case 2:
      return <PersonalAttributesSection personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />;
    case 3:
      return <ProfessionalExperienceSection professionalInfo={professionalInfo} setProfessionalInfo={setProfessionalInfo} />;
    case 4:
      return <MediaUploadsSection mediaUploads={mediaUploads} setMediaUploads={setMediaUploads} />;
    case 5:
      return <RoleSpecificQuestionsSection roleQuestions={roleQuestions} setRoleQuestions={setRoleQuestions} />;
    case 6:
      return <SkillsCapabilitiesSection skillsInfo={skillsInfo} setSkillsInfo={setSkillsInfo} consents={consents} setConsents={setConsents} />;
    default:
      return null;
  }
};

export default FormStepContent;
