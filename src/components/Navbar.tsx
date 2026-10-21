import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [['projects', 'Projects'], ['about', 'About'], ['experience', 'Experience'], ['stack', 'Tech stack'], ['contact', "Let's connect"]]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-header wrap"><nav className="nav" aria-label="Main navigation"><a className="brand" href="#home">arthur<span>.</span>dev</a><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X size={18} /> : <Menu size={18} />}<span>Menu</span></button><div className={`navlinks ${open ? 'open' : ''}`}>{links.map(([href, label]) => <a key={href} className={href === 'contact' ? 'hire' : ''} href={`#${href}`} onClick={() => setOpen(false)}>{label}{href === 'contact' && ' →'}</a>)}</div></nav></header>
}
