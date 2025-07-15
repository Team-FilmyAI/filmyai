
import React from 'react';
import { X } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface AccentsSectionProps {
  accentsKnown: string[];
  onAccentsUpdate: (accents: string[]) => void;
}

const AccentsSection = ({ accentsKnown, onAccentsUpdate }: AccentsSectionProps) => {
  const accents = ['American', 'British', 'Australian', 'Irish', 'Scottish', 'Canadian', 'Southern American', 'New York', 'Boston', 'French', 'German', 'Italian', 'Spanish'];

  const handleAccentSelect = (value: string) => {
    if (!accentsKnown.includes(value)) {
      onAccentsUpdate([...accentsKnown, value]);
    }
  };

  const removeAccent = (accentToRemove: string) => {
    onAccentsUpdate(accentsKnown.filter(accent => accent !== accentToRemove));
  };

  return (
    <div>
      <Label className="text-gray-300">Accents Known</Label>
      <Select onValueChange={handleAccentSelect}>
        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
          <SelectValue placeholder="Select accents" />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 border-gray-700">
          {accents.map(accent => (
            <SelectItem key={accent} value={accent} className="text-white hover:bg-gray-700">{accent}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      {accentsKnown.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {accentsKnown.map(accent => (
            <Badge key={accent} variant="outline" className="border-orange-500 text-orange-400 flex items-center gap-1">
              {accent}
              <X className="h-3 w-3 cursor-pointer" onClick={() => removeAccent(accent)} />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccentsSection;
