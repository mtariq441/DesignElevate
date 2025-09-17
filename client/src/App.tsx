import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Home from "@/pages/Home";
import WhoAmI from "@/pages/WhoAmI";
import Education from "@/pages/Education";
import Contact from "@/pages/Contact";
import ExpertiseHub from "@/pages/ExpertiseHub";
import WebSecurityExpertise from "@/pages/WebSecurityExpertise";
import WebDevelopmentExpertise from "@/pages/WebDevelopmentExpertise";
import NotFound from "@/pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/who-am-i" component={WhoAmI} />
      <Route path="/education" component={Education} />
      <Route path="/expertise" component={ExpertiseHub} />
      <Route path="/expertise/web-security" component={WebSecurityExpertise} />
      <Route path="/expertise/web-development" component={WebDevelopmentExpertise} />
      <Route path="/contact" component={Contact} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          {/* Navigation */}
          <Navigation />
          
          {/* Theme Toggle - Fixed Position */}
          <div className="fixed top-4 right-4 z-40">
            <ThemeToggle />
          </div>
          
          {/* Main Content */}
          <main className="flex-1">
            <Router />
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
