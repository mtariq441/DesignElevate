import { useState } from "react";
import { Search, Filter, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Blog } from "@shared/schema";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all published blogs
  const { 
    data: blogPosts = [], 
    isLoading: blogsLoading, 
    error: blogsError,
    refetch: refetchBlogs
  } = useQuery<Blog[]>({
    queryKey: ['/api/blogs?published=true']
  });

  // Extract unique categories from blog posts
  const categories = [
    "All",
    ...Array.from(new Set(blogPosts.map(post => post.category))).sort()
  ];

  // Transform blog data for display with proper sorting and safe readTime
  const transformedBlogPosts = blogPosts
    .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())
    .map(blog => ({
      title: blog.title,
      excerpt: blog.excerpt,
      category: blog.category,
      date: blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }) : 'Recent',
      readTime: `${blog.readTime || '5'} min read`,
      href: `/blog/${blog.slug}`,
      featured: false, // We could add a featured field to the database later
      tags: [] // We could add a tags field to the database later
    }));

  // Popular posts (first 3 published posts for now)
  const popularPosts = transformedBlogPosts.slice(0, 3).map(post => ({
    title: post.title,
    href: post.href,
    category: post.category
  }));

  const filteredPosts = transformedBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = transformedBlogPosts.filter(post => post.featured);

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

      {/* Featured Posts - Show latest posts as featured for now */}
      {selectedCategory === "All" && !searchQuery && transformedBlogPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <Tag className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {transformedBlogPosts.slice(0, 2).map((post, index) => (
                <Card key={index} className="hover-elevate transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        Latest
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

              {blogsLoading ? (
                // Loading skeleton
                <div className="grid md:grid-cols-2 gap-8">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="animate-pulse">
                      <div className="bg-muted/50 h-48 rounded-lg mb-4"></div>
                      <div className="bg-muted/50 h-4 rounded mb-2"></div>
                      <div className="bg-muted/50 h-3 rounded w-3/4 mb-2"></div>
                      <div className="bg-muted/50 h-3 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : blogsError ? (
                <div className="col-span-full">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
                    <h3 className="text-lg font-semibold text-destructive mb-2">
                      Failed to load articles
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      There was an error loading the blog posts. Please try again.
                    </p>
                    <Button onClick={() => refetchBlogs()} variant="outline" data-testid="button-retry-blogs">
                      Try Again
                    </Button>
                  </div>
                </div>
              ) : filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                  ))}
                </div>
              ) : blogPosts.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      No articles available
                    </h3>
                    <p className="text-muted-foreground">
                      Check back later for new content.
                    </p>
                  </CardContent>
                </Card>
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