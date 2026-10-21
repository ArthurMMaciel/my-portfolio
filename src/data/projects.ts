export type ProjectLink = { label: string; href: string; kind: 'live' | 'repo' }

export type Project = {
  title: string
  category: string
  status: string
  description: string
  tags: string[]
  tone: 'blue' | 'violet' | 'amber' | 'default'
  links: ProjectLink[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Rédeas — Agricultural Finance', category: 'Backend · Product · Integrations', status: 'In development',
    description: 'A conversational finance platform for agricultural planning, with a TypeScript backend, WhatsApp integration, financial domain rules and a separate customer acquisition flow.',
    tags: ['TypeScript', 'Fastify', 'Supabase', 'WAHA', 'Edge Functions'], tone: 'default', featured: true,
    links: [
      { label: 'Visit live website', href: 'https://redeas.online/', kind: 'live' },
      { label: 'Backend repository', href: 'https://github.com/ArthurMMaciel/redeas-agent', kind: 'repo' },
      { label: 'Landing repository', href: 'https://github.com/ArthurMMaciel/redeas-landing', kind: 'repo' },
    ],
  },
  {
    title: 'CLT or PJ — Contract Comparison', category: 'Go · Financial logic · Full stack', status: 'MVP in progress',
    description: 'A financial comparison engine for Brazilian employment models. Built with a Go API, React frontend, authentication and a calculation domain that is being refined.',
    tags: ['Go', 'Gin', 'React', 'PostgreSQL', 'JWT'], tone: 'blue',
    links: [{ label: 'Explore repository', href: 'https://github.com/ArthurMMaciel/clt-or-pj', kind: 'repo' }],
  },
  {
    title: 'Nora — AI Shopping Assistant', category: 'AI · Architecture · Commerce', status: 'Mock-data prototype',
    description: 'An AI-assisted shopping concept that translates conversations into structured shopping intents, compares normalized products and builds editable carts. Marketplace data is currently mocked.',
    tags: ['TypeScript', 'AI Providers', 'Deterministic Ranking', 'Next.js'], tone: 'violet',
    links: [
      { label: 'Visit live prototype', href: 'https://carrinho-ia.vercel.app/', kind: 'live' },
      { label: 'Explore prototype', href: 'https://github.com/ArthurMMaciel/carrinho-IA', kind: 'repo' },
    ],
  },
  {
    title: 'Wedding Website — Serverless Case', category: 'Cloud · Cost-aware architecture', status: 'Personal project',
    description: 'A personal project exploring a shift from always-on VPS hosting to a usage-based serverless backend, designed around a low-frequency RSVP workflow.',
    tags: ['TypeScript', 'Supabase', 'Vercel', 'Architecture Trade-offs'], tone: 'amber',
    links: [
      { label: 'Visit live website', href: 'https://darithur-wedding-website-qlfxmljcm.vercel.app/', kind: 'live' },
      { label: 'Explore repository', href: 'https://github.com/ArthurMMaciel/darithur-wedding-website', kind: 'repo' },
    ],
  },
  {
    title: 'Escuta Aí Brasil — Workplace Listening', category: 'Privacy · Product Design · Social Impact', status: 'Frontend POC',
    description: 'A privacy-conscious concept for workplace feedback, with employee and administrator journeys, protected reporting flows and an architecture roadmap. Currently a TypeScript/Vite frontend proof of concept using simulated data; backend and AI capabilities are planned, not implemented.',
    tags: ['TypeScript', 'Vite', 'Privacy by Design', 'System Design'], tone: 'blue',
    links: [
      { label: 'Visit live prototype', href: 'https://fala-ai-brasil.vercel.app/', kind: 'live' },
      { label: 'Explore repository', href: 'https://github.com/ArthurMMaciel/fala-ai-brasil', kind: 'repo' },
    ],
  },
]
