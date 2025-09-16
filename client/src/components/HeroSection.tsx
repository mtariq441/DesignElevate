import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackgroundUrl from "@assets/generated_images/Premium_hero_background_80d42764.png";
import profileImageUrl from "@assets/generated_images/Professional_portfolio_headshot_42eb62b4.png";

export default function HeroSection() {
  const handleExploreWork = () => {
    console.log('Navigate to portfolio/expertise');
    // TODO: Navigate to expertise section
  };

  const handleHireMe = () => {
    console.log('Navigate to contact form');
    // TODO: Navigate to contact page
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackgroundUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm backdrop-blur-sm border border-accent/20">
                Web Security & Development Specialist
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-accent">Muhammad Irshad Khan</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transforming digital landscapes through cutting-edge security solutions, 
              innovative web development, and strategic marketing automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 text-lg"
                onClick={handleExploreWork}
                data-testid="button-explore-work"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-3 text-lg border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={handleHireMe}
                data-testid="button-hire-me"
              >
                Hire Me
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" data-testid="stat-projects">50+</div>
                <div className="text-white/70 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" data-testid="stat-clients">25+</div>
                <div className="text-white/70 text-sm">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" data-testid="stat-experience">5+</div>
                <div className="text-white/70 text-sm">Years</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                <img 
                  src={profileImageUrl} 
                  alt="Muhammad Irshad Khan - Professional Portrait" 
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full backdrop-blur-sm border border-accent/30" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </div>
    </section>
  );
}