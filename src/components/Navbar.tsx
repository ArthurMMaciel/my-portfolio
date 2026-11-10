import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { Language } from '../data/i18n'

export function Navbar({ lang, setLang, labels, navigation, toggle, menu }: { lang: Language; setLang: (language: Language) => void; labels: readonly string[]; navigation: string; toggle: string; menu: string }) {
  const [open, setOpen] = useState(false)
  const ids = ['projects', 'about', 'experience', 'contact']
  const navLabels = [labels[0], labels[1], labels[2], lang === 'pt' ? 'Trabalhe comigo' : lang === 'es' ? 'Trabaja conmigo' : 'Work with me']
  return <header className="site-header wrap"><nav className="nav" aria-label={navigation}>
    <a className="brand-mark" href="#home" aria-label="Arthur Maciel — Home">AM<span>.</span></a>
    <div className="nav-right"><div className="language-switch" role="group" aria-label="Language / Idioma">{(['pt', 'en', 'es'] as const).map((language) => <button key={language} type="button" className={lang === language ? 'active' : ''} aria-pressed={lang === language} onClick={() => setLang(language)}>{language === 'pt' ? 'PT-BR' : language === 'en' ? 'EN' : 'ES'}</button>)}</div>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label={toggle} aria-expanded={open}>{open ? <X size={18} /> : <Menu size={18} />}<span>{menu}</span></button>
    <div className={`navlinks ${open ? 'open' : ''}`}>{ids.map((id, index) => <a key={id} className={id === 'contact' ? 'hire' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{navLabels[index]}{id === 'contact' && ' →'}</a>)}</div></div>
  </nav></header>
}
