import { useEffect, useRef } from 'react'
import { ArrowUpRight, Mail, MessageCircle, X } from 'lucide-react'
import type { Language } from '../data/i18n'

const text = {
  pt: { title: 'Vamos trabalhar juntos?', subtitle: 'Escolha onde prefere iniciar a conversa.', close: 'Fechar', whatsappPending: 'WhatsApp em configuração', labels: { email: 'Abrir Gmail', linkedin: 'Abrir perfil no LinkedIn', whatsapp: 'Conversar pelo WhatsApp' } },
  en: { title: 'Let’s work together?', subtitle: 'Choose where you would like to start the conversation.', close: 'Close', whatsappPending: 'WhatsApp is being set up', labels: { email: 'Open Gmail', linkedin: 'Open LinkedIn profile', whatsapp: 'Chat on WhatsApp' } },
  es: { title: '¿Trabajamos juntos?', subtitle: 'Elige dónde prefieres iniciar la conversación.', close: 'Cerrar', whatsappPending: 'WhatsApp en configuración', labels: { email: 'Abrir Gmail', linkedin: 'Abrir perfil de LinkedIn', whatsapp: 'Conversar por WhatsApp' } }
} as const

export function ContactDialog({ open, onClose, lang }: { open: boolean; onClose: () => void; lang: Language }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const t = text[lang]
  const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '5544998924520').replace(/\D/g, '')
  useEffect(() => { const node = dialog.current; if (!node) return; if (open && !node.open) node.showModal(); if (!open && node.open) node.close() }, [open])
  return <dialog className="contact-dialog" ref={dialog} onCancel={(event) => { event.preventDefault(); onClose() }} onClick={(event) => { if (event.target === event.currentTarget) onClose() }} aria-labelledby="dialog-title"><div className="dialog-inner">
    <button className="dialog-close" type="button" onClick={onClose} aria-label={t.close}><X size={20} /></button>
    <p className="eyebrow">PIT STOP / CONTACT</p><h2 id="dialog-title">{t.title}</h2><p>{t.subtitle}</p>
    <div className="channel-list">
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arthurmartinsmaciel3%40gmail.com" target="_blank" rel="noopener noreferrer" aria-label={t.labels.email}><span><Mail size={19} /> Gmail</span><ArrowUpRight size={17} /></a>
      <a href="https://www.linkedin.com/in/arthur-maciel-074a98264/" target="_blank" rel="noopener noreferrer" aria-label={t.labels.linkedin}><span><ArrowUpRight size={19} /> LinkedIn</span><ArrowUpRight size={17} /></a>
      {whatsappNumber ? <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label={t.labels.whatsapp}><span><MessageCircle size={19} /> WhatsApp</span><ArrowUpRight size={17} /></a> : <div className="channel-unavailable" aria-label={t.whatsappPending}><span><MessageCircle size={19} /> WhatsApp</span><small>{t.whatsappPending}</small></div>}
    </div>
  </div></dialog>
}
