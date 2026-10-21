export function SectionHeading({ title, description }: { title: React.ReactNode; description?: React.ReactNode }) {
  return <div className="section-head reveal"><div><h2>{title}</h2></div>{description && <p>{description}</p>}</div>
}
