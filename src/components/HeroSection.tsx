
import { Calendar, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleViewOpportunities = () => {
    navigate("/opportunities");
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6 py-12 border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Welcome Content */}
          <div className="text-center lg:text-left lg:flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Welcome back, <span className="text-orange-400">Alex!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl">
              Ready to land your next big role? We've curated the perfect opportunities based on your profile and experience.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="h-5 w-5 text-orange-400" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="h-5 w-5 text-orange-400" />
                <span>12 Auditions This Month</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span>Los Angeles, CA</span>
              </div>
            </div>

            <Button 
              onClick={handleViewOpportunities}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3 text-lg"
            >
              View New Opportunities
            </Button>
          </div>

          {/* Hero Image/Graphic */}
          <div className="lg:flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-500/30">
                <div className="w-60 h-60 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎬</div>
                    <p className="text-orange-400 font-semibold text-lg">Your Next Role</p>
                    <p className="text-gray-300 text-sm">Awaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
