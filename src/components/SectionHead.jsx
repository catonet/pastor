/**
 * Reusable two-column section header with kicker, title, and description.
 */
export default function SectionHead({ kicker, title, description }) {
  return (
    <div className="section-head">
      <div>
        <span className="block text-[0.86rem] font-semibold text-primary mb-2.5">{kicker}</span>
        <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.7rem)]">{title}</h2>
      </div>
      <p className="text-muted text-[1.02rem] m-0">{description}</p>
    </div>
  );
}
