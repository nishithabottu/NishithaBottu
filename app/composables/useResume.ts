// Single source of truth for resume content — imported by every portfolio page.

export interface Role {
  company: string
  title: string
  dates: string
  location: string
  bullets: string[]
}

export interface Project {
  title: string
  desc: string
  tech: string[]
  github: string
  readMore: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export const useResume = () => {
  const roles: Role[] = [
    {
      company: 'Spectrum',
      title: 'AI Engineer',
      dates: 'Jan 2026 – Present',
      location: 'Denver, CO',
      bullets: [
        'Ship features into a production multi-agent LLM platform with planner, executor, and verifier sub-agents running over 9 typed MCP tools, automating AI-assisted UI and API testing across WiFi infrastructure and network-management surfaces.',
        'Shipped LLM-powered automation pipelines on production LLM APIs with GraphQL services, MCP servers, Playwright, and prompt-engineered orchestration, reducing regression defects by 40%.',
        'Designed LLM workflows with structured outputs, function and tool calling, and retrieval-vs-context routing, managing cost and latency tradeoffs for reliable agentic execution on enterprise data and APIs.',
        'Building shared AI engineering tooling: versioned prompt library, evaluation harness with regression checks on prompt changes, and observability traces for LLM behavior in production.',
      ],
    },
    {
      company: 'Tek Labs',
      title: 'AI Engineer',
      dates: 'Feb 2025 – Jan 2026',
      location: 'Remote / Detroit, MI',
      bullets: [
        'Designed LLM-driven test generation and triage workflows in Playwright, including prompt templates, structured output validation, and a flake-detection loop, integrated into infotainment release pipelines.',
        'Delivered Python backend services and scalable REST APIs serving 300+ users on automotive infotainment systems, improving end-to-end performance by 30%.',
        'Developed Snowflake-backed operational analytics, SQL reporting workflows, and data-cleaning systems surfacing telemetry and testing-outcome signals for engineering teams.',
        'Standardized Docker, Kubernetes, Jenkins, and GitHub Actions CI/CD pipelines across infotainment microservices, reducing deployment time by 40%.',
      ],
    },
    {
      company: 'PDMA',
      title: 'Software Engineer',
      dates: 'Aug 2024 – Feb 2025',
      location: 'Remote / Minneapolis, MN',
      bullets: [
        'Built ETL workflows, SQL-driven reporting, operational dashboards, and data-visualization pipelines for research-data processing.',
        'Implemented AWS Lambda workflows, Docker deployments, Playwright CI/CD testing, and Nx monorepo architecture, reducing frontend duplication by 25%.',
      ],
    },
    {
      company: 'UNC School of Information & Library Science',
      title: 'Software Engineer',
      dates: 'Jan 2023 – May 2024',
      location: 'Chapel Hill, NC',
      bullets: [
        'Shipped Python research applications and backend services with REST APIs deployed to AWS, lifting application performance by 30% through optimized API consumption and reactive data flows for SILS faculty and graduate students.',
        'Implemented data-cleaning, transformation, validation, and audit pipelines ensuring reproducibility and integrity across downstream SILS research datasets.',
        'Developed SQL-backed dashboards and AWS-hosted reporting workflows for faculty stakeholders.',
      ],
    },
    {
      company: 'Genpact',
      title: 'Software Engineer',
      dates: 'Mar 2021 – Jul 2022',
      location: 'Bangalore, India',
      bullets: [
        'Owned and shipped scalable REST APIs and distributed backend services on AWS Lambda, EKS, Step Functions, Docker, and Kubernetes for GE Gas & Power energy-infrastructure systems, lifting operational throughput by 40%.',
        'Shipped Python telemetry-ingestion workflows, SQL operational dashboards, and Snowflake-integrated analytics pipelines used for outage triage and gas-turbine-fault analysis.',
        'Developed enterprise Python applications for GE Gas & Power power-plant and gas-turbine engineering workflows, serving 10,000+ users with a 45% performance improvement.',
        'Recipient of the Silver Order of Merit Award (March 2022).',
      ],
    },
    {
      company: 'Ascent',
      title: 'Software Engineer',
      dates: 'Jul 2020 – Mar 2021',
      location: 'Bangalore, India',
      bullets: [
        'Shipped Python backend services and distributed APIs supporting cloud-native platforms, reducing response times by 40%.',
        'Implemented Docker, Kubernetes, and Jenkins CI/CD pipelines, reducing deployment failures by 30%.',
      ],
    },
  ]

  const projects: Project[] = [
    {
      title: 'Documentation RAG with LLM-as-Judge Evaluation',
      desc: 'A citation-grounded RAG pipeline over 2,140 chunks of API and MCP docs, tuned via an automated judge harness that lifted retrieval quality from 3.50 to 4.00 / 5.',
      tech: ['Python', 'Chroma', 'fastembed (bge-small-en-v1.5)', 'LangChain'],
      github: 'https://github.com/nishithabottu/docs-rag',
      readMore: '/projects/docs-rag',
    },
    {
      title: 'Codebase-Navigation Agent (TypeScript CLI)',
      desc: 'A typed agent loop where an LLM explores codebases through 3 Zod-validated tools. Scored 5/5 on the eval set with a mean of 3 turns per question.',
      tech: ['TypeScript', 'Node.js', 'Zod', 'Streaming'],
      github: 'https://github.com/nishithabottu/ts-claude-agent',
      readMore: '/projects/ts-claude-agent',
    },
  ]

  const skillGroups: SkillGroup[] = [
    {
      label: 'Languages',
      items: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'SQL', 'Java 8 / 11 / 17'],
    },
    {
      label: 'AI & LLM',
      items: [
        'Agentic AI systems', 'Multi-agent orchestration (planner / executor / verifier)',
        'Tool & function calling', 'Structured outputs',
        'Retrieval-Augmented Generation (RAG)', 'Citation-grounded generation', 'Semantic search',
        'Context engineering', 'Evaluation harnesses', 'LLM-as-Judge', 'Golden-set evaluation',
        'Prompt regression testing', 'Production LLM observability',
        'LangChain', 'MCP servers', 'Weaviate / FAISS / Chroma',
        'HuggingFace Transformers', 'Sentence Transformers', 'OpenAI & Anthropic APIs',
      ],
    },
    {
      label: 'Backend & Data',
      items: [
        'FastAPI', 'Node.js (Express, NestJS)', 'GraphQL', 'REST API design',
        'Microservices', 'Event-driven architecture', 'Async processing',
        'Snowflake', 'ETL pipelines', 'PostgreSQL', 'MySQL', 'SQL Server',
        'Redis', 'Firebase', 'Supabase', 'Spring Boot', 'Hibernate', 'JPA', 'JDBC',
      ],
    },
    {
      label: 'Frontend',
      items: [
        'React (Redux, Context, Hooks)', 'Angular 17 / 18 / 20',
        'RxJS', 'NgRx', 'Nx', 'Module Federation', 'HTML5', 'CSS3',
        'Material UI', 'Bootstrap',
      ],
    },
    {
      label: 'Cloud & DevOps',
      items: [
        'AWS (Lambda, S3, EKS, KMS, Step Functions)', 'Docker', 'Kubernetes',
        'Jenkins', 'GitHub Actions', 'CI/CD pipelines', 'Git', 'Cloud-native architecture',
      ],
    },
    {
      label: 'Testing & Methodology',
      items: [
        'Playwright (UI & API)', 'pytest', 'Cypress', 'Selenium', 'Jest', 'Jasmine',
        'JUnit', 'Mockito', 'Postman', 'Swagger', 'Jira', 'Confluence',
        'Agile / Scrum', 'SDLC', 'Domain-Driven Design',
      ],
    },
  ]

  return { roles, projects, skillGroups }
}
