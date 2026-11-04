
import "./Process.css";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by understanding your brand, audience, goals, and the challenges you want to solve.",
    detail: "Understanding the brief",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We establish a clear creative direction, visual references, and priorities before moving into design.",
    detail: "Setting the direction",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We translate the agreed direction into thoughtful visual concepts and refine them through feedback.",
    detail: "Creating with intention",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Once approved, we prepare and hand over the final design assets in the agreed formats.",
    detail: "Finalising the work",
  },
];

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-heading">
        <p className="eyebrow">HOW WE WORK</p>
        <h2>A clear process.<br />Considered outcomes.</h2>
        <p>
          Good creative work needs more than a good idea.
          It needs a thoughtful process from beginning to end.
        </p>
      </div>

      <div className="process-list">
        {steps.map((step) => (
          <article className="process-step" key={step.number}>
            <span className="process-number">{step.number}</span>

            <div className="process-step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            <span className="process-detail">{step.detail}</span>
          </article>
        ))}
      </div>

      <div className="process-note">
        <span className="process-note-mark">K.</span>
        <p>
          Clear communication. Thoughtful decisions.
          Design with a purpose.
        </p>
      </div>
    </section>
  );
}
