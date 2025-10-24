export interface Service {
  id: number;
  title: string;
  description: string;
  technologies: {name:string,logo:string}[];
  category: string;
}

export interface ServicesSectionProps {
  services: Service[];
}