export interface Service {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
}

export interface ServicesSectionProps {
  services: Service[];
}