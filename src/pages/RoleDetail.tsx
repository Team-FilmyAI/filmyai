
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, DollarSign, Clock, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RoleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in a real app, this would come from an API
  const role = {
    id: id,
    title: "Lead Detective",
    movie: "The Last Chase",
    genre: "Thriller",
    description: "We are seeking a talented actor to portray the lead detective in our upcoming thriller. The character is a seasoned investigator with a complex past, dealing with personal demons while solving a high-stakes case.",
    requirements: [
      "Age range: 35-45",
      "Strong dramatic acting experience",
      "Ability to portray complex emotional states",
      "Physical fitness for action sequences",
      "Previous law enforcement or detective role experience preferred"
    ],
    responsibilities: [
      "Memorize and deliver dialogue convincingly",
      "Work closely with director and fellow actors",
      "Participate in rehearsals and table reads",
      "Maintain character consistency throughout filming",
      "Be available for promotional activities"
    ],
    compensation: "$50,000 - $75,000",
    location: "Los Angeles, CA",
    shootingDate: "March 15, 2024 - May 30, 2024",
    applicationDeadline: "February 15, 2024",
    status: "Open",
    applicants: 127
  };

  const handleApply = () => {
    navigate(`/role/${id}/apply`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="mr-4 text-orange-400 hover:text-orange-300"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Button>
          </div>

          {/* Role Overview */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl text-orange-400 mb-2">{role.title}</CardTitle>
                  <p className="text-xl text-gray-300">{role.movie}</p>
                  <Badge variant="outline" className="mt-2 border-orange-500 text-orange-400">
                    {role.genre}
                  </Badge>
                </div>
                <Badge 
                  variant={role.status === 'Open' ? 'default' : 'secondary'} 
                  className={role.status === 'Open' ? 'bg-green-600' : ''}
                >
                  {role.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-orange-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-400">Compensation</p>
                    <p className="text-white">{role.compensation}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-orange-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">{role.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-orange-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-400">Shooting Period</p>
                    <p className="text-white">{role.shootingDate}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-orange-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-400">Applicants</p>
                    <p className="text-white">{role.applicants}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <Clock className="h-5 w-5 text-orange-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-400">Application Deadline</p>
                  <p className="text-white">{role.applicationDeadline}</p>
                </div>
              </div>

              <Button 
                onClick={handleApply}
                className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold"
              >
                Apply for Role
              </Button>
            </CardContent>
          </Card>

          {/* Role Description */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-orange-400">Role Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">{role.description}</p>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-orange-400">Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {role.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="h-4 w-4 text-orange-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Responsibilities */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-orange-400">Key Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {role.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <Star className="h-4 w-4 text-orange-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{resp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Apply Button */}
          <div className="text-center">
            <Button 
              onClick={handleApply}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold"
            >
              Apply for This Role
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleDetail;
