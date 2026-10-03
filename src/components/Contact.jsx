import { useState } from 'react';

const EMAIL = 'masoodhira98@gmail.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this email address:', EMAIL);
    }
  }

  return (
    <section id="contact" className="section contact reveal">
      <div className="container">
        <p className="eyebrow">Get in touch</p>
        <h2>Let's design<br />something that ships.</h2>
        <p>
          Open to freelance and full-time UI/UX roles across web and app products. Say hi, and
          let's talk about what you're building.
        </p>
        <div className="contact-links">
          <a className="btn btn-fill" href={`mailto:${EMAIL}`}>Email me</a>
          <button className="btn btn-outline" type="button" onClick={copyEmail}>
            {copied ? 'Copied!' : 'Copy email'}
          </button>
          <a className="btn btn-outline" href="https://www.linkedin.com/in/hira-masood-111016188" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn btn-outline" href="https://www.behance.net/hiramasood1" target="_blank" rel="noopener noreferrer">Behance</a>
          <a className="btn btn-outline" href="https://github.com/Hira62" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="contact-email">{EMAIL}</p>
        <div className="footer-note">
          <span>Hira Masood — UI/UX Designer</span>
          <span>© 2026</span>
        </div>
      </div>
    </section>
  );
}
