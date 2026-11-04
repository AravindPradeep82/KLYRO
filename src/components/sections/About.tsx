
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-layout">
        <div className="about-intro">
          <p className="eyebrow">A LITTLE ABOUT KLYRO</p>
          <h2>Creativity with<br />a clear purpose.</h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            KLYRO is an independent creative studio focused on
            thoughtful graphic design and Instagram content strategy.
          </p>

          <p>
            We believe good design should do more than look beautiful.
            It should communicate clearly, create consistency, and
            give every brand element a reason to exist.
          </p>

          <p>
            Our approach is intentional and collaborative.
            We take the time to understand each brief, establish
            a clear direction, and turn ideas into considered
            visual communication.
          </p>

          <div className="about-principles">
            <div>
              <span>01</span>
              <h3>Clarity</h3>
              <p>Every design decision starts with purpose.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Consistency</h3>
              <p>A recognisable visual language across every touchpoint.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Intention</h3>
              <p>Thoughtful details, never decoration without reason.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
