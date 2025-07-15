
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Stepper from './Stepper';
import BasicInfoSection from './BasicInfoSection';
import PersonalAttributesSection from './PersonalAttributesSection';
import ProfessionalExperienceSection from './ProfessionalExperienceSection';
import MediaUploadsSection from './MediaUploadsSection';
import RoleSpecificQuestionsSection from './RoleSpecificQuestionsSection';
import SkillsCapabilitiesSection from './SkillsCapabilitiesSection';
import FormNavigation from './FormNavigation';
import FormStepContent from './FormStepContent';

const ApplicationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const stepLabels = [
    'Basic Info',
    'Personal',
    'Experience',
    'Media',
    'Role Questions',
    'Skills & Consent'
  ];

  // Section 1 - Basic Profile Information
  const [basicInfo, setBasicInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
    country: '',
    state: '',
    city: '',
    currentLocationAvailable: '',
    currentLocation: ''
  });

  // Section 2 - Personal Attributes
  const [personalInfo, setPersonalInfo] = useState({
    dob: undefined as Date | undefined,
    age: '',
    genderIdentity: '',
    heightUnit: 'ft',
    heightValue: '',
    weightUnit: 'lbs',
    weightValue: '',
    eyeColor: '',
    hairColor: '',
    ethnicity: '',
    languagesSpoken: [] as { language: string; fluency: string }[],
    accentsKnown: [] as string[]
  });

  // Section 3 - Professional Experience
  const [professionalInfo, setProfessionalInfo] = useState({
    yearsOfExperience: '',
    actingEducation: '',
    rolesTypes: [] as string[],
    industryExperience: [] as string[],
    notableWork: ''
  });

  // Section 4 - Media Uploads
  const [mediaUploads, setMediaUploads] = useState({
    resume: null as File | null,
    headshots: [] as File[],
    demoReel: null as File | null,
    demoReelUrl: '',
    additionalMedia: [] as { file: File; description: string }[]
  });

  // Section 5 - Role Specific Questions
  const [roleQuestions, setRoleQuestions] = useState({
    availableOnShootDate: '',
    willingToTravel: '',
    scheduleConflicts: '',
    conflictDetails: '',
    whyInterested: '',
    characterRelation: '',
    relevantExperience: '',
    expectedPay: ''
  });

  // Section 6 - Skills and Capabilities
  const [skillsInfo, setSkillsInfo] = useState({
    actingSkills: [] as string[],
    otherTalents: [] as string[],
    licenses: [] as { name: string; issuedDate: Date | undefined; link: string; file: File | null }[],
    singingLanguages: [] as string[]
  });

  // Consents Section
  const [consents, setConsents] = useState({
    termsAccepted: false,
    aiProcessingConsent: false
  });

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    console.log('Form saved at step:', currentStep);
    // Save current progress
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!consents.termsAccepted || !consents.aiProcessingConsent) {
      alert('Please accept all required consents to proceed.');
      return;
    }

    console.log('Application submitted:', {
      basicInfo,
      personalInfo,
      professionalInfo,
      mediaUploads,
      roleQuestions,
      skillsInfo,
      consents
    });
    
    alert('Application submitted successfully!');
    navigate(`/role/${id}`);
  };

  const formProps = {
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
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-400 mb-2">
            Apply for Role
          </h1>
          <p className="text-gray-300">Complete your application step by step</p>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <Stepper 
            currentStep={currentStep} 
            totalSteps={6} 
            stepLabels={stepLabels} 
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Current Step Content */}
          <div className="bg-gray-800 rounded-lg p-6">
            <FormStepContent {...formProps} />
          </div>

          {/* Navigation Buttons */}
          <FormNavigation
            currentStep={currentStep}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSave={handleSave}
            onCancel={() => navigate(`/role/${id}`)}
          />
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
