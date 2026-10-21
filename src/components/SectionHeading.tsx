export function SectionHeading({ number, title, description }: { number: string; title: React.ReactNode; description?: React.ReactNode }) {
  return <div className="section-head reveal"><div><div className="section-label">{number}</div><h2>{title}</h2></div>{description && <p>{description}</p>}</div>
}
