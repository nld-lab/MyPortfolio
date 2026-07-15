export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  viewUrl?: string ;
  type?: string;
}
