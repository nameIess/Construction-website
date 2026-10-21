export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
  year: string;
  area: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
}

export interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  project: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  icon: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  snippet: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
}
