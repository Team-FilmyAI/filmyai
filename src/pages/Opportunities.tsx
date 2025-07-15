
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, DollarSign, Users, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const Opportunities = () => {
  const navigate = useNavigate();

  // Mock data for opportunities
  const opportunities = [
    {
      id: 1,
      movieTitle: "Midnight in Manhattan",
      roleName: "Supporting Male Lead",
      characterName: "David Chen",
      description: "A charming and witty architect who becomes Sarah's love interest.",
      ageRange: "25-35",
      gender: "Male",
      location: "New York City, NY",
      compensation: "$50,000 - $75,000",
      deadline: "January 15, 2025",
      genre: "Drama/Romance",
      poster: "/lovable-uploads/590591ff-3ec6-48c1-bfb9-4ae4876b428a.png",
      urgent: false
    },
    {
      id: 2,
      movieTitle: "Midnight in Manhattan",
      roleName: "Sarah's Best Friend",
      characterName: "Emma Rodriguez",
      description: "Loyal friend who helps Sarah navigate her return to the city.",
      ageRange: "28-38",
      gender: "Female",
      location: "Manhattan, NY",
      compensation: "$30,000 - $45,000",
      deadline: "January 20, 2025",
      genre: "Drama/Romance",
      poster: "/lovable-uploads/590591ff-3ec6-48c1-bfb9-4ae4876b428a.png",
      urgent: true
    },
    {
      id: 3,
      movieTitle: "City Lights",
      roleName: "Lead Detective",
      characterName: "Marcus Thompson",
      description: "Experienced detective investigating a series of mysterious cases.",
      ageRange: "35-45",
      gender: "Male",
      location: "Los Angeles, CA",
      compensation: "$80,000 - $120,000",
      deadline: "February 1, 2025",
      genre: "Crime/Thriller",
      poster: "/lovable-uploads/590591ff-3ec6-48c1-bfb9-4ae4876b428a.png",
      urgent: false
    },
    {
      id: 4,
      movieTitle: "Summer Dreams",
      roleName: "Young Entrepreneur",
      characterName: "Sophia Kim",
      description: "Ambitious young woman starting her own tech company.",
      ageRange: "22-30",
      gender: "Female",
      location: "San Francisco, CA",
      compensation: "$45,000 - $65,000",
      deadline: "January 25, 2025",
      genre: "Comedy/Drama",
      poster: "/lovable-uploads/590591ff-3ec6-48c1-bfb9-4ae4876b428a.png",
      urgent: true
    }
  ];

  const handleRoleClick = (roleId: number) => {
    navigate(`/role/${roleId}`);
  };

  const handleMovieClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            New <span className="text-orange-400">Opportunities</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest casting calls and roles that match your profile. 
            Apply now and take the next step in your acting career.
          </p>
        </div>

        {/* Filters/Stats */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2">
            <span className="text-orange-400 font-semibold">{opportunities.length}</span>
            <span className="text-gray-300 ml-2">Total Opportunities</span>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2">
            <span className="text-red-400 font-semibold">{opportunities.filter(op => op.urgent).length}</span>
            <span className="text-gray-300 ml-2">Urgent Casting</span>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2">
            <span className="text-green-400 font-semibold">4.8</span>
            <span className="text-gray-300 ml-2">Your Match Score</span>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-orange-500/50 transition-all duration-300"
            >
              {/* Opportunity Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 
                      className="text-xl font-bold text-white mb-1 cursor-pointer hover:text-orange-400 transition-colors"
                      onClick={() => handleMovieClick(opportunity.id)}
                    >
                      {opportunity.movieTitle}
                    </h3>
                    <p className="text-orange-400 text-lg">{opportunity.genre}</p>
                  </div>
                  {opportunity.urgent && (
                    <Badge className="bg-red-500 hover:bg-red-600 text-white">
                      Urgent
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-orange-400" />
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-orange-400" />
                    <span>Apply by: {opportunity.deadline}</span>
                  </div>
                </div>
              </div>

              {/* Role Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-1">{opportunity.roleName}</h4>
                  <p className="text-gray-300 text-sm mb-2">Character: {opportunity.characterName}</p>
                  <p className="text-gray-400">{opportunity.description}</p>
                </div>

                {/* Role Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Age Range</p>
                    <p className="text-white font-semibold">{opportunity.ageRange}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Gender</p>
                    <p className="text-white font-semibold">{opportunity.gender}</p>
                  </div>
                </div>

                {/* Compensation */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-4 w-4 mr-2 text-orange-400" />
                    <span className="text-gray-400 text-sm">Compensation</span>
                  </div>
                  <p className="text-green-400 font-bold text-lg">{opportunity.compensation}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => handleRoleClick(opportunity.id)}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold"
                  >
                    Apply Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleRoleClick(opportunity.id)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black px-8 py-3"
          >
            Load More Opportunities
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
