import { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  MessageSquare, 
  FolderOpen, 
  Settings, 
  Mail, 
  LogOut,
  PlusCircle,
  BarChart3,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import type { Blog, Service, Testimonial, Project, ContactSubmission } from "@shared/schema";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  // Check authentication
  const { data: authData, isLoading: authLoading } = useQuery<{ user: { id: string; username: string } }>({
    queryKey: ["/api/auth/me"],
    retry: false,
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !authData) {
      setLocation("/admin/login");
    }
  }, [authData, authLoading, setLocation]);

  // Fetch dashboard data
  const { data: blogs = [] } = useQuery<Blog[]>({
    queryKey: ["/api/blogs"],
    enabled: !!authData,
  });

  const { data: services = [] } = useQuery<Service[]>({
    queryKey: ["/api/services"],
    enabled: !!authData,
  });

  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
    enabled: !!authData,
  });

  const { data: projects = [] } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
    enabled: !!authData,
  });

  const { data: contactSubmissions = [] } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact-submissions"],
    enabled: !!authData,
  });

  // Logout mutation
  const logoutMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/auth/logout");
    },
    onSuccess: () => {
      queryClient.clear();
      setLocation("/admin/login");
      toast({
        title: "Success",
        description: "Successfully logged out",
      });
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-card flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!authData) {
    return null;
  }

  const stats = [
    {
      title: "Total Blogs",
      value: blogs.length,
      published: blogs.filter(blog => blog.published).length,
      icon: FileText,
      color: "text-blue-400",
    },
    {
      title: "Services",
      value: services.length,
      published: services.filter(service => service.published).length,
      icon: Briefcase,
      color: "text-green-400",
    },
    {
      title: "Testimonials",
      value: testimonials.length,
      published: testimonials.filter(testimonial => testimonial.published).length,
      icon: MessageSquare,
      color: "text-purple-400",
    },
    {
      title: "Projects",
      value: projects.length,
      published: projects.filter(project => project.published).length,
      icon: FolderOpen,
      color: "text-orange-400",
    },
    {
      title: "Contact Submissions",
      value: contactSubmissions.length,
      published: contactSubmissions.filter(submission => submission.status === "new").length,
      icon: Mail,
      color: "text-pink-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-card">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-neon-cyan/20 bg-card/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <LayoutDashboard className="h-8 w-8 text-neon-cyan" />
                <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-white/70">Welcome, {authData?.user?.username}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass border-neon-cyan/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white/70">{stat.title}</p>
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-white/50">
                        {stat.published} published
                      </p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Management Tabs */}
          <Tabs defaultValue="blogs" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-card/50">
              <TabsTrigger value="blogs" className="data-[state=active]:bg-neon-cyan/20">
                <FileText className="h-4 w-4 mr-2" />
                Blogs
              </TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:bg-neon-cyan/20">
                <Briefcase className="h-4 w-4 mr-2" />
                Services
              </TabsTrigger>
              <TabsTrigger value="testimonials" className="data-[state=active]:bg-neon-cyan/20">
                <MessageSquare className="h-4 w-4 mr-2" />
                Testimonials
              </TabsTrigger>
              <TabsTrigger value="projects" className="data-[state=active]:bg-neon-cyan/20">
                <FolderOpen className="h-4 w-4 mr-2" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="contacts" className="data-[state=active]:bg-neon-cyan/20">
                <Mail className="h-4 w-4 mr-2" />
                Contacts
              </TabsTrigger>
            </TabsList>

            {/* Blogs Tab */}
            <TabsContent value="blogs">
              <Card className="glass border-neon-cyan/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Blog Posts</CardTitle>
                      <CardDescription className="text-white/70">
                        Manage your blog posts and articles
                      </CardDescription>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-neon-cyan to-neon-blue"
                      data-testid="button-create-blog"
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Create Blog
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogs.map((blog) => (
                      <div
                        key={blog.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-card/30 border border-white/10"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold text-white">{blog.title}</h3>
                            <Badge variant={blog.published ? "default" : "secondary"}>
                              {blog.published ? "Published" : "Draft"}
                            </Badge>
                          </div>
                          <p className="text-sm text-white/70 mt-1">{blog.excerpt}</p>
                          <p className="text-xs text-white/50 mt-2">
                            Category: {blog.category} • Read time: {blog.readTime}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" data-testid={`button-view-blog-${blog.id}`}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" data-testid={`button-edit-blog-${blog.id}`}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" data-testid={`button-delete-blog-${blog.id}`}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {blogs.length === 0 && (
                      <div className="text-center py-8 text-white/50">
                        No blog posts found. Create your first blog post to get started.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services">
              <Card className="glass border-neon-cyan/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Services</CardTitle>
                      <CardDescription className="text-white/70">
                        Manage your service offerings and expertise areas
                      </CardDescription>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-neon-cyan to-neon-blue"
                      data-testid="button-create-service"
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add Service
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-card/30 border border-white/10"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold text-white">{service.title}</h3>
                            <Badge variant={service.published ? "default" : "secondary"}>
                              {service.published ? "Published" : "Hidden"}
                            </Badge>
                          </div>
                          <p className="text-sm text-white/70 mt-1">{service.shortDescription}</p>
                          <p className="text-xs text-white/50 mt-2">
                            Order: {service.order} • Icon: {service.icon || "None"}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" data-testid={`button-edit-service-${service.id}`}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" data-testid={`button-delete-service-${service.id}`}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {services.length === 0 && (
                      <div className="text-center py-8 text-white/50">
                        No services found. Add your first service to get started.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials">
              <Card className="glass border-neon-cyan/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Testimonials</CardTitle>
                      <CardDescription className="text-white/70">
                        Manage client testimonials and reviews
                      </CardDescription>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-neon-cyan to-neon-blue"
                      data-testid="button-create-testimonial"
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add Testimonial
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {testimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-card/30 border border-white/10"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold text-white">{testimonial.name}</h3>
                            <Badge variant={testimonial.published ? "default" : "secondary"}>
                              {testimonial.published ? "Published" : "Hidden"}
                            </Badge>
                          </div>
                          <p className="text-sm text-white/70 mt-1">
                            {testimonial.position} at {testimonial.company}
                          </p>
                          <p className="text-sm text-white/60 mt-2 line-clamp-2">
                            "{testimonial.content}"
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" data-testid={`button-edit-testimonial-${testimonial.id}`}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" data-testid={`button-delete-testimonial-${testimonial.id}`}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {testimonials.length === 0 && (
                      <div className="text-center py-8 text-white/50">
                        No testimonials found. Add your first testimonial to get started.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects">
              <Card className="glass border-neon-cyan/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Projects</CardTitle>
                      <CardDescription className="text-white/70">
                        Manage your portfolio projects and case studies
                      </CardDescription>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-neon-cyan to-neon-blue"
                      data-testid="button-create-project"
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add Project
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-card/30 border border-white/10"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold text-white">{project.title}</h3>
                            <Badge variant={project.published ? "default" : "secondary"}>
                              {project.published ? "Published" : "Hidden"}
                            </Badge>
                            <Badge variant="outline">{project.status}</Badge>
                          </div>
                          <p className="text-sm text-white/70 mt-1">{project.description}</p>
                          <p className="text-xs text-white/50 mt-2">
                            {project.businessOrigin} • {project.businessGenre}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline" data-testid={`button-edit-project-${project.id}`}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" data-testid={`button-delete-project-${project.id}`}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {projects.length === 0 && (
                      <div className="text-center py-8 text-white/50">
                        No projects found. Add your first project to get started.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contacts Tab */}
            <TabsContent value="contacts">
              <Card className="glass border-neon-cyan/30">
                <CardHeader>
                  <CardTitle className="text-white">Contact Submissions</CardTitle>
                  <CardDescription className="text-white/70">
                    View and manage contact form submissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactSubmissions.map((submission) => (
                      <div
                        key={submission.id}
                        className="p-4 rounded-lg bg-card/30 border border-white/10"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold text-white">{submission.name}</h3>
                            <Badge variant={
                              submission.status === "new" ? "destructive" :
                              submission.status === "contacted" ? "default" : "secondary"
                            }>
                              {submission.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-white/50">
                            {new Date(submission.createdAt || "").toLocaleDateString()}
                          </p>
                        </div>
                        <p className="text-sm text-white/70 mb-2">
                          {submission.email} • {submission.company || "No company"}
                        </p>
                        <p className="text-sm text-white/60 mb-2">
                          Service: {submission.service || "Not specified"} • Budget: {submission.budget || "Not specified"}
                        </p>
                        <p className="text-sm text-white/80 bg-card/20 p-3 rounded">
                          {submission.message}
                        </p>
                      </div>
                    ))}
                    {contactSubmissions.length === 0 && (
                      <div className="text-center py-8 text-white/50">
                        No contact submissions found.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}