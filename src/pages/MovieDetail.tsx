
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Building, Users, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in a real app, this would be fetched based on the ID
  const movieData = {
    id: 1,
    title: "Midnight in Manhattan",
    poster: "/lovable-uploads/590591ff-3ec6-48c1-bfb9-4ae4876b428a.png",
    synopsis: "A heartwarming story about second chances in the big city. When successful architect Sarah returns to New York after a decade abroad, she discovers that the city—and the people she left behind—have changed in unexpected ways. As she navigates reconnecting with old friends and confronting past mistakes, Sarah must decide whether some bridges are worth rebuilding, even when the foundation has shifted.",
    productionCompanies: ["Paramount Pictures", "Silver Screen Productions", "Manhattan Films"],
    locations: ["New York City, NY", "Manhattan, NY", "Brooklyn, NY"],
    shootingDates: {
      start: "January 15, 2025",
      end: "April 30, 2025"
    },
    genre: "Drama/Romance",
    director: "Sarah Chen",
    budget: "$5M - $10M",
    roles: [
      {
        id: 1,
        title: "Supporting Male Lead",
        description: "Charming and witty character who becomes Sarah's love interest",
        requirements: ["Age 25-35", "Strong dramatic skills", "NYC local preferred"],
        compensation: "$50,000 - $75,000",
        status: "open"
      },
      {
        id: 2,
        title: "Sarah's Best Friend",
        description: "Loyal friend who helps Sarah navigate her return to the city",
        requirements: ["Age 28-38", "Comedy experience", "Strong chemistry with lead"],
        compensation: "$30,000 - $45,000",
        status: "open"
      },
      {
        id: 3,
        title: "Rival Architect",
        description: "Competitive architect who challenges Sarah professionally",
        requirements: ["Age 30-45", "Professional demeanor", "Business background preferred"],
        compensation: "$25,000 - $35,000",
        status: "filled"
      },
      {
        id: 4,
        title: "Coffee Shop Owner",
        description: "Warm, welcoming character who provides wisdom and comfort",
        requirements: ["Age 45-60", "Parental figure energy", "NYC accent preferred"],
        compensation: "$15,000 - $25,000",
        status: "open"
      }
    ]
  };

  const handleRoleClick = (roleId: number) => {
    navigate(`/role/${roleId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-500 hover:bg-green-600";
      case "filled":
        return "bg-gray-500";
      case "urgent":
        return "bg-red-500 hover:bg-red-600";
      default:
        return "bg-blue-500 hover:bg-blue-600";
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 text-gray-300 hover:text-orange-400 hover:bg-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Movies
        </Button>

        {/* Movie Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Poster */}
          <div className="lg:col-span-1">
            <div className="aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <img
                src={movieData.poster}
                alt={movieData.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-gray-400">{movieData.title}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Movie Details */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-white mb-4">{movieData.title}</h1>
            <p className="text-orange-400 text-xl mb-6">{movieData.genre}</p>
            
            {/* Key Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-300">
                <Users className="h-5 w-5 mr-3 text-orange-400" />
                <span>Director: {movieData.director}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Star className="h-5 w-5 mr-3 text-orange-400" />
                <span>Budget: {movieData.budget}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar className="h-5 w-5 mr-3 text-orange-400" />
                <span>{movieData.shootingDates.start} - {movieData.shootingDates.end}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 mr-3 text-orange-400" />
                <span>3-4 months production</span>
              </div>
            </div>

            {/* Production Companies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Building className="h-5 w-5 mr-2 text-orange-400" />
                Production Companies
              </h3>
              <div className="flex flex-wrap gap-2">
                {movieData.productionCompanies.map((company, index) => (
                  <Badge key={index} variant="outline" className="border-gray-600 text-gray-300">
                    {company}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-orange-400" />
                Filming Locations
              </h3>
              <div className="flex flex-wrap gap-2">
                {movieData.locations.map((location, index) => (
                  <Badge key={index} variant="outline" className="border-gray-600 text-gray-300">
                    {location}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Synopsis */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Synopsis</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{movieData.synopsis}</p>
        </div>

        {/* Available Roles */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Available Roles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {movieData.roles.map((role) => (
              <div
                key={role.id}
                className={`bg-gray-900 border border-gray-800 rounded-lg p-6 transition-all duration-300 ${
                  role.status === 'open' 
                    ? 'hover:border-orange-500/50 cursor-pointer' 
                    : 'opacity-60'
                }`}
                onClick={() => role.status === 'open' && handleRoleClick(role.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{role.title}</h3>
                  <Badge className={`${getStatusColor(role.status)} text-white border-0`}>
                    {role.status === 'open' ? 'Open' : 'Filled'}
                  </Badge>
                </div>
                
                <p className="text-gray-300 mb-4">{role.description}</p>
                
                <div className="mb-4">
                  <p className="text-orange-400 font-semibold mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    {role.requirements.map((req, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-green-400 font-semibold">{role.compensation}</p>
                  {role.status === 'open' && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRoleClick(role.id);
                      }}
                    >
                      Apply Now
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
