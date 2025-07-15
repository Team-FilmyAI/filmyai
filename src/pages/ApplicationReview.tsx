
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, Mail, Phone, MapPin, Calendar, User, Briefcase } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ApplicationReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock application data
  const application = {
    id: 1,
    applicantName: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    role: "Lead Actress",
    project: "The Dark Knight Returns",
    appliedDate: "2024-07-01",
    status: "Under Review",
    age: 28,
    gender: "Female",
    ethnicity: "Caucasian",
    location: "Los Angeles, CA",
    experience: "5 years",
    skills: ["Acting", "Stunts", "Horseback Riding", "Singing"],
    languages: ["English", "Spanish"],
    accents: ["American", "British"],
    previousWork: [
      { title: "Summer Dreams", role: "Supporting Actress", year: "2023" },
      { title: "City Lights", role: "Lead", year: "2022" },
      { title: "The Journey", role: "Supporting", year: "2021" }
    ],
    portfolio: {
      headshots: ["headshot1.jpg", "headshot2.jpg"],
      reelVideo: "demo_reel.mp4",
      resume: "sarah_johnson_resume.pdf"
    },
    responses: [
      {
        question: "Why are you interested in this role?",
        answer: "I am deeply passionate about complex characters that challenge societal norms. This role represents an opportunity to explore themes of justice and redemption that resonate with my artistic vision."
      },
      {
        question: "Describe your experience with action sequences.",
        answer: "I have extensive training in stage combat and have performed my own stunts in three previous films. I maintain a rigorous fitness routine and work regularly with a stunt coordinator."
      }
    ]
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleStatusChange = (newStatus: string) => {
    console.log(`Changing application status to: ${newStatus}`);
    // Status change functionality here
  };

  const handleDownload = (file: string) => {
    console.log(`Downloading: ${file}`);
    // Download functionality here
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review':
        return 'bg-orange-500';
      case 'Shortlisted':
        return 'bg-blue-500';
      case 'Interview Scheduled':
        return 'bg-purple-500';
      case 'Rejected':
        return 'bg-red-500';
      case 'Accepted':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
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
                  Application Review
                </h1>
                <p className="text-gray-300">{application.applicantName} - {application.role}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => handleStatusChange('Shortlisted')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Shortlist
              </Button>
              <Button
                onClick={() => handleStatusChange('Interview Scheduled')}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Schedule Interview
              </Button>
              <Button
                onClick={() => handleStatusChange('Rejected')}
                variant="outline"
                className="border-red-500 text-red-400 hover:bg-red-900"
              >
                Reject
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white flex items-center">
                      <User className="h-5 w-5 mr-2 text-orange-400" />
                      Basic Information
                    </CardTitle>
                    <Badge className={getStatusColor(application.status)}>
                      {application.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <Mail className="h-4 w-4 mr-2 text-orange-400" />
                        {application.email}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Phone className="h-4 w-4 mr-2 text-orange-400" />
                        {application.phone}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="h-4 w-4 mr-2 text-orange-400" />
                        {application.location}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Calendar className="h-4 w-4 mr-2 text-orange-400" />
                        Applied: {application.appliedDate}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-gray-300">
                        <span className="font-medium text-orange-400">Age:</span> {application.age}
                      </div>
                      <div className="text-gray-300">
                        <span className="font-medium text-orange-400">Gender:</span> {application.gender}
                      </div>
                      <div className="text-gray-300">
                        <span className="font-medium text-orange-400">Ethnicity:</span> {application.ethnicity}
                      </div>
                      <div className="text-gray-300">
                        <span className="font-medium text-orange-400">Experience:</span> {application.experience}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills & Languages */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Skills & Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-orange-400 font-medium mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {application.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-orange-400 font-medium mb-2">Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {application.languages.map((language, index) => (
                          <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-orange-400 font-medium mb-2">Accents</h4>
                      <div className="flex flex-wrap gap-2">
                        {application.accents.map((accent, index) => (
                          <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
                            {accent}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Previous Work */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-orange-400" />
                    Previous Work
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {application.previousWork.map((work, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-700 rounded">
                        <div>
                          <h4 className="text-white font-medium">{work.title}</h4>
                          <p className="text-gray-400 text-sm">{work.role}</p>
                        </div>
                        <span className="text-orange-400">{work.year}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Role-Specific Responses */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Role-Specific Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {application.responses.map((response, index) => (
                      <div key={index}>
                        <h4 className="text-orange-400 font-medium mb-2">{response.question}</h4>
                        <p className="text-gray-300">{response.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Portfolio */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-orange-400 font-medium mb-2">Headshots</h4>
                      <div className="space-y-2">
                        {application.portfolio.headshots.map((headshot, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload(headshot)}
                            className="w-full justify-between border-gray-600 text-gray-300 hover:bg-gray-700"
                          >
                            Headshot {index + 1}
                            <Download className="h-4 w-4" />
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-orange-400 font-medium mb-2">Demo Reel</h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(application.portfolio.reelVideo)}
                        className="w-full justify-between border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        Demo Reel
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div>
                      <h4 className="text-orange-400 font-medium mb-2">Resume</h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(application.portfolio.resume)}
                        className="w-full justify-between border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        Resume
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button
                      onClick={() => handleStatusChange('Accepted')}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Accept Application
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-blue-500 text-blue-400 hover:bg-blue-900"
                    >
                      Send Message
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Add Notes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReview;
