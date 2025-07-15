
import React from 'react';
import { FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface RoleQuestions {
  availableOnShootDate: string;
  willingToTravel: string;
  scheduleConflicts: string;
  conflictDetails: string;
  whyInterested: string;
  characterRelation: string;
  relevantExperience: string;
  expectedPay: string;
}

interface RoleSpecificQuestionsSectionProps {
  roleQuestions: RoleQuestions;
  setRoleQuestions: React.Dispatch<React.SetStateAction<RoleQuestions>>;
}

const RoleSpecificQuestionsSection = ({ roleQuestions, setRoleQuestions }: RoleSpecificQuestionsSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white flex items-center">
        <FileText className="h-5 w-5 mr-2 text-orange-400" />
        Section 5 - Role Specific Questions
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="text-gray-300">Are you available on shoot date? *</Label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="availableOnShootDate"
                value="yes"
                checked={roleQuestions.availableOnShootDate === 'yes'}
                onChange={(e) => setRoleQuestions(prev => ({ ...prev, availableOnShootDate: e.target.value }))}
                className="mr-2"
              />
              <span className="text-white">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="availableOnShootDate"
                value="no"
                checked={roleQuestions.availableOnShootDate === 'no'}
                onChange={(e) => setRoleQuestions(prev => ({ ...prev, availableOnShootDate: e.target.value }))}
                className="mr-2"
              />
              <span className="text-white">No</span>
            </label>
          </div>
        </div>

        <div>
          <Label className="text-gray-300">Are you willing to travel? *</Label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="willingToTravel"
                value="yes"
                checked={roleQuestions.willingToTravel === 'yes'}
                onChange={(e) => setRoleQuestions(prev => ({ ...prev, willingToTravel: e.target.value }))}
                className="mr-2"
              />
              <span className="text-white">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="willingToTravel"
                value="no"
                checked={roleQuestions.willingToTravel === 'no'}
                onChange={(e) => setRoleQuestions(prev => ({ ...prev, willingToTravel: e.target.value }))}
                className="mr-2"
              />
              <span className="text-white">No</span>
            </label>
          </div>
        </div>

        <div>
          <Label className="text-gray-300">Any Schedule conflicts? *</Label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="scheduleConflicts"
                value="yes"
                checked={roleQuestions.scheduleConflicts === 'yes'}
                onChange={(e) => setRoleQuestions(prev => ({ ...prev, scheduleConflicts: e.target.value }))}
                className="mr-2"
              />
              <span className="text-white">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="scheduleConflicts"
                value="no"
                checked={roleQuestions.scheduleConflicts === 'no'}
                onChange={(e) => setRoleQuestions(prev => ({ ...prev, scheduleConflicts: e.target.value }))}
                className="mr-2"
              />
              <span className="text-white">No</span>
            </label>
          </div>
          {roleQuestions.scheduleConflicts === 'yes' && (
            <div className="mt-2">
              <Label htmlFor="conflictDetails" className="text-gray-300">Conflict Details</Label>
              <Textarea
                id="conflictDetails"
                value={roleQuestions.conflictDetails}
                onChange={(e) => setRoleQuestions(prev => ({ ...prev, conflictDetails: e.target.value }))}
                className="bg-gray-800 border-gray-700 text-white"
                rows={2}
                placeholder="Specify dates and details of conflicts..."
              />
            </div>
          )}
        </div>

        <div>
          <Label className="text-gray-300">Do you have relevant experience for this role? *</Label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="relevantExperience"
                value="yes"
                checked={roleQuestions.relevantExperience === 'yes'}
                onChange={(e) => setRoleQuestions(prev => ({ ...prev, relevantExperience: e.target.value }))}
                className="mr-2"
              />
              <span className="text-white">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="relevantExperience"
                value="no"
                checked={roleQuestions.relevantExperience === 'no'}
                onChange={(e) => setRoleQuestions(prev => ({ ...prev, relevantExperience: e.target.value }))}
                className="mr-2"
              />
              <span className="text-white">No</span>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="whyInterested" className="text-gray-300">Why are you interested in this role? * (500 characters limit)</Label>
          <Textarea
            id="whyInterested"
            value={roleQuestions.whyInterested}
            onChange={(e) => setRoleQuestions(prev => ({ ...prev, whyInterested: e.target.value.slice(0, 500) }))}
            className="bg-gray-800 border-gray-700 text-white"
            rows={3}
            maxLength={500}
            placeholder="Explain your interest in this role..."
            required
          />
          <p className="text-xs text-gray-400 mt-1">{roleQuestions.whyInterested.length}/500 characters</p>
        </div>
        <div>
          <Label htmlFor="characterRelation" className="text-gray-300">How do you relate to the character? * (500 characters limit)</Label>
          <Textarea
            id="characterRelation"
            value={roleQuestions.characterRelation}
            onChange={(e) => setRoleQuestions(prev => ({ ...prev, characterRelation: e.target.value.slice(0, 500) }))}
            className="bg-gray-800 border-gray-700 text-white"
            rows={3}
            maxLength={500}
            placeholder="Describe how you relate to this character..."
            required
          />
          <p className="text-xs text-gray-400 mt-1">{roleQuestions.characterRelation.length}/500 characters</p>
        </div>
      </div>

      <div>
        <Label htmlFor="expectedPay" className="text-gray-300">Expected Pay Range</Label>
        <Input
          id="expectedPay"
          value={roleQuestions.expectedPay}
          onChange={(e) => setRoleQuestions(prev => ({ ...prev, expectedPay: e.target.value }))}
          className="bg-gray-800 border-gray-700 text-white"
          placeholder="e.g., $40,000 - $60,000"
        />
      </div>
    </div>
  );
};

export default RoleSpecificQuestionsSection;
