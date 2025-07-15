
import React from 'react';
import { Button } from '@/components/ui/button';

interface FormNavigationProps {
  currentStep: number;
  onPrevious: () => void;
  onNext: () => void;
  onSave: () => void;
  onCancel: () => void;
}

const FormNavigation = ({ 
  currentStep, 
  onPrevious, 
  onNext, 
  onSave, 
  onCancel 
}: FormNavigationProps) => {
  return (
    <div className="flex gap-4 pt-6 border-t border-gray-800">
      <Button
        type="button"
        variant="outline"
        onClick={onCancel}
        className="border-gray-600 text-gray-300 hover:bg-gray-800"
      >
        Cancel
      </Button>
      
      <Button
        type="button"
        variant="outline"
        onClick={onSave}
        className="border-orange-500 text-orange-400 hover:bg-orange-900"
      >
        Save Progress
      </Button>
      
      <div className="flex-1" />
      
      {currentStep > 1 && (
        <Button
          type="button"
          variant="outline"
          onClick={onPrevious}
          className="border-gray-600 text-gray-300 hover:bg-gray-800"
        >
          Previous
        </Button>
      )}
      
      {currentStep < 6 ? (
        <Button
          type="button"
          onClick={onNext}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold"
        >
          Next
        </Button>
      ) : (
        <Button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold"
        >
          Submit Application
        </Button>
      )}
    </div>
  );
};

export default FormNavigation;
