import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Film, Users, Calendar, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock data for current projects
  const currentProjects = [
    {
      id: 1,
      title: "The Dark Knight Returns",
      status: "Active",
      genre: ["Action", "Drama"],
      applications: 125,
      roles: 8,
      deadline: "2024-08-15"
    },
    {
      id: 2,
      title: "Summer Romance",
      status: "Draft",
      genre: ["Romance", "Comedy"],
      applications: 0,
      roles: 5,
      deadline: "2024-07-30"
    },
    {
      id: 3,
      title: "Mystery of the Lost City",
      status: "Closed",
      genre: ["Adventure", "Mystery"],
      applications: 89,
      roles: 12,
      deadline: "2024-06-20"
    }
  ];

  // Mock data for recent applications
  const recentApplications = [
    {
      id: 1,
      applicantName: "Sarah Johnson",
      role: "Lead Actress",
      project: "The Dark Knight Returns",
      appliedDate: "2024-07-01",
      status: "Under Review"
    },
    {
      id: 2,
      applicantName: "Michael Chen",
      role: "Supporting Actor",
      project: "Summer Romance",
      appliedDate: "2024-06-28",
      status: "Shortlisted"
    },
    {
      id: 3,
      applicantName: "Emma Davis",
      role: "Villain",
      project: "The Dark Knight Returns",
      appliedDate: "2024-06-25",
      status: "Interview Scheduled"
    }
  ];

  const handleCreateProject = () => {
    navigate('/create-project');
  };

  const handleViewProject = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const handleEditProject = (projectId: number) => {
    navigate(`/project/${projectId}/edit`);
  };

  const handleReviewApplication = (applicationId: number) => {
    navigate(`/application/${applicationId}/review`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-400 bg-green-900/20';
      case 'Draft':
        return 'text-yellow-400 bg-yellow-900/20';
      case 'Closed':
        return 'text-gray-400 bg-gray-900/20';
      default:
        return 'text-gray-400 bg-gray-900/20';
    }
  };

  const getApplicationStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review':
        return 'text-orange-400 bg-orange-900/20';
      case 'Shortlisted':
        return 'text-blue-400 bg-blue-900/20';
      case 'Interview Scheduled':
        return 'text-purple-400 bg-purple-900/20';
      default:
        return 'text-gray-400 bg-gray-900/20';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-orange-400 mb-2">
              Production Dashboard
            </h1>
            <p className="text-gray-300">Manage your projects and casting calls</p>
          </div>
          <Button 
            onClick={handleCreateProject}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold mt-4 md:mt-0"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create New Project
          </Button>
        </div>

        {/* Current Projects Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <Film className="h-6 w-6 mr-2 text-orange-400" />
            Current Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project) => (
              <Card key={project.id} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.genre.map((g, index) => (
                      <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {g}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Applications:</span>
                      <span className="text-orange-400 font-medium">{project.applications}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Roles:</span>
                      <span className="text-blue-400 font-medium">{project.roles}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Deadline:</span>
                      <span className="text-gray-400">{project.deadline}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleViewProject(project.id)}
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleEditProject(project.id)}
                      className="flex-1 border-orange-500 text-orange-400 hover:bg-orange-900"
                    >
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Applications Section */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <Users className="h-6 w-6 mr-2 text-orange-400" />
            Recent Applications
          </h2>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-700">
                    <tr className="text-left">
                      <th className="p-4 text-gray-300 font-medium">Applicant</th>
                      <th className="p-4 text-gray-300 font-medium">Role</th>
                      <th className="p-4 text-gray-300 font-medium">Project</th>
                      <th className="p-4 text-gray-300 font-medium">Applied Date</th>
                      <th className="p-4 text-gray-300 font-medium">Status</th>
                      <th className="p-4 text-gray-300 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentApplications.map((application) => (
                      <tr key={application.id} className="border-b border-gray-700 hover:bg-gray-750">
                        <td className="p-4 text-white font-medium">{application.applicantName}</td>
                        <td className="p-4 text-gray-300">{application.role}</td>
                        <td className="p-4 text-gray-300">{application.project}</td>
                        <td className="p-4 text-gray-400">{application.appliedDate}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getApplicationStatusColor(application.status)}`}>
                            {application.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleReviewApplication(application.id)}
                            className="border-gray-600 text-gray-300 hover:bg-gray-700"
                          >
                            Review
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
