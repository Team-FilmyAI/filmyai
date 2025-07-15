
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PhysicalAttributesSectionProps {
  genderIdentity: string;
  heightUnit: string;
  heightValue: string;
  weightUnit: string;
  weightValue: string;
  eyeColor: string;
  hairColor: string;
  ethnicity: string;
  onUpdate: (field: string, value: string) => void;
}

const PhysicalAttributesSection = ({
  genderIdentity,
  heightUnit,
  heightValue,
  weightUnit,
  weightValue,
  eyeColor,
  hairColor,
  ethnicity,
  onUpdate
}: PhysicalAttributesSectionProps) => {
  const genders = ['Male', 'Female', 'Non-binary', 'Transgender Male', 'Transgender Female', 'Gender Fluid', 'Prefer not to say', 'Other'];
  const eyeColors = ['Brown', 'Blue', 'Green', 'Hazel', 'Gray', 'Amber', 'Violet', 'Heterochromia'];
  const hairColors = ['Black', 'Brown', 'Blonde', 'Red', 'Auburn', 'Gray', 'White', 'Salt and Pepper', 'Other'];
  const ethnicities = ['Caucasian', 'African American', 'Hispanic/Latino', 'Asian', 'Native American', 'Pacific Islander', 'Middle Eastern', 'Mixed/Multiracial', 'Other'];

  return (
    <>
      <div>
        <Label className="text-gray-300">Gender Identity *</Label>
        <Select value={genderIdentity} onValueChange={(value) => onUpdate('genderIdentity', value)}>
          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            {genders.map(gender => (
              <SelectItem key={gender} value={gender}>{gender}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-gray-300">Height *</Label>
        <div className="flex gap-2">
          <Select value={heightUnit} onValueChange={(value) => onUpdate('heightUnit', value)}>
            <SelectTrigger className="w-20 bg-gray-800 border-gray-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ft">ft</SelectItem>
              <SelectItem value="cm">cm</SelectItem>
            </SelectContent>
          </Select>
          <Input
            value={heightValue}
            onChange={(e) => onUpdate('heightValue', e.target.value)}
            className="flex-1 bg-gray-800 border-gray-700 text-white"
            placeholder="Height"
          />
        </div>
      </div>
      <div>
        <Label className="text-gray-300">Weight *</Label>
        <div className="flex gap-2">
          <Select value={weightUnit} onValueChange={(value) => onUpdate('weightUnit', value)}>
            <SelectTrigger className="w-20 bg-gray-800 border-gray-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lbs">lbs</SelectItem>
              <SelectItem value="kg">kg</SelectItem>
            </SelectContent>
          </Select>
          <Input
            value={weightValue}
            onChange={(e) => onUpdate('weightValue', e.target.value)}
            className="flex-1 bg-gray-800 border-gray-700 text-white"
            placeholder="Weight"
          />
        </div>
      </div>
      <div>
        <Label className="text-gray-300">Eye Color *</Label>
        <Select value={eyeColor} onValueChange={(value) => onUpdate('eyeColor', value)}>
          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
            <SelectValue placeholder="Select Eye Color" />
          </SelectTrigger>
          <SelectContent>
            {eyeColors.map(color => (
              <SelectItem key={color} value={color}>{color}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-gray-300">Hair Color *</Label>
        <Select value={hairColor} onValueChange={(value) => onUpdate('hairColor', value)}>
          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
            <SelectValue placeholder="Select Hair Color" />
          </SelectTrigger>
          <SelectContent>
            {hairColors.map(color => (
              <SelectItem key={color} value={color}>{color}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="text-gray-300">Ethnicity *</Label>
        <Select value={ethnicity} onValueChange={(value) => onUpdate('ethnicity', value)}>
          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
            <SelectValue placeholder="Select Ethnicity" />
          </SelectTrigger>
          <SelectContent>
            {ethnicities.map(ethnicity => (
              <SelectItem key={ethnicity} value={ethnicity}>{ethnicity}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default PhysicalAttributesSection;
