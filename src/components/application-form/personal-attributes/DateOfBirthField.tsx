
import React, { useCallback } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface DateOfBirthFieldProps {
  dob: Date | undefined;
  age: string;
  onDateChange: (date: Date | undefined) => void;
}

const DateOfBirthField = ({ dob, age, onDateChange }: DateOfBirthFieldProps) => {
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
    onDateChange(date);
  };

  return (
    <>
      <div>
        <Label className="text-gray-300">Date of Birth *</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal bg-gray-800 border-gray-700 text-white",
                !dob && "text-gray-400"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dob ? format(dob, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <CalendarComponent
              mode="single"
              selected={dob}
              onSelect={handleDateOfBirthChange}
              initialFocus
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Label htmlFor="age" className="text-gray-300">Age</Label>
        <Input
          id="age"
          value={age}
          className="bg-gray-800 border-gray-700 text-white"
          readOnly
          placeholder="Auto-calculated from DOB"
        />
      </div>
    </>
  );
};

export default DateOfBirthField;
