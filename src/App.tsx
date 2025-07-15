
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import ProjectView from "./pages/ProjectView";
import ProjectEdit from "./pages/ProjectEdit";
import ApplicationReview from "./pages/ApplicationReview";
import MovieDetail from "./pages/MovieDetail";
import RoleDetail from "./pages/RoleDetail";
import Opportunities from "./pages/Opportunities";
import SignUp from "./pages/SignUp";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/project/:id" element={<ProjectView />} />
          <Route path="/project/:id/edit" element={<ProjectEdit />} />
          <Route path="/application/:id/review" element={<ApplicationReview />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/role/:id" element={<RoleDetail />} />
          <Route path="/role/:id/apply" element={<ApplicationFormPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
