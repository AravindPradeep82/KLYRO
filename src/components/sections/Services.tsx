import "./Services.css";

const services = [
  {
    number: "01",
    title: "Graphic Design",
    description:
      "Distinctive visual identities and thoughtful design assets that give brands a consistent, recognisable presence.",
    deliverables: [
      "Brand identity design",
      "Social media graphics",
      "Marketing and promotional design",
      "Visual brand consistency",
    ],
  },
  {
    number: "02",
    title: "Instagram Content Strategy",
    description:
      "A considered content direction that helps brands communicate clearly, build consistency, and connect with their audience.",
    deliverables: [
      "Content pillars and direction",
      "Monthly content planning",
      "Instagram post concepts",
      "Visual content guidelines",
    ],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-heading">
        <p className="eyebrow">WHAT WE DO</p>
        <h2>Thoughtful work.<br />Clear direction.</h2>
        <p>
          Focused creative services designed to make your brand
          look consistent and communicate with purpose.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>

            <h3>{service.title}</h3>

            <p className="service-description">
              {service.description}
            </p>

            <div className="service-divider" />

            <p className="service-list-heading">WHAT'S INCLUDED</p>

            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}