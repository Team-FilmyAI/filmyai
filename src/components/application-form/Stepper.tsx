
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
}

const Stepper = ({ currentStep, totalSteps, stepLabels }: StepperProps) => {
  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between">
        {stepLabels.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={stepNumber} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2",
                    isCompleted
                      ? "bg-orange-500 border-orange-500 text-white"
                      : isCurrent
                      ? "bg-orange-100 border-orange-500 text-orange-600"
                      : "bg-gray-200 border-gray-300 text-gray-500"
                  )}
                >
                  {isCompleted ? <Check className="h-5 w-5" /> : stepNumber}
                </div>
                <span
                  className={cn(
                    "mt-2 text-xs font-medium text-center max-w-20",
                    isCurrent ? "text-orange-600" : "text-gray-500"
                  )}
                >
                  {label}
                </span>
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-4",
                    isCompleted ? "bg-orange-500" : "bg-gray-300"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
