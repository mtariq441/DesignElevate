import ExpertiseCard from '../ExpertiseCard';
import { Shield, Code, TrendingUp, Zap, PenTool } from 'lucide-react';
import webSecurityImg from "@assets/generated_images/Web_security_illustration_dd7c81da.png";
import webDevImg from "@assets/generated_images/Web_development_illustration_a68ada74.png";

export default function ExpertiseCardExample() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <ExpertiseCard
        title="Web Security Specialist"
        description="Protecting your digital assets with advanced security measures and vulnerability assessments."
        icon={Shield}
        imageSrc={webSecurityImg}
        href="/expertise/web-security"
        features={[
          "Penetration Testing",
          "Vulnerability Assessment",
          "Security Auditing",
          "Compliance Management"
        ]}
      />
      
      <ExpertiseCard
        title="Web Development"
        description="Building modern, scalable web applications with cutting-edge technologies."
        icon={Code}
        imageSrc={webDevImg}
        href="/expertise/web-development"
        features={[
          "Full-Stack Development",
          "React & Node.js",
          "API Integration",
          "Performance Optimization"
        ]}
      />
      
      <ExpertiseCard
        title="SEO Specialist"
        description="Driving organic traffic and improving search rankings through strategic SEO."
        icon={TrendingUp}
        href="/expertise/seo"
        features={[
          "Keyword Research",
          "Technical SEO",
          "Content Optimization",
          "Local SEO"
        ]}
      />
    </div>
  );
}