
import { useState, type FormEvent } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Graphic Design");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `KLYRO Project Enquiry - ${service}`;

    const body = `
Hello KLYRO,

My name is ${name}.
My email: ${email}
Service interested in: ${service}

Project details:
${message}
    `;

    const mailtoLink = `mailto:technologiiaa@proton.me?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">START A CONVERSATION</p>

          <h2>Have a project<br />in mind?</h2>

          <p className="contact-description">
            Tell us a little about what you're working on.
            Let's explore how thoughtful design can bring
            clarity to your brand.
          </p>

          <div className="contact-email">
            <span>EMAIL US DIRECTLY</span>
            <a href="mailto:technologiiaa@proton.me">
              technologiiaa@proton.me
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-service">What do you need?</label>
            <select
              id="contact-service"
              value={service}
              onChange={(event) => setService(event.target.value)}
            >
              <option>Graphic Design</option>
              <option>Instagram Content Strategy</option>
              <option>Both Services</option>
              <option>Not Sure Yet</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Tell us about your project</label>
            <textarea
              id="contact-message"
              placeholder="A little about your brand, goals and what you have in mind..."
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            Send Project Enquiry <span>↗</span>
          </button>

          <p className="contact-form-note">
            Your email application will open with your enquiry prepared.
          </p>
        </form>
      </div>
    </section>
  );
}
