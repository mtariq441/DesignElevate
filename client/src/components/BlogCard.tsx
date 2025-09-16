import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageSrc?: string;
  href: string;
}

export default function BlogCard({ 
  title, 
  excerpt, 
  category, 
  date, 
  readTime, 
  imageSrc, 
  href 
}: BlogCardProps) {
  
  const handleReadMore = () => {
    console.log(`Navigate to ${href}`);
    // TODO: Implement navigation to blog post
  };

  return (
    <Card className="group hover-elevate transition-all duration-300 h-full overflow-hidden">
      {/* Image */}
      {imageSrc && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            data-testid={`img-blog-${title.toLowerCase().replace(/\s+/g, '-')}`}
          />
        </div>
      )}

      <CardContent className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <Badge 
            variant="secondary" 
            className="bg-accent/10 text-accent hover:bg-accent/20"
            data-testid={`badge-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {category}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-card-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span data-testid={`text-date-${date}`}>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span data-testid={`text-read-time-${readTime}`}>{readTime}</span>
          </div>
        </div>

        {/* Read More Button */}
        <Button 
          variant="ghost" 
          className="group/btn p-0 h-auto font-medium text-accent hover:text-accent"
          onClick={handleReadMore}
          data-testid={`button-read-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}