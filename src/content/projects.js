// Selected work. A curated few, not an exhaustive list.
// `link` is optional; set to null for private/NDA work.

export const projects = [
  {
    title: 'Recidiviz Dashboards',
    blurb:
      'A criminal justice data platform used by state governments to reduce recidivism. I worked on the reentry backend: a FastAPI service that uses LLMs to generate first-draft action plans for case workers, integrating real-time intake sessions, audio transcription, and BigQuery client data. Built within a large Nx monorepo alongside React frontends and a tRPC/Fastify sentencing tool.',
    tech: ['Python', 'FastAPI', 'LangChain', 'React', 'TypeScript', 'PostgreSQL'],
    link: null,
    linkLabel: 'Private project',
  },
  {
    title: 'SimplyPut \u2014 URL Security Scanner',
    blurb:
      'A security scanning service that analyzes URLs for threats in real time. Built with hexagonal architecture, it runs parallel checks (VirusTotal, Google Web Risk, WHOIS, domain impersonation detection, and AI-powered intent analysis) and streams results to clients via Server-Sent Events. Backed by PostgreSQL, Redis, and Celery for async task processing.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'SQLAlchemy'],
    link: null,
    linkLabel: 'Private project',
  },
  {
    title: 'Marketing Image Selector',
    blurb:
      'An internal tool that helps marketers find the most relevant images for a campaign. It uses Vertex AI multimodal embeddings to semantically match a text prompt against a Google Drive folder, returning a ranked list of best fits. Runs parallel image analysis with Airtable caching to keep repeated queries fast.',
    tech: ['Python', 'FastAPI', 'Vertex AI', 'Google Cloud', 'Google Drive'],
    link: null,
    linkLabel: 'Private project',
  },
  {
    title: 'Pikeways',
    blurb:
      'A real-time multiplayer card game built as a full-stack monorepo. I designed and implemented the game engine from scratch: turn-based state machines, action validation, timeout handling, and a reconnection system, all wired together with WebSockets so moves propagate instantly. Supports lobby management, persistent game history, user authentication, and an AI opponent.',
    tech: ['TypeScript', 'NestJS', 'Next.js', 'WebSockets', 'PostgreSQL'],
    link: null,
    linkLabel: 'Private project',
  },
  {
    title: 'Virtue Poker',
    blurb:
      'A real-time online poker platform. I worked across the full stack: Django and React/Redux on the product, the game engine, WebSocket-driven table state, tournaments, and clubs. I also did a data-oriented rewrite of the banking layer to handle concurrency safely and prevent race conditions at the database level.',
    tech: ['Django', 'React / Redux', 'PostgreSQL', 'WebSockets'],
    link: null,
    linkLabel: 'Private project',
  },
  {
    title: 'SpudPay',
    blurb:
      'An agricultural stablecoin payments platform that lets farm businesses send and receive payments in a dollar-pegged stablecoin. I built the full stack including multi-user approval workflows, vendor management, and yield distribution tracking. Integrates Brale\u2019s Treasury API for stablecoin operations and Coinflow for card and ACH payment processing.',
    tech: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Stablecoins'],
    link: null,
    linkLabel: 'Private project',
  },
  {
    title: 'ShipHero',
    blurb:
      'Warehouse management system handling millions of records. I built data-access patterns that stayed fast at that scale, designed a reusable automation-rules engine that other devs could actually understand, and led the migration from Python 2 to 3.',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'GraphQL'],
    link: null,
    linkLabel: 'Private project',
  },
  {
    title: 'Zetas List',
    blurb:
      'A full-stack game management app for a recreational volleyball group. Players sign up for matches through the web or by texting a WhatsApp bot. The system uses database-level locking to guarantee no race conditions when two players fight for the last spot. Real-time updates stream to all clients via SSE without polling.',
    tech: ['NestJS', 'React 19', 'PostgreSQL', 'WhatsApp (Baileys)', 'Railway'],
    link: null,
    linkLabel: 'Side project',
  },
  {
    title: 'Puput',
    blurb:
      'A Wagtail-based blog engine. I started contributing patches to keep it working on newer Django and Wagtail versions, cleaned up a lot of the code, and eventually became its main maintainer.',
    tech: ['Django', 'Wagtail', 'Open source'],
    link: 'https://github.com/APSL/puput',
    linkLabel: 'GitHub (320+ stars)',
  },
]
