import BlogCard from '../BlogCard';

export default function BlogCardExample() {
  // TODO: Remove mock data when implementing real blog system
  const mockBlogs = [
    {
      title: "Advanced Web Security: Protecting Your Digital Assets in 2025",
      excerpt: "Explore the latest security threats and learn how to implement robust protection strategies for your web applications and digital infrastructure.",
      category: "Web Security",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      href: "/blog/advanced-web-security-2025"
    },
    {
      title: "AI-Powered SEO: The Future of Search Optimization",
      excerpt: "Discover how artificial intelligence is revolutionizing SEO strategies and learn to leverage AI tools for better search rankings.",
      category: "AI SEO",
      date: "Dec 12, 2024", 
      readTime: "6 min read",
      href: "/blog/ai-powered-seo-future"
    },
    {
      title: "Marketing Automation: Scaling Your Business Growth",
      excerpt: "Learn how to implement effective marketing automation strategies that drive engagement, nurture leads, and accelerate business growth.",
      category: "Marketing Automation",
      date: "Dec 8, 2024",
      readTime: "10 min read", 
      href: "/blog/marketing-automation-scaling-growth"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {mockBlogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </div>
  );
}