import React from 'react';
import { Award, Upload, Calendar, X, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface SkillsInfo {
  actingSkills: string[];
  otherTalents: string[];
  licenses: { name: string; issuedDate: Date | undefined; link: string; file: File | null }[];
  singingLanguages: string[];
}

interface Consents {
  termsAccepted: boolean;
  aiProcessingConsent: boolean;
}

interface SkillsCapabilitiesSectionProps {
  skillsInfo: SkillsInfo;
  setSkillsInfo: React.Dispatch<React.SetStateAction<SkillsInfo>>;
  consents: Consents;
  setConsents: React.Dispatch<React.SetStateAction<Consents>>;
}

const SkillsCapabilitiesSection = ({ skillsInfo, setSkillsInfo, consents, setConsents }: SkillsCapabilitiesSectionProps) => {
  const actingSkills = ['Method Acting', 'Meisner Technique', 'Classical Theater', 'Improvisation', 'Voice Acting', 'Physical Theater', 'Comedy', 'Drama', 'Action', 'Horror'];
  const otherTalents = ['Singing', 'Dancing', 'Musical Instruments', 'Martial Arts', 'Stunts', 'Magic', 'Juggling', 'Acrobatics', 'Horse Riding', 'Swimming', 'Sports'];
  const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Mandarin', 'Japanese', 'Korean', 'Hindi', 'Arabic', 'Russian'];

  const handleActingSkillSelect = (value: string) => {
    if (!skillsInfo.actingSkills.includes(value)) {
      setSkillsInfo(prev => ({
        ...prev,
        actingSkills: [...prev.actingSkills, value]
      }));
    }
  };

  const removeActingSkill = (skillToRemove: string) => {
    setSkillsInfo(prev => ({
      ...prev,
      actingSkills: prev.actingSkills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleTalentSelect = (value: string) => {
    if (!skillsInfo.otherTalents.includes(value)) {
      setSkillsInfo(prev => ({
        ...prev,
        otherTalents: [...prev.otherTalents, value]
      }));
    }
  };

  const removeTalent = (talentToRemove: string) => {
    setSkillsInfo(prev => ({
      ...prev,
      otherTalents: prev.otherTalents.filter(talent => talent !== talentToRemove)
    }));
  };

  const handleSingingLanguageSelect = (value: string) => {
    if (!skillsInfo.singingLanguages.includes(value)) {
      setSkillsInfo(prev => ({
        ...prev,
        singingLanguages: [...prev.singingLanguages, value]
      }));
    }
  };

  const removeSingingLanguage = (languageToRemove: string) => {
    setSkillsInfo(prev => ({
      ...prev,
      singingLanguages: prev.singingLanguages.filter(language => language !== languageToRemove)
    }));
  };

  const addLicense = () => {
    setSkillsInfo(prev => ({
      ...prev,
      licenses: [...prev.licenses, { name: '', issuedDate: undefined, link: '', file: null }]
    }));
  };

  const removeLicense = (index: number) => {
    setSkillsInfo(prev => ({
      ...prev,
      licenses: prev.licenses.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Award className="h-5 w-5 mr-2 text-orange-400" />
          Section 6 - Skills and Capabilities
        </h3>
        
        {/* Acting Skills */}
        <div>
          <Label className="text-gray-300">Acting Skills</Label>
          <Select onValueChange={handleActingSkillSelect}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select acting skills" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {actingSkills.map(skill => (
                <SelectItem key={skill} value={skill} className="text-white hover:bg-gray-700">{skill}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {skillsInfo.actingSkills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {skillsInfo.actingSkills.map(skill => (
                <Badge key={skill} variant="outline" className="border-orange-500 text-orange-400 flex items-center gap-1">
                  {skill}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeActingSkill(skill)} />
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Other Talents */}
        <div>
          <Label className="text-gray-300">Other Talents</Label>
          <Select onValueChange={handleTalentSelect}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select other talents" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {otherTalents.map(talent => (
                <SelectItem key={talent} value={talent} className="text-white hover:bg-gray-700">{talent}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {skillsInfo.otherTalents.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {skillsInfo.otherTalents.map(talent => (
                <Badge key={talent} variant="outline" className="border-orange-500 text-orange-400 flex items-center gap-1">
                  {talent}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeTalent(talent)} />
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Licenses/Certifications */}
        <div>
          <div className="flex justify-between items-center">
            <Label className="text-gray-300">License/Certifications</Label>
            <Button type="button" onClick={addLicense} size="sm" variant="outline" className="border-orange-500 text-orange-400">
              Add License
            </Button>
          </div>
          {skillsInfo.licenses.map((license, index) => (
            <div key={index} className="space-y-2 p-4 border border-gray-700 rounded-lg mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Input
                  value={license.name}
                  onChange={(e) => {
                    const updated = [...skillsInfo.licenses];
                    updated[index].name = e.target.value;
                    setSkillsInfo(prev => ({ ...prev, licenses: updated }));
                  }}
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="License/Certification Name"
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "justify-start text-left font-normal bg-gray-800 border-gray-700 text-white",
                        !license.issuedDate && "text-gray-400"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {license.issuedDate ? format(license.issuedDate, "PPP") : "Issue Date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={license.issuedDate}
                      onSelect={(date) => {
                        const updated = [...skillsInfo.licenses];
                        updated[index].issuedDate = date;
                        setSkillsInfo(prev => ({ ...prev, licenses: updated }));
                      }}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Input
                value={license.link}
                onChange={(e) => {
                  const updated = [...skillsInfo.licenses];
                  updated[index].link = e.target.value;
                  setSkillsInfo(prev => ({ ...prev, licenses: updated }));
                }}
                className="bg-gray-800 border-gray-700 text-white"
                placeholder="Certification Link (optional)"
              />
              <div className="flex gap-2">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0] && e.target.files[0].size <= 5 * 1024 * 1024) {
                      const updated = [...skillsInfo.licenses];
                      updated[index].file = e.target.files[0];
                      setSkillsInfo(prev => ({ ...prev, licenses: updated }));
                    } else {
                      alert('File must be PDF under 5MB');
                    }
                  }}
                  className="hidden"
                  id={`license-file-${index}`}
                />
                <label
                  htmlFor={`license-file-${index}`}
                  className="flex items-center justify-center px-4 py-2 border border-gray-600 rounded cursor-pointer hover:border-orange-400 transition-colors"
                >
                  <Upload className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">Upload Certificate</span>
                </label>
                <Button type="button" onClick={() => removeLicense(index)} size="sm" variant="destructive">
                  Remove
                </Button>
              </div>
              {license.file && (
                <Badge variant="outline" className="border-orange-500 text-orange-400">
                  {license.file.name}
                </Badge>
              )}
            </div>
          ))}
        </div>

        {/* Languages for Singing/Voiceover */}
        <div>
          <Label className="text-gray-300">Languages for Singing/Voiceover</Label>
          <Select onValueChange={handleSingingLanguageSelect}>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select languages for singing/voiceover" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {languages.map(language => (
                <SelectItem key={language} value={language} className="text-white hover:bg-gray-700">{language}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {skillsInfo.singingLanguages.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {skillsInfo.singingLanguages.map(language => (
                <Badge key={language} variant="outline" className="border-orange-500 text-orange-400 flex items-center gap-1">
                  {language}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeSingingLanguage(language)} />
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Consents Section */}
      <div className="space-y-4 border-t border-gray-700 pt-6">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <CheckCircle className="h-5 w-5 mr-2 text-orange-400" />
          Consents and Submissions
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <Checkbox
              checked={consents.termsAccepted}
              onCheckedChange={(checked) => setConsents(prev => ({ ...prev, termsAccepted: !!checked }))}
              className="mr-3 mt-1"
              required
            />
            <div>
              <span className="text-white">
                I agree to the{' '}
                <a href="#" className="text-orange-400 underline hover:text-orange-300">
                  Terms and Conditions
                </a>{' '}
                *
              </span>
            </div>
          </div>
          
          <div className="flex items-start">
            <Checkbox
              checked={consents.aiProcessingConsent}
              onCheckedChange={(checked) => setConsents(prev => ({ ...prev, aiProcessingConsent: !!checked }))}
              className="mr-3 mt-1"
              required
            />
            <div>
              <span className="text-white">
                I consent to the use of my data for AI processing and analysis to improve casting decisions *
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCapabilitiesSection;
