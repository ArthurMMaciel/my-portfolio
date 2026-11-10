import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'

export function ProjectCard({ project, index, selected, details }: { project: Project; index: number; selected: string; details: string }) {
  return <article className={`project-card project-${index}`}>
    <div className={`card-visual ${project.tone}`} aria-hidden="true"><span className="visual-index">0{index + 1} / {selected}</span><div className="visual-title">{project.title.split(' — ')[0]}<span>↗</span></div><div className="visual-bottom"><span>{project.category}</span><span>ARTHUR MACIEL</span></div></div>
    <div className="card-body"><div className="card-top"><span className="tag">{project.category}</span><span className="stage">{project.status}</span></div><h3>{project.title}</h3><details className="project-details"><summary>{details}</summary><p>{project.description}</p></details><div className="chips">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <ArrowUpRight size={14} /></a>)}</div></div>
  </article>
}
