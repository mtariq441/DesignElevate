import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc?: string;
  href: string;
  features: string[];
}

export default function ExpertiseCard({ 
  title, 
  description, 
  icon: Icon, 
  imageSrc, 
  href,
  features 
}: ExpertiseCardProps) {
  
  const handleLearnMore = () => {
    console.log(`Navigate to ${href}`);
    // TODO: Implement navigation to expertise page
  };

  return (
    <Card className="group h-full hover:scale-105 transition-all duration-500 hover:shadow-neon-cyan/20">
      <CardContent className="p-8 relative">
        {/* Icon and Image with Neon Glow */}
        <div className="mb-6">
          {imageSrc ? (
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-4 float">
              <img 
                src={imageSrc} 
                alt={title}
                className="w-12 h-12 object-cover filter brightness-110"
                data-testid={`img-${title.toLowerCase().replace(/\s+/g, '-')}`}
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-4 float">
              <Icon className="h-8 w-8 text-neon-cyan group-hover:text-neon-purple transition-colors duration-300" />
            </div>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon-cyan transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3 animate-pulse" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button with Neon Effect */}
        <Button 
          variant="ghost" 
          className="group/btn p-0 h-auto font-medium text-neon-cyan hover:text-neon-purple transition-all duration-300 hover:glow"
          onClick={handleLearnMore}
          data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:text-neon-purple transition-all duration-300" />
        </Button>
      </CardContent>
    </Card>
  );
}