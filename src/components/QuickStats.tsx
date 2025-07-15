
import { TrendingUp, Clock, Users, Award } from "lucide-react";

const QuickStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      label: "Active Applications",
      value: "8",
      change: "+2 this week",
      color: "text-green-400"
    },
    {
      icon: Clock,
      label: "Pending Responses",
      value: "5",
      change: "2 urgent",
      color: "text-orange-400"
    },
    {
      icon: Users,
      label: "Profile Views",
      value: "142",
      change: "+18% this month",
      color: "text-blue-400"
    },
    {
      icon: Award,
      label: "Success Rate",
      value: "73%",
      change: "+5% improvement",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="px-6 py-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className={`text-xs ${stat.color}`}>{stat.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
