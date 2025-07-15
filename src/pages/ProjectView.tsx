
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Users, Briefcase, Calendar, MapPin } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data for project details
  const project = {
    id: 1,
    title: "The Dark Knight Returns",
    status: "Active",
    genre: ["Action", "Drama"],
    synopsis: "A gripping tale of justice and redemption in a dark urban setting.",
    category: "Feature Film",
    productionCompany: ["Warner Bros", "DC Films"],
    country: "United States",
    state: "California",
    city: "Los Angeles",
    shootDates: [
      { date: "2024-08-15", location: "Downtown LA" },
      { date: "2024-08-20", location: "Hollywood Studios" }
    ],
    deadline: "2024-08-15"
  };

  // Mock data for roles
  const roles = [
    {
      id: 1,
      roleName: "Lead Actor",
      gender: ["Male"],
      ageRange: "25-35",
      ethnicity: ["Any"],
      compensation: "$50,000",
      openings: 1,
      applications: 45,
      status: "Open"
    },
    {
      id: 2,
      roleName: "Supporting Actress",
      gender: ["Female"],
      ageRange: "20-30",
      ethnicity: ["Caucasian", "Hispanic"],
      compensation: "$25,000",
      openings: 1,
      applications: 32,
      status: "Open"
    },
    {
      id: 3,
      roleName: "Villain",
      gender: ["Male", "Female"],
      ageRange: "30-50",
      ethnicity: ["Any"],
      compensation: "$75,000",
      openings: 1,
      applications: 28,
      status: "Closed"
    }
  ];

  // Mock data for applications
  const applications = [
    {
      id: 1,
      applicantName: "Sarah Johnson",
      role: "Lead Actor",
      appliedDate: "2024-07-01",
      status: "Under Review",
      experience: "5 years",
      location: "Los Angeles, CA"
    },
    {
      id: 2,
      applicantName: "Michael Chen",
      role: "Supporting Actress",
      appliedDate: "2024-06-28",
      status: "Shortlisted",
      experience: "3 years",
      location: "New York, NY"
    },
    {
      id: 3,
      applicantName: "Emma Davis",
      role: "Villain",
      appliedDate: "2024-06-25",
      status: "Interview Scheduled",
      experience: "8 years",
      location: "Los Angeles, CA"
    }
  ];

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleEdit = () => {
    navigate(`/project/${id}/edit`);
  };

  const handleReviewApplication = (applicationId: number) => {
    navigate(`/application/${applicationId}/review`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-500';
      case 'Closed':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getApplicationStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review':
        return 'bg-orange-500';
      case 'Shortlisted':
        return 'bg-blue-500';
      case 'Interview Scheduled':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
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
                {project.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-300">
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.city}, {project.state}
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Deadline: {project.deadline}
                </span>
              </div>
            </div>
          </div>
          <Button
            onClick={handleEdit}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold"
          >
            Edit Project
          </Button>
        </div>

        {/* Project Details */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Project Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-orange-400 font-medium mb-2">Synopsis</h4>
                <p className="text-gray-300">{project.synopsis}</p>
              </div>
              <div>
                <h4 className="text-orange-400 font-medium mb-2">Production Details</h4>
                <div className="space-y-2 text-gray-300">
                  <p><span className="font-medium">Category:</span> {project.category}</p>
                  <p><span className="font-medium">Genre:</span> {project.genre.join(', ')}</p>
                  <p><span className="font-medium">Production:</span> {project.productionCompany.join(', ')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Roles Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Briefcase className="h-6 w-6 mr-2 text-orange-400" />
              Roles ({roles.length})
            </h2>
            <div className="space-y-4">
              {roles.map((role) => (
                <Card key={role.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-white font-medium">{role.roleName}</h3>
                      <Badge className={getStatusColor(role.status)}>
                        {role.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                      <div>
                        <span className="font-medium">Gender:</span> {role.gender.join(', ')}
                      </div>
                      <div>
                        <span className="font-medium">Age:</span> {role.ageRange}
                      </div>
                      <div>
                        <span className="font-medium">Compensation:</span> {role.compensation}
                      </div>
                      <div>
                        <span className="font-medium">Applications:</span> 
                        <span className="text-orange-400 ml-1">{role.applications}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Users className="h-6 w-6 mr-2 text-orange-400" />
              Applications ({applications.length})
            </h2>
            <div className="space-y-4">
              {applications.map((application) => (
                <Card key={application.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-white font-medium">{application.applicantName}</h3>
                        <p className="text-gray-400 text-sm">{application.role}</p>
                      </div>
                      <Badge className={getApplicationStatusColor(application.status)}>
                        {application.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-3">
                      <div>
                        <span className="font-medium">Experience:</span> {application.experience}
                      </div>
                      <div>
                        <span className="font-medium">Location:</span> {application.location}
                      </div>
                      <div>
                        <span className="font-medium">Applied:</span> {application.appliedDate}
                      </div>
                    </div>
                    <Button
                      onClick={() => handleReviewApplication(application.id)}
                      variant="outline"
                      size="sm"
                      className="w-full border-orange-500 text-orange-400 hover:bg-orange-900"
                    >
                      Review Application
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
