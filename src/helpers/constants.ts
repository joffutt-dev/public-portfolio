import backend from "../assets/backend.jpg";
import cicd from "../assets/cicd.jpg";
import consulting from "../assets/consulting.jpg";
import design from "../assets/design.jpg";
import frontend from "../assets/frontend.jpg";

export const skills = {
  frontend: {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern frameworks and libraries.",
    technologies: [
      {
        name: "React",
        level: 100,
        description:
          "JavaScript library for building user interfaces through reusable components and virtual DOM",
      },
      {
        name: "Typescript",
        level: 100,
        description:
          "Strongly typed programming language that builds on JavaScript by adding static type definitions",
      },
      {
        name: "Tailwind CSS",
        level: 95,
        description:
          "Utility-first CSS framework that provides low-level utility classes for building custom designs",
      },
      {
        name: "Modern component libraries",
        level: 100,
        description:
          "Pre-built React component libraries like Chakra UI and PrimeReact that accelerate UI development",
      },
      {
        name: "Recharts and Apache ECharts",
        level: 100,
        description:
          "Data visualization libraries for React - Recharts for composable charts and ECharts for interactive visualizations",
      },
      {
        name: "Next.js",
        level: 90,
        description:
          "React framework that provides server-side rendering, static site generation, and full-stack capabilities",
      },
      {
        name: "Vite",
        level: 90,
        description:
          "Frontend build tool and development server designed to improve the developer experience, especially in modern web applications",
      },
      {
        name: "Cypress and MSW",
        level: 90,
        description:
          "Testing tools - Cypress for end-to-end testing and Mock Service Worker (MSW) for API mocking",
      },
      {
        name: "AngularJS",
        level: 75,
        description:
          "JavaScript framework for building dynamic single-page applications with two-way data binding",
      },
      //removing these for now, i think these could go here someday, but probably will group with expansion of skills feature that is planned
      // {
      //   name: "Svelte",
      //   level: 75,
      //   description:
      //     "Component framework that compiles to vanilla JavaScript for optimal performance",
      // },
      // {
      //   name: "VueJS",
      //   level: 75,
      //   description:
      //     "Progressive JavaScript framework for building user interfaces with reactive data binding",
      // },
    ],
    image: frontend,
  },
  backend: {
    title: "Backend Development",
    description:
      "Creating robust server-side applications and APIs with scalable architecture.",
    technologies: [
      {
        name: "Java",
        level: 100,
        description:
          "Object-oriented programming language known for platform independence and enterprise application development",
      },
      {
        name: "Spring boot/Spring",
        level: 95,
        description:
          "Java framework that simplifies enterprise application development with dependency injection and auto-configuration",
      },
      {
        name: "Hibernate",
        level: 90,
        description:
          "Object-relational mapping (ORM) framework for Java that simplifies database interactions",
      },
      {
        name: "Pega",
        level: 85,
        description:
          "Low-code platform for business process management, case management, and customer engagement",
      },
      {
        name: "Camunda",
        level: 95,
        description:
          "Open-source workflow and decision automation platform for business process management",
      },
      {
        name: "SQL",
        level: 95,
        description:
          "Structured Query Language for managing and manipulating relational databases",
      },
      {
        name: "NoSQL",
        level: 80,
        description:
          "Non-relational database systems that provide flexible data models for unstructured data",
      },
      {
        name: "Node.js",
        level: 95,
        description:
          "JavaScript runtime environment that enables server-side JavaScript execution",
      },
      {
        name: "Prisma",
        level: 90,
        description:
          "Next-generation ORM for Node.js and TypeScript that provides type-safe database access",
      },
      {
        name: "Apache Solr",
        level: 70,
        description:
          "Open-source enterprise search platform built on Apache Lucene for full-text search",
      },
      {
        name: "C#",
        level: 70,
        description:
          "Object-oriented programming language developed by Microsoft for .NET framework applications",
      },
    ],
    image: backend,
  },
  devops: {
    title: "DevOps & Cloud",
    description:
      "Implementing CI/CD pipelines and managing cloud infrastructure for scalable deployments.",
    technologies: [
      {
        name: "GitHub Actions",
        level: 95,
        description:
          "Workflow automation platform integrated with GitHub for continuous integration and deployment",
      },
      {
        name: "AWS",
        level: 95,
        description:
          "Amazon Web Services - comprehensive cloud computing platform offering compute, storage, and networking services",
      },
      {
        name: "Docker",
        level: 95,
        description:
          "Containerization platform that packages applications and dependencies into portable containers",
      },
      {
        name: "SonarQube",
        level: 95,
        description:
          "Code quality and security analysis platform that performs static code analysis to detect bugs and vulnerabilities",
      },
      {
        name: "Kubernetes",
        level: 80,
        description:
          "Container orchestration system that automates deployment, scaling, and management of containerized applications",
      },
      {
        name: "Jenkins",
        level: 75,
        description:
          "Open-source automation server for building, testing, and deploying software through CI/CD pipelines",
      },
    ],
    image: cicd,
  },
  design: {
    title: "Project Management",
    description:
      "Software tools used to successfully lead projects and create intuitive and visually appealing user experiences with modern design principles.",
    technologies: [
      {
        name: "Figma",
        level: 75,
        description:
          "Collaborative web-based design tool for creating user interfaces, prototypes, and design systems",
      },
      {
        name: "Jira",
        level: 90,
        description:
          "Project management and issue tracking software for agile development teams and bug tracking",
      },
    ],
    image: design,
  },
  consulting: {
    title: "Tech Consulting",
    description:
      "Advising customers on proper tech implementations with modern software and hardware architectures",
    technologies: [
      {
        name: "Software Development",
        level: 100,
        description:
          "Process of designing, creating, testing, and maintaining software applications and systems",
      },
      {
        name: "Security",
        level: 100,
        description:
          "Implementation of measures to protect systems, networks, and data from cyber threats and unauthorized access",
      },
      {
        name: "AI",
        level: 95,
        description:
          "Artificial Intelligence technologies including machine learning, natural language processing, and automated decision-making systems",
      },
    ],
    image: consulting,
  },
};
