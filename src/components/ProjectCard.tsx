import { ArrowUpRight, Code2 } from 'lucide-react'
import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card reveal">
    <div className={`card-visual ${project.tone}`}><div className="mock-browser"><div className="mock-dots"><i /><i /><i /></div><div className="mock-line small" /><div className="mock-line large" /><div className="mock-grid"><i /><i /><i /></div><div className="mock-line" /></div></div>
    <div className="card-body"><div className="card-top"><span className="tag">{project.category}</span><span className="stage">{project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="chips">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.kind === 'repo' ? <Code2 size={14} /> : <ArrowUpRight size={14} />}{link.label}</a>)}</div></div>
  </article>
}
