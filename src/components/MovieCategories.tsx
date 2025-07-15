
import { Film, Tv, Users, Globe, Heart, Zap, Laugh, Skull } from "lucide-react";
import { Button } from "@/components/ui/button";

const MovieCategories = () => {
  const categories = [
    {
      icon: Film,
      name: "Feature Films",
      count: 45,
      description: "Major studio and independent feature films",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Tv,
      name: "TV Series",
      count: 28,
      description: "Television series and streaming shows",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Users,
      name: "Commercials",
      count: 67,
      description: "Brand commercials and advertising campaigns",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Globe,
      name: "Web Series",
      count: 32,
      description: "Online content and digital series",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Heart,
      name: "Romance",
      count: 23,
      description: "Romantic comedies and drama films",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Zap,
      name: "Action/Thriller",
      count: 39,
      description: "Action-packed and suspenseful productions",
      color: "from-red-400 to-red-600"
    },
    {
      icon: Laugh,
      name: "Comedy",
      count: 41,
      description: "Comedy films and lighthearted content",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Skull,
      name: "Horror/Sci-Fi",
      count: 18,
      description: "Horror and science fiction productions",
      color: "from-gray-400 to-gray-600"
    }
  ];

  return (
    <section className="px-6 py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore opportunities across different types of productions and genres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{category.description}</p>
                
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-orange-400">{category.count}</span>
                  <span className="text-gray-400 text-sm">available roles</span>
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-gray-600 text-gray-300 hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300"
                >
                  Browse Roles
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold px-8 py-3">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MovieCategories;
