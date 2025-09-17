import { useState } from "react";
import { Search, Filter, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "wouter";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // TODO: Replace with real blog data from CMS
  const categories = [
    "All",
    "Web Security", 
    "Web Development",
    "SEO",
    "AI SEO",
    "Marketing Automation",
    "Copywriting & Branding",
    "Business Growth"
  ];

  const blogPosts = [
    {
      title: "Advanced Web Security: Protecting Your Digital Assets in 2025",
      excerpt: "Explore the latest security threats and learn how to implement robust protection strategies for your web applications and digital infrastructure. From zero-trust architecture to AI-powered threat detection.",
      category: "Web Security",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      href: "/blog/advanced-web-security-2025",
      featured: true,
      tags: ["Security", "Penetration Testing", "Compliance"]
    },
    {
      title: "AI-Powered SEO: The Future of Search Optimization",
      excerpt: "Discover how artificial intelligence is revolutionizing SEO strategies and learn to leverage AI tools for better search rankings, content optimization, and user experience enhancement.",
      category: "AI SEO",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      href: "/blog/ai-powered-seo-future",
      featured: true,
      tags: ["AI", "SEO", "Content Strategy"]
    },
    {
      title: "Marketing Automation: Scaling Your Business Growth",
      excerpt: "Learn how to implement effective marketing automation strategies that drive engagement, nurture leads, and accelerate business growth through intelligent workflows and personalization.",
      category: "Marketing Automation",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      href: "/blog/marketing-automation-scaling-growth",
      featured: false,
      tags: ["Automation", "Lead Generation", "CRM"]
    },
    {
      title: "Building Secure React Applications: A Developer's Guide",
      excerpt: "Comprehensive guide to implementing security best practices in React applications, including authentication, data validation, XSS prevention, and secure API communication.",
      category: "Web Development",
      date: "Dec 5, 2024",
      readTime: "12 min read",
      href: "/blog/secure-react-applications-guide",
      featured: false,
      tags: ["React", "Security", "Frontend"]
    },
    {
      title: "Conversion Copywriting: Words That Actually Sell",
      excerpt: "Master the art of persuasive copywriting with proven techniques that convert readers into customers. Learn psychological triggers, storytelling methods, and optimization strategies.",
      category: "Copywriting & Branding",
      date: "Dec 2, 2024",
      readTime: "7 min read",
      href: "/blog/conversion-copywriting-guide",
      featured: false,
      tags: ["Copywriting", "Conversion", "Psychology"]
    },
    {
      title: "Technical SEO Audit: Complete Checklist for 2025",
      excerpt: "Step-by-step technical SEO audit checklist covering Core Web Vitals, crawlability, indexability, schema markup, and performance optimization for better search rankings.",
      category: "SEO",
      date: "Nov 28, 2024",
      readTime: "15 min read",
      href: "/blog/technical-seo-audit-checklist-2025",
      featured: false,
      tags: ["Technical SEO", "Audit", "Performance"]
    },
    {
      title: "Penetration Testing Methodology: From Planning to Reporting",
      excerpt: "Complete guide to penetration testing methodology including reconnaissance, vulnerability assessment, exploitation techniques, and comprehensive reporting best practices.",
      category: "Web Security",
      date: "Nov 25, 2024",
      readTime: "14 min read",
      href: "/blog/penetration-testing-methodology",
      featured: false,
      tags: ["Pen Testing", "Methodology", "Security Audit"]
    },
    {
      title: "Customer Journey Mapping for Marketing Automation",
      excerpt: "Learn how to map effective customer journeys that guide prospects from awareness to advocacy through strategic touchpoints and automated engagement sequences.",
      category: "Marketing Automation",
      date: "Nov 22, 2024",
      readTime: "9 min read",
      href: "/blog/customer-journey-mapping-automation",
      featured: false,
      tags: ["Customer Journey", "Automation", "Strategy"]
    },
    {
      title: "Modern Web Development Best Practices for 2025",
      excerpt: "Stay current with the latest web development trends, tools, and best practices. From performance optimization to accessibility, security, and developer experience.",
      category: "Web Development",
      date: "Nov 18, 2024",
      readTime: "11 min read",
      href: "/blog/web-development-best-practices-2025",
      featured: false,
      tags: ["Best Practices", "Development", "Trends"]
    },
    {
      title: "Building a Content Strategy That Drives Business Growth",
      excerpt: "Comprehensive guide to creating content strategies that align with business objectives, engage target audiences, and drive measurable growth through strategic planning.",
      category: "Business Growth",
      date: "Nov 15, 2024",
      readTime: "8 min read",
      href: "/blog/content-strategy-business-growth",
      featured: false,
      tags: ["Content Strategy", "Growth", "Planning"]
    }
  ];

  const popularPosts = [
    {
      title: "Complete Guide to OWASP Top 10 Security Risks",
      href: "/blog/owasp-top-10-guide",
      category: "Web Security"
    },
    {
      title: "Local SEO Optimization for Small Businesses",
      href: "/blog/local-seo-optimization",
      category: "SEO"
    },
    {
      title: "Email Marketing Automation Best Practices",
      href: "/blog/email-automation-best-practices",
      category: "Marketing Automation"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-6">
            Blog & Insights
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Latest Insights &
            <span className="text-accent"> Expert Knowledge</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Stay ahead with cutting-edge insights, best practices, and in-depth guides on web security, 
            development, SEO, marketing automation, and digital growth strategies.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-blog-search"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && !searchQuery && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Tag className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card key={index} className="hover-elevate transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        Featured
                      </Badge>
                      <Badge variant="outline">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-card-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Link href={post.href}>
                        <Button variant="ghost" size="sm" data-testid={`button-read-featured-${index}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedCategory === "All" ? "All Articles" : selectedCategory}
                  <span className="ml-2 text-muted-foreground text-lg">
                    ({filteredPosts.length})
                  </span>
                </h2>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Filter className="h-4 w-4" />
                  <span>Latest First</span>
                </div>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      No articles found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search or filter criteria.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                      }}
                      data-testid="button-clear-filters"
                    >
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Popular Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-4">
                    Popular Articles
                  </h3>
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <Link key={index} href={post.href}>
                        <div className="group hover-elevate p-3 rounded-lg transition-all duration-300 cursor-pointer">
                          <h4 className="font-medium text-card-foreground group-hover:text-accent text-sm mb-2 line-clamp-2">
                            {post.title}
                          </h4>
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get the latest insights and updates delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input
                      placeholder="Your email address"
                      type="email"
                      data-testid="input-newsletter-email"
                    />
                    <Button size="sm" className="w-full" data-testid="button-subscribe-newsletter">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    No spam. Unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>

              {/* Topics */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-4">
                    Browse Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.slice(1).map((category) => (
                      <Button
                        key={category}
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        data-testid={`button-topic-${category.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}