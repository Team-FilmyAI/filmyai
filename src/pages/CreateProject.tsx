
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectDetailsSection from '@/components/project-form/ProjectDetailsSection';
import AddRolesSection from '@/components/project-form/AddRolesSection';

const CreateProject = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);

  // Project Details State
  const [projectDetails, setProjectDetails] = useState({
    projectTitle: '',
    genre: [] as string[],
    synopsis: '',
    projectCategory: '',
    productionCompany: [] as string[],
    poster: null as File | null,
    country: '',
    state: '',
    city: '',
    shootDates: [] as { date: Date | undefined; location: string }[],
    ndaDocument: null as File | null,
    uploadNDA: false
  });

  // Roles State
  const [roles, setRoles] = useState([
    {
      id: 1,
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
    }
  ]);

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleSave = () => {
    console.log('Saving project:', { projectDetails, roles });
    // Save functionality here
  };

  const handleNext = () => {
    if (currentSection < 2) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting project:', { projectDetails, roles });
    // Submit functionality here
    navigate('/dashboard');
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <ProjectDetailsSection 
            projectDetails={projectDetails} 
            setProjectDetails={setProjectDetails} 
          />
        );
      case 2:
        return (
          <AddRolesSection 
            roles={roles} 
            setRoles={setRoles} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Button
                variant="outline"
                onClick={handleBack}
                className="mr-4 border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-orange-400 mb-2">
                  Create New Project
                </h1>
                <p className="text-gray-300">Set up your movie or casting call</p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={handleSave}
              className="border-orange-500 text-orange-400 hover:bg-orange-900"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
          </div>

          {/* Section Navigation */}
          <div className="mb-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setCurrentSection(1)}
                className={`pb-2 border-b-2 font-medium transition-colors ${
                  currentSection === 1
                    ? 'border-orange-500 text-orange-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                1. Project Details
              </button>
              <button
                onClick={() => setCurrentSection(2)}
                className={`pb-2 border-b-2 font-medium transition-colors ${
                  currentSection === 2
                    ? 'border-orange-500 text-orange-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                2. Add Roles
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Current Section Content */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                {renderCurrentSection()}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-800">
              <div className="flex-1" />
              
              {currentSection > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Previous
                </Button>
              )}
              
              {currentSection < 2 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold"
                >
                  Create Project
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
