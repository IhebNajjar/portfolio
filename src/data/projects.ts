export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  approach: string;
  features: string[];
  stack: string[];
  myRole: string;
  image: string;
  repoUrl: string | null;
  liveUrl: string | null;
  status: 'completed' | 'in-progress' | 'placeholder';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'booking-system',
    title: 'Booking System',
    shortDescription: 'Full-stack appointment booking app with real-time slot management and admin controls.',
    overview:
      'A complete booking platform built with Express 5 on the backend and React on the frontend. Users can browse available time slots, make reservations, and receive instant feedback via live polling. Administrators have a dedicated panel to manage availability, view bookings, and handle scheduling.',
    challenge:
      'Keeping the UI in sync with real-time slot availability without a WebSocket server — ensuring that two users cannot accidentally book the same slot.',
    approach:
      'Implemented a lightweight long-polling mechanism on the React client that checks slot status at regular intervals. The Express 5 backend uses better-sqlite3 for fast synchronous SQLite access, with atomic transactions to prevent double-bookings at the database level.',
    features: [
      'Interactive time-slot calendar with live availability updates',
      'User booking flow with confirmation and validation',
      'Admin panel for managing slots, viewing and cancelling reservations',
      'Long-polling for near-real-time sync between clients',
      'SQLite-backed persistence via better-sqlite3',
    ],
    stack: ['JavaScript', 'Express 5', 'SQLite', 'better-sqlite3', 'React', 'CSS'],
    myRole: 'Sole developer — designed the REST API, implemented the booking logic with atomic transactions, and built the React client with live polling.',
    image: '/placeholder-project.svg',
    repoUrl: 'https://github.com/IhebNajjar/booking-system',
    liveUrl: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 'recipe-api',
    title: 'FlavorBook API',
    shortDescription: 'Layered REST API for recipes with API-key auth, Swagger docs, and a React frontend.',
    overview:
      'A production-structured REST API for managing recipes, built with Express 5 and SQLite. The project follows a clean layered architecture (routes → controllers → services → repositories) and exposes a fully documented Swagger UI. A companion React frontend lets users browse and search recipes.',
    challenge:
      'Designing a clean, maintainable architecture for a Node.js API that separates concerns properly — without the overhead of a heavy framework.',
    approach:
      'Adopted a layered architecture pattern inspired by enterprise backends: each layer has a single responsibility. API-key authentication is applied as Express middleware. Swagger/OpenAPI docs are auto-generated from JSDoc annotations, keeping documentation always in sync with the code.',
    features: [
      'Full CRUD endpoints for recipes (create, read, update, delete)',
      'API-key based authentication middleware',
      'Interactive Swagger / OpenAPI documentation UI',
      'Clean layered architecture: routes → controllers → services → repositories',
      'React frontend for browsing and searching recipes',
      'SQLite persistence with better-sqlite3',
    ],
    stack: ['JavaScript', 'Express 5', 'SQLite', 'Swagger / OpenAPI', 'React', 'CSS'],
    myRole: 'Sole developer — architected the layered backend, implemented all endpoints, set up Swagger docs, and built the React UI.',
    image: '/placeholder-project.svg',
    repoUrl: 'https://github.com/IhebNajjar/recipe-api',
    liveUrl: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 'edtech-mvp',
    title: 'EdTech Learning Platform',
    shortDescription: 'Full-featured online learning platform with courses, progress tracking, and ratings.',
    overview:
      'A modern EdTech MVP built with Next.js 16 and Prisma. Students can register, enrol in courses, track their learning progress, and leave ratings. The platform includes a clean dashboard experience with authentication and a structured content model.',
    challenge:
      'Building a cohesive full-stack experience in Next.js — handling auth, database relations, and dynamic routing — without a separate backend service.',
    approach:
      'Used Next.js App Router with server actions for data mutations, Prisma ORM with SQLite for development-friendly persistence, and a custom auth flow. Course progress is tracked at the lesson level, and ratings are aggregated per course.',
    features: [
      'User registration, login, and session management',
      'Course catalogue with categories and enrolment',
      'Lesson-level progress tracking per student',
      'Course ratings and review system',
      'Dashboard with personalised learning overview',
    ],
    stack: ['TypeScript', 'Next.js 16', 'React', 'Prisma', 'SQLite', 'Tailwind CSS'],
    myRole: 'Sole developer — designed the database schema, implemented auth, built all pages and server actions.',
    image: '/placeholder-project.svg',
    repoUrl: 'https://github.com/IhebNajjar/edtech-mvp',
    liveUrl: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 'ashop',
    title: 'Ashop Tunisia',
    shortDescription: 'Laravel e-commerce platform with 3-level categories, product variants, cart, and admin panel.',
    overview:
      'A full-featured e-commerce web application built with Laravel for a Tunisian market. Products are organised in a three-level category hierarchy, support multiple variants (size, colour), and can be browsed, added to cart, and checked out. An admin panel handles product and order management.',
    challenge:
      'Implementing a flexible product variant system and a recursive 3-level category tree in a clean, maintainable Laravel codebase.',
    approach:
      'Used Laravel Eloquent relationships to model categories recursively and products with polymorphic variant attributes. The admin panel is built with Blade templates and leverages Laravel\'s resource controllers for clean CRUD operations.',
    features: [
      '3-level nested product category system',
      'Product variants (size, colour, etc.)',
      'Shopping cart and checkout flow',
      'Admin panel for products, categories, and orders',
      'User authentication and order history',
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'Blade', 'Bootstrap', 'JavaScript'],
    myRole: 'Sole developer — designed the database schema, built all backend logic and frontend views.',
    image: '/placeholder-project.svg',
    repoUrl: 'https://github.com/IhebNajjar/ashop',
    liveUrl: null,
    status: 'completed',
    featured: false,
  },
  {
    id: 'gh-repo-explorer',
    title: 'GitHub Repo Explorer',
    shortDescription: 'React + Vite app to search, save, compare, and export trending GitHub repositories.',
    overview:
      'A React single-page application that leverages the GitHub REST API to let users search repositories, bookmark favourites to localStorage, compare selected repos side-by-side, and export results as JSON or CSV.',
    challenge:
      'Handling GitHub API rate limits gracefully while keeping the UX responsive and providing meaningful feedback during loading and error states.',
    approach:
      'Used Vite for fast development builds, React Query for data fetching with built-in caching to minimise API calls, and localStorage for persistent favourites without a backend.',
    features: [
      'Search GitHub repositories with filters (language, stars, date)',
      'Save and manage favourite repositories (persisted to localStorage)',
      'Side-by-side comparison of selected repositories',
      'Export results as JSON or CSV',
      'GitHub API rate-limit handling with user feedback',
    ],
    stack: ['JavaScript', 'React', 'Vite', 'GitHub REST API', 'CSS'],
    myRole: 'Sole developer — built the UI, API integration, state management, and export functionality.',
    image: '/placeholder-project.svg',
    repoUrl: 'https://github.com/IhebNajjar/gh-repo-explorer',
    liveUrl: null,
    status: 'completed',
    featured: false,
  },
];
