import { promises as fs } from 'fs';
import path from 'path';

// Type definitions for static data
export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  imageSrc?: string;
  readTime: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  imageSrc?: string;
  icon: string;
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  imageSrc?: string;
  rating: number;
  published: boolean;
  createdAt: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  businessOrigin?: string;
  businessGenre?: string;
  services: string[];
  status: string;
  imageSrc?: string;
  websiteUrl?: string;
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: string;
  description?: string;
  updatedAt: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  status: string;
  createdAt: string;
}

export interface IStorage {
  // Blog operations
  getAllBlogs(): Promise<Blog[]>;
  getPublishedBlogs(): Promise<Blog[]>;
  getBlogById(id: string): Promise<Blog | undefined>;
  getBlogBySlug(slug: string): Promise<Blog | undefined>;

  // Service operations
  getAllServices(): Promise<Service[]>;
  getPublishedServices(): Promise<Service[]>;
  getServiceById(id: string): Promise<Service | undefined>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;

  // Testimonial operations
  getAllTestimonials(): Promise<Testimonial[]>;
  getPublishedTestimonials(): Promise<Testimonial[]>;
  getTestimonialById(id: string): Promise<Testimonial | undefined>;

  // Project operations
  getAllProjects(): Promise<Project[]>;
  getPublishedProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | undefined>;
  getProjectBySlug(slug: string): Promise<Project | undefined>;

  // Site settings operations
  getAllSettings(): Promise<SiteSetting[]>;
  getSettingByKey(key: string): Promise<SiteSetting | undefined>;

  // Contact submission operations (simplified for static site)
  createContactSubmission(submission: Omit<ContactSubmission, 'id' | 'status' | 'createdAt'>): Promise<ContactSubmission>;
}

export class StaticStorage implements IStorage {
  private dataPath = path.join(process.cwd(), 'server', 'data');

  private async readJsonFile<T>(filename: string): Promise<T[]> {
    try {
      const filePath = path.join(this.dataPath, filename);
      const data = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading ${filename}:`, error);
      return [];
    }
  }

  // Blog operations
  async getAllBlogs(): Promise<Blog[]> {
    return this.readJsonFile<Blog>('blogs.json');
  }

  async getPublishedBlogs(): Promise<Blog[]> {
    const blogs = await this.getAllBlogs();
    return blogs.filter(blog => blog.published).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getBlogById(id: string): Promise<Blog | undefined> {
    const blogs = await this.getAllBlogs();
    return blogs.find(blog => blog.id === id);
  }

  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    const blogs = await this.getAllBlogs();
    return blogs.find(blog => blog.slug === slug);
  }

  // Service operations
  async getAllServices(): Promise<Service[]> {
    return this.readJsonFile<Service>('services.json');
  }

  async getPublishedServices(): Promise<Service[]> {
    const services = await this.getAllServices();
    return services.filter(service => service.published).sort((a, b) => a.order - b.order);
  }

  async getServiceById(id: string): Promise<Service | undefined> {
    const services = await this.getAllServices();
    return services.find(service => service.id === id);
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    const services = await this.getAllServices();
    return services.find(service => service.slug === slug);
  }

  // Testimonial operations
  async getAllTestimonials(): Promise<Testimonial[]> {
    return this.readJsonFile<Testimonial>('testimonials.json');
  }

  async getPublishedTestimonials(): Promise<Testimonial[]> {
    const testimonials = await this.getAllTestimonials();
    return testimonials.filter(testimonial => testimonial.published).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getTestimonialById(id: string): Promise<Testimonial | undefined> {
    const testimonials = await this.getAllTestimonials();
    return testimonials.find(testimonial => testimonial.id === id);
  }

  // Project operations
  async getAllProjects(): Promise<Project[]> {
    return this.readJsonFile<Project>('projects.json');
  }

  async getPublishedProjects(): Promise<Project[]> {
    const projects = await this.getAllProjects();
    return projects.filter(project => project.published).sort((a, b) => a.order - b.order);
  }

  async getProjectById(id: string): Promise<Project | undefined> {
    const projects = await this.getAllProjects();
    return projects.find(project => project.id === id);
  }

  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    const projects = await this.getAllProjects();
    return projects.find(project => project.slug === slug);
  }

  // Site settings operations
  async getAllSettings(): Promise<SiteSetting[]> {
    return this.readJsonFile<SiteSetting>('site-settings.json');
  }

  async getSettingByKey(key: string): Promise<SiteSetting | undefined> {
    const settings = await this.getAllSettings();
    return settings.find(setting => setting.key === key);
  }

  // Contact submission operations (simplified for static site)
  async createContactSubmission(submission: Omit<ContactSubmission, 'id' | 'status' | 'createdAt'>): Promise<ContactSubmission> {
    // For a static site, we'll just return a success response
    // In a real scenario, this might send an email or save to a file
    const contactSubmission: ContactSubmission = {
      id: Math.random().toString(36).substring(2, 15),
      ...submission,
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    // Log the submission for debugging (in production, you might want to send this via email)
    console.log('New contact submission:', contactSubmission);

    return contactSubmission;
  }
}

export const storage = new StaticStorage();