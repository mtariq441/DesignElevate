import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  type: "education" | "certification" | "experience";
  status: "completed" | "current";
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  organization,
  period,
  location,
  description,
  type,
  status,
  isLast = false
}: TimelineItemProps) {
  
  const getTypeColor = () => {
    switch (type) {
      case "education":
        return "bg-blue-500";
      case "certification":
        return "bg-accent";
      case "experience":
        return "bg-green-500";
      default:
        return "bg-accent";
    }
  };

  const getTypeBadge = () => {
    switch (type) {
      case "education":
        return "Education";
      case "certification":
        return "Certification";
      case "experience":
        return "Experience";
    }
  };

  return (
    <div className="flex">
      {/* Timeline Line and Dot */}
      <div className="flex flex-col items-center mr-6">
        {/* Dot */}
        <div className={`w-4 h-4 rounded-full ${getTypeColor()} border-4 border-background z-10`} />
        
        {/* Line */}
        {!isLast && (
          <div className="w-px h-full bg-border mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <Card className="hover-elevate transition-all duration-300">
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge 
                variant="secondary" 
                className="text-xs"
                data-testid={`badge-type-${type}`}
              >
                {getTypeBadge()}
              </Badge>
              {status === "current" && (
                <Badge 
                  variant="default" 
                  className="text-xs bg-accent text-accent-foreground"
                  data-testid="badge-current"
                >
                  Current
                </Badge>
              )}
            </div>

            {/* Title and Organization */}
            <h3 className="text-xl font-semibold text-card-foreground mb-2" data-testid="text-title">
              {title}
            </h3>
            <h4 className="text-lg font-medium text-accent mb-3" data-testid="text-organization">
              {organization}
            </h4>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span data-testid="text-period">{period}</span>
              </div>
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span data-testid="text-location">{location}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed" data-testid="text-description">
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}