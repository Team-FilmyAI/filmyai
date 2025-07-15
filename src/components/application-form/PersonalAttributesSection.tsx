
import React, { useCallback } from 'react';
import { Heart } from 'lucide-react';
import DateOfBirthField from './personal-attributes/DateOfBirthField';
import PhysicalAttributesSection from './personal-attributes/PhysicalAttributesSection';
import LanguagesSection from './personal-attributes/LanguagesSection';
import AccentsSection from './personal-attributes/AccentsSection';

interface PersonalInfo {
  dob: Date | undefined;
  age: string;
  genderIdentity: string;
  heightUnit: string;
  heightValue: string;
  weightUnit: string;
  weightValue: string;
  eyeColor: string;
  hairColor: string;
  ethnicity: string;
  languagesSpoken: { language: string; fluency: string }[];
  accentsKnown: string[];
}

interface PersonalAttributesSectionProps {
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
}

const PersonalAttributesSection = ({ personalInfo, setPersonalInfo }: PersonalAttributesSectionProps) => {
  const calculateAge = useCallback((birthDate: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age.toString();
  }, []);

  const handleDateOfBirthChange = (date: Date | undefined) => {
    setPersonalInfo(prev => ({
      ...prev,
      dob: date,
      age: date ? calculateAge(date) : ''
    }));
  };

  const handlePhysicalAttributeUpdate = (field: string, value: string) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLanguagesUpdate = (languages: { language: string; fluency: string }[]) => {
    setPersonalInfo(prev => ({
      ...prev,
      languagesSpoken: languages
    }));
  };

  const handleAccentsUpdate = (accents: string[]) => {
    setPersonalInfo(prev => ({
      ...prev,
      accentsKnown: accents
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white flex items-center">
        <Heart className="h-5 w-5 mr-2 text-orange-400" />
        Section 2 - Personal Attributes
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DateOfBirthField
          dob={personalInfo.dob}
          age={personalInfo.age}
          onDateChange={handleDateOfBirthChange}
        />
        
        <PhysicalAttributesSection
          genderIdentity={personalInfo.genderIdentity}
          heightUnit={personalInfo.heightUnit}
          heightValue={personalInfo.heightValue}
          weightUnit={personalInfo.weightUnit}
          weightValue={personalInfo.weightValue}
          eyeColor={personalInfo.eyeColor}
          hairColor={personalInfo.hairColor}
          ethnicity={personalInfo.ethnicity}
          onUpdate={handlePhysicalAttributeUpdate}
        />
      </div>

      <LanguagesSection
        languagesSpoken={personalInfo.languagesSpoken}
        onLanguagesUpdate={handleLanguagesUpdate}
      />

      <AccentsSection
        accentsKnown={personalInfo.accentsKnown}
        onAccentsUpdate={handleAccentsUpdate}
      />
    </div>
  );
};

export default PersonalAttributesSection;
