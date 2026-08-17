export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  image?: string;
  features: string[];
  benefits: string[];
  published: boolean;
  order: number;
}

export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  featuredImage: string;
  images: string[];
  category: string;
  technologies: string[];
  client: string;
  status: ProjectStatus;
  date: string;
  featured: boolean;
  published: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  featuredImage: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  status: "draft" | "published";
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}