import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const expertiseItems = [
  { title: "Web Security Specialist", path: "/expertise/web-security" },
  { title: "Web Development Specialist", path: "/expertise/web-development" },
  { title: "SEO Specialist", path: "/expertise/seo" },
  { title: "Marketing Automation", path: "/expertise/marketing-automation" },
  { title: "Copywriting Specialist", path: "/expertise/copywriting" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 hover-elevate rounded-md px-3 py-2" data-testid="link-home">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">MK</span>
              </div>
              <span className="font-semibold text-foreground hidden sm:block">
                Muhammad Irshad Khan
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <Button 
                variant={isActive("/") ? "secondary" : "ghost"} 
                size="sm"
                data-testid="button-nav-home"
              >
                Home
              </Button>
            </Link>
            <Link href="/who-am-i">
              <Button 
                variant={isActive("/who-am-i") ? "secondary" : "ghost"} 
                size="sm"
                data-testid="button-nav-about"
              >
                Who Am I
              </Button>
            </Link>
            <Link href="/education">
              <Button 
                variant={isActive("/education") ? "secondary" : "ghost"} 
                size="sm"
                data-testid="button-nav-education"
              >
                Education
              </Button>
            </Link>
            
            {/* Expertise Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={location.startsWith("/expertise") ? "secondary" : "ghost"} 
                  size="sm"
                  data-testid="button-nav-expertise"
                >
                  Expertise
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <Link href="/expertise">
                  <DropdownMenuItem data-testid="link-expertise-hub">
                    <span className="font-medium">Expertise Hub</span>
                  </DropdownMenuItem>
                </Link>
                <div className="border-t border-border my-1" />
                {expertiseItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <DropdownMenuItem data-testid={`link-${item.path.split('/').pop()}`}>
                      {item.title}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/blog">
              <Button 
                variant={isActive("/blog") ? "secondary" : "ghost"} 
                size="sm"
                data-testid="button-nav-blog"
              >
                Blog
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant={isActive("/contact") ? "secondary" : "ghost"} 
                size="sm"
                data-testid="button-nav-contact"
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <Button 
                  variant={isActive("/") ? "secondary" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="button-mobile-home"
                >
                  Home
                </Button>
              </Link>
              <Link href="/who-am-i">
                <Button 
                  variant={isActive("/who-am-i") ? "secondary" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="button-mobile-about"
                >
                  Who Am I
                </Button>
              </Link>
              <Link href="/education">
                <Button 
                  variant={isActive("/education") ? "secondary" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="button-mobile-education"
                >
                  Education
                </Button>
              </Link>
              <Link href="/expertise">
                <Button 
                  variant={isActive("/expertise") ? "secondary" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="button-mobile-expertise"
                >
                  Expertise Hub
                </Button>
              </Link>
              <Link href="/blog">
                <Button 
                  variant={isActive("/blog") ? "secondary" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="button-mobile-blog"
                >
                  Blog
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant={isActive("/contact") ? "secondary" : "ghost"} 
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="button-mobile-contact"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}