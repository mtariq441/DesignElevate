import ContactForm from "@/components/ContactForm";
import { Clock, MessageCircle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const responseProcess = [
    {
      icon: MessageCircle,
      title: "Submit Your Inquiry",
      description: "Fill out the contact form with your project details and requirements.",
      time: "5 minutes"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "I'll review your inquiry and respond with initial thoughts and next steps.",
      time: "2-4 hours"
    },
    {
      icon: CheckCircle,
      title: "Project Discussion",
      description: "We'll schedule a call to discuss your project in detail and create a plan.",
      time: "24-48 hours"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm mb-6">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Let's Discuss Your
            <span className="text-accent"> Next Project</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Ready to secure, develop, and optimize your digital presence? I'm here to help 
            transform your ideas into powerful, secure, and scalable solutions.
          </p>
        </div>
      </section>

      {/* Response Process */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How I Work With New Clients</h2>
            <p className="text-muted-foreground">
              A streamlined process to get your project started quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {responseProcess.map((step, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="text-sm font-medium text-accent">
                    Timeline: {step.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Start Your Project Today</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Share your project details and I'll get back to you with a tailored solution 
              and timeline that fits your needs and budget.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about working together.
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  What types of projects do you work on?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in web security assessments, full-stack web development, SEO optimization, 
                  marketing automation setup, and copywriting for digital platforms. Whether you need 
                  a security audit, a new web application, or a comprehensive digital marketing strategy, 
                  I can help.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  How do you ensure project security and confidentiality?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Security is at the core of everything I do. I sign NDAs for all projects, use secure 
                  communication channels, follow industry best practices for data protection, and can 
                  work within your existing security protocols and compliance requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  What's your typical project timeline?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Project timelines vary based on complexity and scope. Security audits typically take 1-2 weeks, 
                  web development projects range from 4-12 weeks, and SEO/marketing campaigns are ongoing with 
                  initial setup taking 2-4 weeks. I'll provide a detailed timeline after our initial consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Do you provide ongoing support and maintenance?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes! I offer ongoing maintenance packages for web applications, continuous security monitoring, 
                  SEO optimization, and marketing campaign management. I believe in building long-term partnerships 
                  with my clients to ensure their continued success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}