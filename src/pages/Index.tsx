
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuickStats from "@/components/QuickStats";
import RecommendedMovies from "@/components/RecommendedMovies";
import CastingCalls from "@/components/CastingCalls";
import MovieCategories from "@/components/MovieCategories";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <QuickStats />
      <RecommendedMovies />
      <CastingCalls />
      <MovieCategories />
      
      {/* Footer */}
      <footer className="bg-black border-t border-orange-500/20 px-6 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 FilmCast. Connecting talent with opportunity in the film industry.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
