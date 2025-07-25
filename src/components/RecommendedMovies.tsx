
import { Star, Clock, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RecommendedMovies = () => {
  const navigate = useNavigate();

  const movies = [
    {
      id: 1,
      title: "Midnight in Manhattan",
      genre: "Drama/Romance",
      director: "Sarah Chen",
      role: "Supporting Male Lead",
      budget: "$5M - $10M",
      location: "New York, NY",
      timeline: "3 months",
      matchScore: 95,
      description: "A heartwarming story about second chances in the city.",
      requirements: ["Age 25-35", "Strong dramatic skills", "NYC local preferred"]
    },
    {
      id: 2,
      title: "The Last Detective",
      genre: "Crime Thriller",
      director: "Michael Rodriguez",
      role: "Detective Partner",
      budget: "$15M - $20M",
      location: "Los Angeles, CA",
      timeline: "4 months",
      matchScore: 89,
      description: "A gritty crime thriller set in modern-day Los Angeles.",
      requirements: ["Age 30-40", "Action experience", "Physical fitness required"]
    },
    {
      id: 3,
      title: "Summer's End",
      genre: "Coming of Age",
      director: "Emma Thompson",
      role: "Father Figure",
      budget: "$2M - $5M",
      location: "Portland, OR",
      timeline: "6 weeks",
      matchScore: 82,
      description: "An indie film about family bonds and growing up.",
      requirements: ["Age 35-45", "Fatherly presence", "Indie film experience"]
    }
  ];

  const handleMovieClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  const handleApplyClick = (e: React.MouseEvent, movieId: number) => {
    e.stopPropagation();
    navigate(`/movie/${movieId}`);
  };

  return (
    <section className="px-6 py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Recommended for You</h2>
            <p className="text-gray-400">Curated based on your profile and preferences</p>
          </div>
          <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black">
            View All Recommendations
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
              onClick={() => handleMovieClick(movie.id)}
            >
              {/* Match Score Badge */}
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🎬</div>
                    <p className="text-gray-400 text-sm">{movie.genre}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {movie.matchScore}% Match
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
                <p className="text-orange-400 font-semibold mb-3">{movie.role}</p>
                <p className="text-gray-300 text-sm mb-4">{movie.description}</p>

                {/* Movie Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-orange-400" />
                    {movie.location}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-2 text-orange-400" />
                    {movie.timeline}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-orange-400" />
                    {movie.budget}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    {movie.requirements.map((req, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold"
                    onClick={(e) => handleApplyClick(e, movie.id)}
                  >
                    Apply Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMovieClick(movie.id);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedMovies;
