import { Link } from "wouter";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "Who Am I", href: "/who-am-i" },
    { title: "Expertise", href: "/expertise" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  const expertiseLinks = [
    { title: "Web Security", href: "/expertise/web-security" },
    { title: "Web Development", href: "/expertise/web-development" },
    { title: "SEO Services", href: "/expertise/seo" },
    { title: "Marketing Automation", href: "/expertise/marketing-automation" },
    { title: "Copywriting", href: "/expertise/copywriting" },
  ];

  const handleSocialClick = (platform: string) => {
    console.log(`Navigate to ${platform} profile`);
    // TODO: Add actual social media URLs
  };

  return (
    <footer className="glass border-t border-neon-cyan/20 backdrop-blur-xl relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/50 via-card/30 to-background/50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-xl flex items-center justify-center neon-border shadow-lg float">
                <span className="text-background font-bold text-lg">MK</span>
              </div>
              <span className="font-semibold text-white text-xl">Muhammad Irshad Khan</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transforming digital landscapes through cutting-edge security solutions, 
              innovative web development, and strategic marketing automation.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9"
                onClick={() => handleSocialClick("LinkedIn")}
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9"
                onClick={() => handleSocialClick("Twitter")}
                data-testid="button-social-twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9"
                onClick={() => handleSocialClick("GitHub")}
                data-testid="button-social-github"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9"
                onClick={() => handleSocialClick("Email")}
                data-testid="button-social-email"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-muted-foreground hover:text-accent justify-start"
                      data-testid={`link-footer-${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.title}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Expertise</h3>
            <ul className="space-y-3">
              {expertiseLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-muted-foreground hover:text-accent justify-start"
                      data-testid={`link-footer-${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.title}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Get In Touch</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p data-testid="footer-email">
                <strong>Email:</strong><br />
                contact@irshadkhan.dev
              </p>
              <p data-testid="footer-phone">
                <strong>Phone:</strong><br />
                +92 300 1234567
              </p>
              <p data-testid="footer-location">
                <strong>Location:</strong><br />
                Islamabad, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
              © {currentYear} Muhammad Irshad Khan. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Button
                variant="ghost"
                className="p-0 h-auto text-muted-foreground hover:text-accent"
                data-testid="link-privacy-policy"
              >
                Privacy Policy
              </Button>
              <Button
                variant="ghost"
                className="p-0 h-auto text-muted-foreground hover:text-accent"
                data-testid="link-terms-service"
              >
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}