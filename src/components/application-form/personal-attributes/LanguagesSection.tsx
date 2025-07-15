
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Language {
  language: string;
  fluency: string;
}

interface LanguagesSectionProps {
  languagesSpoken: Language[];
  onLanguagesUpdate: (languages: Language[]) => void;
}

const LanguagesSection = ({ languagesSpoken, onLanguagesUpdate }: LanguagesSectionProps) => {
  const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Mandarin', 'Japanese', 'Korean', 'Hindi', 'Arabic', 'Russian'];
  const fluencyLevels = ['Native', 'Fluent', 'Advanced', 'Intermediate', 'Basic'];

  const addLanguage = () => {
    onLanguagesUpdate([...languagesSpoken, { language: '', fluency: '' }]);
  };

  const removeLanguage = (index: number) => {
    onLanguagesUpdate(languagesSpoken.filter((_, i) => i !== index));
  };

  const updateLanguage = (index: number, field: 'language' | 'fluency', value: string) => {
    const updated = [...languagesSpoken];
    updated[index][field] = value;
    onLanguagesUpdate(updated);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <Label className="text-gray-300">Languages Spoken</Label>
        <Button type="button" onClick={addLanguage} size="sm" variant="outline" className="border-orange-500 text-orange-400">
          Add Language
        </Button>
      </div>
      {languagesSpoken.map((lang, index) => (
        <div key={index} className="flex gap-2 mt-2">
          <Select value={lang.language} onValueChange={(value) => updateLanguage(index, 'language', value)}>
            <SelectTrigger className="flex-1 bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {languages.map(language => (
                <SelectItem key={language} value={language} className="text-white hover:bg-gray-700">{language}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={lang.fluency} onValueChange={(value) => updateLanguage(index, 'fluency', value)}>
            <SelectTrigger className="flex-1 bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Fluency Level" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              {fluencyLevels.map(level => (
                <SelectItem key={level} value={level} className="text-white hover:bg-gray-700">{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="button" onClick={() => removeLanguage(index)} size="sm" variant="destructive">
            <X className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default LanguagesSection;
