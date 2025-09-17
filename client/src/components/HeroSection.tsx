import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackgroundUrl from "@assets/generated_images/Premium_hero_background_80d42764.png";
import profileImageUrl from "@assets/image_1758126414974.png";

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
      {/* Premium Dark Background with Animated Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card animate-gradient-shift" />
      
      {/* Neon Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 glass text-neon-cyan font-semibold rounded-full text-sm backdrop-blur-sm border border-neon-cyan/30 neon-border shadow-lg">
                Web Security & Development Specialist
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-white font-extrabold">Muhammad Irshad Khan</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transforming digital landscapes through cutting-edge security solutions, 
              innovative web development, and strategic marketing automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-cyan to-neon-blue text-background hover:from-neon-cyan/90 hover:to-neon-blue/90 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-neon-cyan/30 transform hover:scale-105 transition-all duration-300 neon-border"
                onClick={handleExploreWork}
                data-testid="button-explore-work"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="glass px-8 py-4 text-lg border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10 backdrop-blur-sm hover:border-neon-purple/60 transition-all duration-300 hover:scale-105"
                onClick={handleHireMe}
                data-testid="button-hire-me"
              >
                Hire Me
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Premium Stats with Neon Effects */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-neon-cyan/20">
              <div className="text-center glass rounded-xl p-4 neon-border">
                <div className="text-3xl font-bold text-neon-cyan" data-testid="stat-projects">50+</div>
                <div className="text-muted-foreground text-sm mt-1">Projects</div>
              </div>
              <div className="text-center glass rounded-xl p-4 neon-border">
                <div className="text-3xl font-bold text-neon-cyan" data-testid="stat-clients">25+</div>
                <div className="text-muted-foreground text-sm mt-1">Clients</div>
              </div>
              <div className="text-center glass rounded-xl p-4 neon-border">
                <div className="text-3xl font-bold text-neon-cyan" data-testid="stat-experience">5+</div>
                <div className="text-muted-foreground text-sm mt-1">Years</div>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative float">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-neon-cyan shadow-2xl neon-glow relative">
                <img 
                  src={profileImageUrl} 
                  alt="Muhammad Irshad Khan - Professional Portrait" 
                  className="w-full h-full object-cover filter brightness-110 contrast-110"
                  data-testid="img-profile"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/10 to-transparent" />
              </div>
              
              {/* Premium Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 rounded-full backdrop-blur-sm border border-neon-purple/50 float animate-neon-glow" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full backdrop-blur-sm border border-neon-cyan/40 float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/4 -left-8 w-12 h-12 bg-neon-blue/20 rounded-full backdrop-blur-sm border border-neon-blue/40 float" style={{ animationDelay: '2s' }} />
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