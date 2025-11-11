// Centralized content for the site. Each section has an `isNeed` flag (1 = show, 0 = hide).
import profilePic from './Media (3).jpg'

const data = {
  hero: {
    isNeed: 1,
    name: 'Babin B J',
    titleIntro: "Hi, I'm",
    headline: "I'm Babin, a Project Engineer at Wipro with experience since June 2024. I work on full-stack web applications using Angular and React for the frontend and .NET Core with Entity Framework on the backend. I enjoy clean, testable code and ship features that delight users.",
    contactLine: 'Project Engineer @ Wipro • Email: babinb128@gmail.com • Phone: +91 6383576331',
    summary: 'Project Engineer at Wipro — building web apps using Angular, React.js and .NET Core. Passionate about clean architecture, performance, and delightful UI.',
    ctaHire: 'Hire me',
    ctaProjects: 'View projects'
    ,
    profilePic
  },

  about: {
    isNeed: 1,
    title: 'About',
    description: "I'm a Project Engineer at Wipro (since June 2024) focused on full-stack development. My day-to-day work spans modern front-end frameworks (Angular, React) and backend services built with ASP.NET Core and Entity Framework. I take pride in crafting maintainable code, efficient data access, and user-focused interfaces.",
    contact: {
      email: 'babinb128@gmail.com',
      phone: '+91 6383576331',
      dob: '20/09/2000',
      location: 'India'
    },
    education: 'Bachelor of Engineering – Marthandam College of Engineering and Technology (CGPA: 7.51) | 2018 – 2022',
    languages: 'English, Tamil, Malayalam',
    currentRole: {
      company: 'Wipro',
      role: 'Project Engineer',
      since: 'June 2024 — Present'
    }
  },

  experience: {
    isNeed: 1,
    items: [
      {
        title: 'Project Engineer — Wipro',
        period: 'June 2024 - Present',
        bullets: [
          'Full-Stack Development: Developed and maintained full-stack web applications using React.js, Angular and ASP.NET Core.',
          'UI & State Management: Built reusable UI components and used Redux for efficient state management when appropriate; designed user interfaces and implemented business logic with route protection patterns like AuthGuard.',
          'Data Access & Optimization: Implemented LINQ query operations with Entity Framework, used AutoMapper for DTO mapping, and optimized backend logic for performance.',
          'API Integration & Backend: Integrated APIs and built backend services using ASP.NET Core and SQL Server; applied Entity Framework for database operations.',
          'Productivity & Tooling: Boosted productivity and code quality leveraging GitHub Copilot; used Git and Azure DevOps for source control and CI/CD pipelines.'
        ]
      }
    ]
  },

  skills: {
    isNeed: 1,
    list: ['Angular', 'React.js', '.NET Core', 'Entity Framework', 'Redux', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'REST APIs', 'SQL', 'Azure DevOps'],
    certifications: [
      { title: 'GitHub Copilot', url: 'https://www.credly.com/badges/9106c759-ffc9-4710-8475-6b81f9408698/public_url' },
      { title: 'HackerRank — JavaScript Certificate', url: 'https://www.hackerrank.com/certificates/8eaaacf0e236' }
    ]
  },

  projects: {
    isNeed: 1,
    items: [
      {
        title: 'Real-time Dashboard',
        frameworks: ['React.js', 'ASP.NET Core', 'SQL Server'],
        bullets: [
          'Designed and developed an interactive dashboard using React.js with real-time API polling for instant data updates.',
          'Improved load performance and enhanced user experience by 30%.',
          'Integrated backend using ASP.NET Core and SQL Server; used Entity Framework for database operations.',
          'Used Azure DevOps for version control and CI/CD; added admin-level controls for data visibility and access management.'
        ]
      },
      {
        title: 'Exam Portal',
        frameworks: ['Angular 12', 'ASP.NET Core', 'Entity Framework'],
        bullets: [
          'Built a full-stack web application with Angular frontend and ASP.NET Core backend for managing appointments and user access.',
          'Implemented secure user authentication and a robust admin panel with role-based access.',
          'Developed features for examination, institutional, and question management; used AuthGuards to protect routes.',
          'Optimized data queries with Entity Framework and LINQ; managed deployments via Azure DevOps.'
        ]
      }
    ]
  },

  contact: {
    isNeed: 1,
    email: 'babinb128@gmail.com',
    phone: '+91 6383576331',
    location: 'India'
  },

  footer: {
    isNeed: 1,
    text: '© {year} Babin B J — Built with React & Bootstrap',
    extra: 'Made with ❤️ in purple'
  },

  navbar: {
    isNeed: 1,
    brand: 'Babin B J',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/babin-bj-1b33b8229', external: true }
    ]
  }
,
  // Theme settings — change these values to update the site's colors
  theme: {
    // primary color used across the site
    primary: '#7c3aed',
    // complementary variant used for headings and accents
    accent: '#9f7aea',
    // page background gradient (start / end)
    bgStart: '#0b0710',
    bgEnd: '#0f0920',
    // muted text color
    muted: '#c7c7d9'
  }
}

export default data
