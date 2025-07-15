
import { Calendar, Clock, User, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const CastingCalls = () => {
  const navigate = useNavigate();

  const castingCalls = [
    {
      id: 1,
      movieId: 1,
      title: "Ocean's Revenge",
      role: "Tech Specialist",
      director: "James Wilson",
      auditionDate: "Dec 15, 2024",
      deadline: "Dec 10, 2024",
      status: "urgent",
      location: "Warner Bros. Studios",
      time: "2:00 PM - 3:30 PM",
      description: "Seeking a charismatic actor for a tech-savvy character in action thriller.",
      materials: ["Headshot", "Resume", "1-minute monologue"]
    },
    {
      id: 2,
      movieId: 2,
      title: "The Artist's Journey",
      role: "Gallery Owner",
      director: "Sofia Martinez",
      auditionDate: "Dec 18, 2024",
      deadline: "Dec 12, 2024",
      status: "new",
      location: "Downtown Studios",
      time: "10:00 AM - 11:00 AM",
      description: "Independent film about the art world. Looking for sophisticated presence.",
      materials: ["Headshot", "Resume", "Scene reading"]
    },
    {
      id: 3,
      movieId: 3,
      title: "Family Reunion",
      role: "Uncle Mike",
      director: "Robert Kim",
      auditionDate: "Dec 20, 2024",
      deadline: "Dec 14, 2024",
      status: "upcoming",
      location: "Sunset Studios",
      time: "3:00 PM - 4:00 PM",
      description: "Heartwarming family comedy. Seeking warm, comedic actor.",
      materials: ["Headshot", "Resume", "Comedy scene"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent":
        return "bg-red-500 hover:bg-red-600";
      case "new":
        return "bg-green-500 hover:bg-green-600";
      case "upcoming":
        return "bg-blue-500 hover:bg-blue-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === "urgent") {
      return <AlertCircle className="h-4 w-4" />;
    }
    return null;
  };

  const handleViewDetails = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <section className="px-6 py-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Your Casting Calls</h2>
            <p className="text-gray-400">Invitations and auditions you've received</p>
          </div>
          <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black">
            View All Casting Calls
          </Button>
        </div>

        <div className="space-y-6">
          {castingCalls.map((call) => (
            <div
              key={call.id}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white">{call.title}</h3>
                    <Badge className={`${getStatusColor(call.status)} text-white border-0`}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(call.status)}
                        <span className="capitalize">{call.status}</span>
                      </div>
                    </Badge>
                  </div>

                  <p className="text-orange-400 font-semibold mb-2">{call.role}</p>
                  <p className="text-gray-300 mb-4">{call.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="h-4 w-4 mr-2 text-orange-400" />
                      <span>Dir: {call.director}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-orange-400" />
                      <span>{call.auditionDate}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="h-4 w-4 mr-2 text-orange-400" />
                      <span>{call.time}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <AlertCircle className="h-4 w-4 mr-2 text-orange-400" />
                      <span>Due: {call.deadline}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-gray-400 text-sm mr-2">Required:</span>
                    {call.materials.map((material, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:w-40">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold">
                    Confirm Audition
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                    onClick={() => handleViewDetails(call.movieId)}
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

export default CastingCalls;
