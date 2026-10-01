export type SkillLevel = 'experienced' | 'project-used' | 'learning';

export interface Skill {
  name: string;
  level: SkillLevel;
  icon: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML', level: 'experienced', icon: 'html5' },
      { name: 'CSS', level: 'experienced', icon: 'css3' },
      { name: 'JavaScript', level: 'experienced', icon: 'javascript' },
      { name: 'React', level: 'experienced', icon: 'react' },
      { name: 'Next.js', level: 'learning', icon: 'nextjs' },
      { name: 'Tailwind CSS', level: 'experienced', icon: 'tailwind' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 'experienced', icon: 'nodejs' },
      { name: 'Express', level: 'experienced', icon: 'express' },
      { name: 'Spring Boot', level: 'project-used', icon: 'spring' },
      { name: 'Laravel', level: 'project-used', icon: 'laravel' },
    ],
  },
  {
    category: 'Mobile',
    icon: '📱',
    skills: [
      { name: 'Flutter', level: 'learning', icon: 'flutter' },
      { name: 'React Native', level: 'learning', icon: 'react' },
      { name: 'Android Studio', level: 'project-used', icon: 'android' },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 'experienced', icon: 'mysql' },
      { name: 'MongoDB', level: 'experienced', icon: 'mongodb' },
      { name: 'SQLite', level: 'project-used', icon: 'sqlite' },
    ],
  },
  {
    category: 'Design',
    icon: '✏️',
    skills: [
      { name: 'Figma', level: 'experienced', icon: 'figma' },
      { name: 'UI/UX', level: 'experienced', icon: 'ux' },
    ],
  },
  {
    category: 'Tools & APIs',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 'experienced', icon: 'git' },
      { name: 'GitHub', level: 'experienced', icon: 'github' },
      { name: 'Swagger', level: 'project-used', icon: 'swagger' },
      { name: 'JWT', level: 'project-used', icon: 'jwt' },
      { name: 'OAuth', level: 'project-used', icon: 'oauth' },
    ],
  },
  {
    category: 'Data & AI',
    icon: '📊',
    skills: [
      { name: 'Power BI', level: 'project-used', icon: 'powerbi' },
      { name: 'Machine Learning', level: 'learning', icon: 'ml' },
    ],
  },
];
