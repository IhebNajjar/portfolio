export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'project' | 'achievement' | 'certificate';
}

export const timelineItems: TimelineItem[] = [
  {
    id: 'education-iset',
    year: '2023 – Present',
    title: 'Bachelor\'s Degree in Information Systems Development',
    institution: 'ISET Nabeul — Institut Supérieur des Études Technologiques de Nabeul, Tunisia',
    description:
      'Studying software engineering, web development, databases, system analysis, and project management. Applying academic concepts through hands-on projects in web, mobile, and API development.',
    type: 'education',
  },
  {
    id: 'project-edtech',
    year: '2026',
    title: 'EdTech Learning Platform',
    institution: 'Personal Project',
    description:
      'Built a full-stack online learning platform using Next.js 16, Prisma, and SQLite — featuring user auth, course enrolment, lesson progress tracking, and a rating system.',
    type: 'project',
  },
  {
    id: 'project-ashop',
    year: '2026',
    title: 'Ashop Tunisia — Laravel E-Commerce',
    institution: 'Personal Project',
    description:
      'Developed a complete Laravel e-commerce site with 3-level category hierarchy, product variants, shopping cart, checkout flow, and an admin panel.',
    type: 'project',
  },
  {
    id: 'project-booking',
    year: '2026',
    title: 'Booking System',
    institution: 'Personal Project',
    description:
      'Designed and built a full-stack booking application with Express 5, SQLite, and React — including real-time slot polling, admin management, and atomic booking logic.',
    type: 'project',
  },
  {
    id: 'project-recipe-api',
    year: '2026',
    title: 'FlavorBook REST API',
    institution: 'Personal Project',
    description:
      'Architected a layered REST API for recipes (Express 5 + SQLite) with API-key auth, Swagger/OpenAPI documentation, and a companion React frontend.',
    type: 'project',
  },
  {
    id: 'project-gh-explorer',
    year: '2026',
    title: 'GitHub Repo Explorer',
    institution: 'Personal Project',
    description:
      'Built a React + Vite SPA that integrates the GitHub API to search, compare, bookmark, and export repository data.',
    type: 'project',
  },
];
