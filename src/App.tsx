import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { experiences, skills } from './data/content'
import { projects } from './data/projects'
import { copy, type Language } from './data/i18n'
import { Navbar } from './components/Navbar'
import { ProjectCard } from './components/ProjectCard'
import { ContactDialog } from './components/ContactDialog'

function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem('portfolio-language')
    if (saved === 'pt' || saved === 'en' || saved === 'es') return saved
  } catch { /* The site still works when storage is unavailable. */ }
  const browser = navigator.language.toLowerCase()
  return browser.startsWith('pt') ? 'pt' : browser.startsWith('es') ? 'es' : 'en'
}

export default function App() {
  const [lang, setLang] = useState<Language>(initialLanguage)
  const [contactOpen, setContactOpen] = useState(false)
  const t = copy[lang]
  const projectTranslations = t.projects as readonly (readonly [string, string, string, string, readonly string[]])[]
  const jobTranslations = t.jobs as readonly (readonly [string, string, string])[]
  const skillTranslations: Readonly<Record<string, string>> = t.skills
  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.intro)
    try { localStorage.setItem('portfolio-language', lang) } catch { /* Optional preference. */ }
  }, [lang, t.intro])
  return <><div className="garage-door" aria-hidden="true"><div className="garage-door-mark"><span>AM</span><small>ENGINEERING / GARAGE</small></div><div className="garage-door-edge" /></div><Navbar lang={lang} setLang={setLang} labels={t.nav} navigation={t.navigation} toggle={t.toggle} menu={t.menu} /><main>
    <section className="hero wrap" id="home"><div className="hero-coordinate" aria-hidden="true">AM / 01 <span>●</span> ENGINEERING GARAGE</div>
      <div className="hero-copy"><p className="eyebrow"><span className="dot" /> {t.location}</p><h1>{t.hero1}<br /><em>{t.hero2}</em><br />{t.hero3}</h1><p className="hero-desc">{t.intro}</p><div className="actions"><a className="btn primary" href="#projects">{t.work} <ArrowDownRight size={18} /></a><a className="text-link" href="#contact">{lang === 'pt' ? 'Trabalhe comigo' : lang === 'es' ? 'Trabaja conmigo' : 'Work with me'} <ArrowUpRight size={16} /></a></div></div>
      <div className="hero-art"><div className="portrait"><img src="/profile.jpg" alt="Arthur Martins Maciel" /></div><div className="portrait-note"><span>{t.motion}</span><span>↗</span></div><span className="portrait-caption">{t.caption}</span><div className="hero-skills"><span className="hero-skills-label">{lang === 'pt' ? 'TECNOLOGIAS' : lang === 'es' ? 'TECNOLOGÍAS' : 'TECHNOLOGIES'}</span><div className="stack">{skills.map((skill) => <span key={skill}>{skillTranslations[skill] || skill}</span>)}</div></div></div>
      <div className="hero-bottom">{t.heroMeta.map((item) => <span key={item}>{item}</span>)}</div>
    </section>
    <div className="track-divider" aria-hidden="true"><span>START / FINISH</span><div className="track-line" /><span>AM / GARAGE</span></div><div className="proof"><div className="wrap proof-inner"><p>{t.proof[0]}<br /><strong>{t.proof[1]}</strong></p><div><strong>{t.proof[2]}</strong><span>{t.proof[3]}</span></div><div><strong>{t.proof[4]}</strong><span>{t.proof[5]}</span></div><div><strong>{t.proof[6]}</strong><span>{t.proof[7]}</span></div></div></div>
    <section className="wrap work-section" id="projects"><div className="lap-marker" aria-hidden="true"><span>01</span> / THE WORK</div><div className="section-intro"><div><p className="eyebrow">{t.workLabel}</p><h2>{t.workTitle}<br /><em>{t.workEm}</em></h2></div><p>{t.workDesc}</p></div><div className="project-grid">{projects.map((project, index) => { const tr = projectTranslations[index]; const localized = tr ? { ...project, title: tr[0], category: tr[1], status: tr[2], description: tr[3], links: project.links.map((link, i) => ({ ...link, label: tr[4][i] || link.label })) } : project; return <ProjectCard key={project.title} project={localized} index={index} selected={t.selected} details={lang === 'pt' ? 'Sobre o projeto' : lang === 'es' ? 'Sobre el proyecto' : 'About the project'} /> })}</div></section>
    <section className="about-section" id="about"><div className="lap-marker wrap" aria-hidden="true"><span>02</span> / THE DRIVER</div><div className="wrap about-grid"><div><p className="eyebrow">{t.aboutLabel}</p><h2>{t.aboutTitle}<br /><em>{t.aboutEm}</em></h2></div><div className="about-copy"><p className="lead">{t.aboutLead}</p><p>{t.about1}</p><p>{t.about2}</p><a className="text-link" href="#experience">{t.more} <ArrowDownRight size={17} /></a></div></div></section>
    <section className="wrap experience-section" id="experience"><div className="lap-marker" aria-hidden="true"><span>03</span> / THE JOURNEY</div><div className="section-intro"><div><p className="eyebrow">{t.experienceLabel}</p><h2>{t.experienceTitle}<br /><em>{t.experienceEm}</em></h2></div><p>{t.experienceDesc}</p></div><div className="experience-list">{experiences.map((job, index) => <article className="job" key={`${job.company}-${job.role}`}><small>{jobTranslations[index]?.[0] || job.date}</small><div><h3>{jobTranslations[index]?.[1] || job.role}</h3><span className="company">{job.company}</span></div><p>{jobTranslations[index]?.[2] || job.description}</p></article>)}</div></section>
    <section className="contact" id="contact"><div className="lap-marker wrap" aria-hidden="true"><span>04</span> / NEXT LAP</div><div className="wrap contact-inner"><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}<br /><em>{t.contactEm}</em></h2><div className="contact-bottom"><p>{t.contactDesc}</p><div className="actions"><button className="btn light" type="button" onClick={() => setContactOpen(true)}>{t.contactButton} <ArrowUpRight size={18} /></button><a className="text-link" href="https://www.linkedin.com/in/arthur-maciel-074a98264/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a><a className="text-link" href="https://github.com/ArthurMMaciel" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a></div></div></div></section>
  </main><ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} lang={lang} /><footer className="wrap footer"><span>© {new Date().getFullYear()} Arthur Martins Maciel</span><span>{t.footer}</span><div><a href="https://github.com/ArthurMMaciel" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="#home">{t.top}</a></div></footer></>
}
