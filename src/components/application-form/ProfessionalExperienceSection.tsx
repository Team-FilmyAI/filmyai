
import React from 'react';
import { Star, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface ProfessionalInfo {
  yearsOfExperience: string;
  actingEducation: string;
  rolesTypes: string[];
  industryExperience: string[];
  notableWork: string;
}

interface ProfessionalExperienceSectionProps {
  professionalInfo: ProfessionalInfo;
  setProfessionalInfo: React.Dispatch<React.SetStateAction<ProfessionalInfo>>;
}

const ProfessionalExperienceSection = ({ professionalInfo, setProfessionalInfo }: ProfessionalExperienceSectionProps) => {
  const actingEducations = ['Bachelor of Fine Arts (BFA)', 'Master of Fine Arts (MFA)', 'Drama School Certificate', 'Method Acting Certification', 'Meisner Technique', 'Self-taught', 'Workshops and Classes', 'Other'];
  const roleTypes = ['Lead', 'Supporting Lead', 'Supporting', 'Character Actor', 'Extra/Background', 'Stunt Double', 'Voice Over', 'Motion Capture'];
  const industries = ['Film', 'Television', 'Theater', 'Commercial', 'Voice Over', 'Web Series', 'Music Videos', 'Documentary', 'Live Events'];

  const handleRoleTypeSelect = (value: string) => {
    if (!professionalInfo.rolesTypes.includes(value)) {
      setProfessionalInfo(prev => ({
        ...prev,
        rolesTypes: [...prev.rolesTypes, value]
      }));
    }
  };

  const removeRoleType = (roleToRemove: string) => {
    setProfessionalInfo(prev => ({
      ...prev,
      rolesTypes: prev.rolesTypes.filter(role => role !== roleToRemove)
    }));
  };

  const handleIndustrySelect = (value: string) => {
    if (!professionalInfo.industryExperience.includes(value)) {
      setProfessionalInfo(prev => ({
        ...prev,
        industryExperience: [...prev.industryExperience, value]
      }));
    }
  };

  const removeIndustry = (industryToRemove: string) => {
    setProfessionalInfo(prev => ({
      ...prev,
      industryExperience: prev.industryExperience.filter(industry => industry !== industryToRemove)
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white flex items-center">
        <Star className="h-5 w-5 mr-2 text-orange-400" />
        Section 3 - Professional Experience
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="yearsExperience" className="text-gray-300">Years of Acting Experience *</Label>
          <Input
            id="yearsExperience"
            type="number"
            step="0.1"
            value={professionalInfo.yearsOfExperience}
            onChange={(e) => setProfessionalInfo(prev => ({ ...prev, yearsOfExperience: e.target.value }))}
            className="bg-gray-800 border-gray-700 text-white"
            placeholder="e.g., 3.5"
            required
          />
        </div>
        <div>
          <Label className="text-gray-300">Acting Education</Label>
          <Select value={professionalInfo.actingEducation} onValueChange={(value) => setProfessionalInfo(prev => ({ ...prev, actingEducation: value }))}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select Education" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {actingEducations.map(education => (
                <SelectItem key={education} value={education} className="text-white hover:bg-gray-700">{education}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Types of Roles Previously Done */}
      <div>
        <Label className="text-gray-300">Types of Roles Previously Done</Label>
        <Select onValueChange={handleRoleTypeSelect}>
          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
            <SelectValue placeholder="Select role types" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            {roleTypes.map(role => (
              <SelectItem key={role} value={role} className="text-white hover:bg-gray-700">{role}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {professionalInfo.rolesTypes.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {professionalInfo.rolesTypes.map(role => (
              <Badge key={role} variant="outline" className="border-orange-500 text-orange-400 flex items-center gap-1">
                {role}
                <X className="h-3 w-3 cursor-pointer" onClick={() => removeRoleType(role)} />
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Industry Experience */}
      <div>
        <Label className="text-gray-300">Industry Experience</Label>
        <Select onValueChange={handleIndustrySelect}>
          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
            <SelectValue placeholder="Select industries" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border-gray-700">
            {industries.map(industry => (
              <SelectItem key={industry} value={industry} className="text-white hover:bg-gray-700">{industry}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {professionalInfo.industryExperience.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {professionalInfo.industryExperience.map(industry => (
              <Badge key={industry} variant="outline" className="border-orange-500 text-orange-400 flex items-center gap-1">
                {industry}
                <X className="h-3 w-3 cursor-pointer" onClick={() => removeIndustry(industry)} />
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="notableWork" className="text-gray-300">Notable Work/Projects</Label>
        <Textarea
          id="notableWork"
          value={professionalInfo.notableWork}
          onChange={(e) => setProfessionalInfo(prev => ({ ...prev, notableWork: e.target.value }))}
          className="bg-gray-800 border-gray-700 text-white"
          rows={4}
          placeholder="Describe your notable work and projects..."
        />
      </div>
    </div>
  );
};

export default ProfessionalExperienceSection;
