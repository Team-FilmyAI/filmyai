
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface Consents {
  termsAccepted: boolean;
  aiProcessingConsent: boolean;
}

interface ConsentsSectionProps {
  consents: Consents;
  setConsents: React.Dispatch<React.SetStateAction<Consents>>;
}

const ConsentsSection = ({ consents, setConsents }: ConsentsSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white flex items-center">
        <CheckCircle className="h-5 w-5 mr-2 text-orange-400" />
        Section 7 - Consents and Submissions
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
  );
};

export default ConsentsSection;
