
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, Upload, Plus, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

interface AddRolesSectionProps {
  roles: any[];
  setRoles: (roles: any[]) => void;
}

const AddRolesSection: React.FC<AddRolesSectionProps> = ({ roles, setRoles }) => {
  const roleNames = [
    'Lead Actor/Actress', 'Supporting Actor/Actress', 'Villain', 'Comic Relief',
    'Love Interest', 'Mentor', 'Sidekick', 'Background Actor', 'Voice Actor',
    'Stunt Double', 'Child Actor', 'Teen Actor', 'Senior Actor'
  ];

  const genders = ['Male', 'Female', 'Non-binary', 'Other', 'Any'];

  const ethnicities = [
    'Caucasian', 'African American', 'Hispanic/Latino', 'Asian', 'Native American',
    'Middle Eastern', 'Pacific Islander', 'Mixed Race', 'Other', 'Any'
  ];

  const accentsLanguages = [
    'American English', 'British English', 'Australian English', 'Southern American',
    'New York Accent', 'Spanish', 'French', 'German', 'Italian', 'Russian',
    'Mandarin', 'Japanese', 'Korean', 'Hindi', 'Arabic'
  ];

  const skills = [
    'Dancing', 'Singing', 'Musical Instruments', 'Combat/Fighting', 'Horseback Riding',
    'Swimming', 'Rock Climbing', 'Acrobatics', 'Magic Tricks', 'Comedy/Improv',
    'Drama', 'Voice Acting', 'Stunts', 'Modeling', 'Public Speaking'
  ];

  const availableQuestions = [
    'Do you have experience with this type of role?',
    'Are you comfortable with intimate scenes?',
    'Do you have any physical limitations?',
    'Can you work weekends and holidays?',
    'Do you have reliable transportation?',
    'Are you willing to cut/dye your hair for the role?',
    'Do you have experience with weapons/props?',
    'Can you work in extreme weather conditions?'
  ];

  const addRole = () => {
    const newRole = {
      id: roles.length + 1,
      roleName: '',
      gender: [] as string[],
      ageRangeMin: '',
      ageRangeMax: '',
      ethnicity: [] as string[],
      characterDescription: '',
      accentLanguage: [] as string[],
      skillsRequired: [] as string[],
      compensation: '',
      numberOfOpenings: '',
      specialSkills: '',
      roleSpecificQuestions: false,
      selectedQuestions: [] as string[],
      deadlineToApply: undefined as Date | undefined
    };
    setRoles([...roles, newRole]);
  };

  const removeRole = (roleId: number) => {
    setRoles(roles.filter(role => role.id !== roleId));
  };

  const updateRole = (roleId: number, field: string, value: any) => {
    setRoles(roles.map(role => 
      role.id === roleId ? { ...role, [field]: value } : role
    ));
  };

  const handleMultiSelect = (roleId: number, field: string, value: string) => {
    const role = roles.find(r => r.id === roleId);
    const currentValues = role[field] || [];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((v: string) => v !== value)
      : [...currentValues, value];
    updateRole(roleId, field, updatedValues);
  };

  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // CSV parsing logic would go here
      console.log('CSV file uploaded:', file.name);
      // For now, just show a message
      alert('CSV upload functionality will be implemented');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-orange-400">Add Roles</h3>
        <div className="flex gap-3">
          <div>
            <input
              type="file"
              accept=".csv"
              onChange={handleCSVUpload}
              className="hidden"
              id="csv-upload"
            />
            <Button
              type="button"
              variant="outline"
              asChild
              className="border-blue-500 text-blue-400 hover:bg-blue-900"
            >
              <label htmlFor="csv-upload" className="cursor-pointer">
                <Upload className="h-4 w-4 mr-2" />
                Upload CSV
              </label>
            </Button>
          </div>
          <Button
            type="button"
            onClick={addRole}
            variant="outline"
            className="border-orange-500 text-orange-400 hover:bg-orange-900"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Role
          </Button>
        </div>
      </div>

      {roles.map((role, index) => (
        <Card key={role.id} className="bg-gray-700 border-gray-600">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg text-white">Role #{index + 1}</CardTitle>
            {roles.length > 1 && (
              <Button
                type="button"
                onClick={() => removeRole(role.id)}
                variant="outline"
                size="sm"
                className="border-red-500 text-red-400 hover:bg-red-900"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Role Name */}
            <div className="space-y-2">
              <Label className="text-white">Role Name *</Label>
              <Select value={role.roleName} onValueChange={(value) => updateRole(role.id, 'roleName', value)}>
                <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                  <SelectValue placeholder="Select role name" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  {roleNames.map((name) => (
                    <SelectItem key={name} value={name} className="text-white hover:bg-gray-700">
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Gender (Multiple Selection) */}
            <div className="space-y-2">
              <Label className="text-white">Gender * (Multiple selection allowed)</Label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {genders.map((gender) => (
                  <div key={gender} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${role.id}-${gender}`}
                      checked={role.gender.includes(gender)}
                      onCheckedChange={() => handleMultiSelect(role.id, 'gender', gender)}
                    />
                    <Label htmlFor={`${role.id}-${gender}`} className="text-sm text-gray-300">{gender}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Range */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Age Range Min *</Label>
                <Input
                  type="number"
                  value={role.ageRangeMin}
                  onChange={(e) => updateRole(role.id, 'ageRangeMin', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="Min age"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Age Range Max *</Label>
                <Input
                  type="number"
                  value={role.ageRangeMax}
                  onChange={(e) => updateRole(role.id, 'ageRangeMax', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="Max age"
                />
              </div>
            </div>

            {/* Ethnicity (Multiple Selection) */}
            <div className="space-y-2">
              <Label className="text-white">Ethnicity * (Multiple selection allowed)</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {ethnicities.map((ethnicity) => (
                  <div key={ethnicity} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${role.id}-${ethnicity}`}
                      checked={role.ethnicity.includes(ethnicity)}
                      onCheckedChange={() => handleMultiSelect(role.id, 'ethnicity', ethnicity)}
                    />
                    <Label htmlFor={`${role.id}-${ethnicity}`} className="text-sm text-gray-300">{ethnicity}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Character Description */}
            <div className="space-y-2">
              <Label className="text-white">Character Description *</Label>
              <Textarea
                value={role.characterDescription}
                onChange={(e) => updateRole(role.id, 'characterDescription', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white min-h-[80px]"
                placeholder="Describe the character..."
              />
            </div>

            {/* Accent/Language Required */}
            <div className="space-y-2">
              <Label className="text-white">Accent/Language Required (Multiple selection allowed)</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {accentsLanguages.map((accent) => (
                  <div key={accent} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${role.id}-accent-${accent}`}
                      checked={role.accentLanguage.includes(accent)}
                      onCheckedChange={() => handleMultiSelect(role.id, 'accentLanguage', accent)}
                    />
                    <Label htmlFor={`${role.id}-accent-${accent}`} className="text-sm text-gray-300">{accent}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Required */}
            <div className="space-y-2">
              <Label className="text-white">Skills Required (Multiple selection allowed)</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${role.id}-skill-${skill}`}
                      checked={role.skillsRequired.includes(skill)}
                      onCheckedChange={() => handleMultiSelect(role.id, 'skillsRequired', skill)}
                    />
                    <Label htmlFor={`${role.id}-skill-${skill}`} className="text-sm text-gray-300">{skill}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Compensation and Number of Openings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Compensation *</Label>
                <Input
                  value={role.compensation}
                  onChange={(e) => updateRole(role.id, 'compensation', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="e.g., $500/day or $5000 total"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Number of Openings *</Label>
                <Input
                  type="number"
                  value={role.numberOfOpenings}
                  onChange={(e) => updateRole(role.id, 'numberOfOpenings', e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                  placeholder="Number of positions"
                />
              </div>
            </div>

            {/* Special Skills */}
            <div className="space-y-2">
              <Label className="text-white">Special Skills</Label>
              <Textarea
                value={role.specialSkills}
                onChange={(e) => updateRole(role.id, 'specialSkills', e.target.value)}
                className="bg-gray-800 border-gray-600 text-white min-h-[60px]"
                placeholder="Any special skills or requirements..."
              />
            </div>

            {/* Role Specific Questions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`${role.id}-questions`}
                  checked={role.roleSpecificQuestions}
                  onCheckedChange={(checked) => updateRole(role.id, 'roleSpecificQuestions', checked)}
                />
                <Label htmlFor={`${role.id}-questions`} className="text-white">Add Role Specific Questions</Label>
              </div>

              {role.roleSpecificQuestions && (
                <div className="space-y-2 pl-6">
                  <Label className="text-white">Select Questions:</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {availableQuestions.map((question) => (
                      <div key={question} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${role.id}-question-${question}`}
                          checked={role.selectedQuestions.includes(question)}
                          onCheckedChange={() => handleMultiSelect(role.id, 'selectedQuestions', question)}
                        />
                        <Label htmlFor={`${role.id}-question-${question}`} className="text-sm text-gray-300">
                          {question}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Deadline to Apply */}
            <div className="space-y-2">
              <Label className="text-white">Deadline to Apply *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {role.deadlineToApply ? format(role.deadlineToApply, "PPP") : <span>Pick a deadline</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={role.deadlineToApply}
                    onSelect={(date) => updateRole(role.id, 'deadlineToApply', date)}
                    initialFocus
                    className="bg-gray-800 text-white pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AddRolesSection;
