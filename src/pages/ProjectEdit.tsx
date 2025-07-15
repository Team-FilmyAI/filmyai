
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Save } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectDetailsSection from '@/components/project-form/ProjectDetailsSection';
import AddRolesSection from '@/components/project-form/AddRolesSection';

const ProjectEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentSection, setCurrentSection] = useState(1);

  // Initialize with existing project data (in real app, this would come from API)
  const [projectDetails, setProjectDetails] = useState({
    projectTitle: 'The Dark Knight Returns',
    genre: ['Action', 'Drama'],
    synopsis: 'A gripping tale of justice and redemption in a dark urban setting.',
    projectCategory: 'Feature Film',
    productionCompany: ['Warner Bros', 'DC Films'],
    poster: null as File | null,
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    shootDates: [
      { date: new Date('2024-08-15'), location: 'Downtown LA' },
      { date: new Date('2024-08-20'), location: 'Hollywood Studios' }
    ],
    ndaDocument: null as File | null,
    uploadNDA: false
  });

  const [roles, setRoles] = useState([
    {
      id: 1,
      roleName: 'Lead Actor',
      gender: ['Male'],
      ageRangeMin: '25',
      ageRangeMax: '35',
      ethnicity: ['Any'],
      characterDescription: 'A complex character with deep motivations',
      accentLanguage: ['English'],
      skillsRequired: ['Acting', 'Stunts'],
      compensation: '$50,000',
      numberOfOpenings: '1',
      specialSkills: 'Combat training preferred',
      roleSpecificQuestions: false,
      selectedQuestions: [],
      deadlineToApply: new Date('2024-08-15')
    }
  ]);

  const handleBack = () => {
    navigate(`/project/${id}`);
  };

  const handleSave = () => {
    console.log('Saving project changes:', { projectDetails, roles });
    // Save functionality here
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updating project:', { projectDetails, roles });
    // Update functionality here
    navigate(`/project/${id}`);
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
                Back to Project
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-orange-400 mb-2">
                  Edit Project
                </h1>
                <p className="text-gray-300">{projectDetails.projectTitle}</p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={handleSave}
              className="border-orange-500 text-orange-400 hover:bg-orange-900"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Changes
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
                2. Edit Roles
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
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
                  onClick={() => setCurrentSection(currentSection - 1)}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Previous
                </Button>
              )}
              
              {currentSection < 2 ? (
                <Button
                  type="button"
                  onClick={() => setCurrentSection(currentSection + 1)}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold"
                >
                  Update Project
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectEdit;
