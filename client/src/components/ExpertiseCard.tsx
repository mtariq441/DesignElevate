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
    <Card className="group hover-elevate transition-all duration-300 h-full">
      <CardContent className="p-8">
        {/* Icon and Image */}
        <div className="mb-6">
          {imageSrc ? (
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-accent/10 flex items-center justify-center mb-4">
              <img 
                src={imageSrc} 
                alt={title}
                className="w-12 h-12 object-cover"
                data-testid={`img-${title.toLowerCase().replace(/\s+/g, '-')}`}
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Icon className="h-8 w-8 text-accent" />
            </div>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button 
          variant="ghost" 
          className="group/btn p-0 h-auto font-medium text-accent hover:text-accent"
          onClick={handleLearnMore}
          data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}