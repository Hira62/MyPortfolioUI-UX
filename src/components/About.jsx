const SKILLS = [
  'UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Design Systems',
  'App Design', 'Web Design', 'React', 'HTML & CSS', 'Figma', 'Squarespace', 'Canva',
];

export default function About() {
  return (
    <section id="about" className="section reveal">
      <div className="container">
        <p className="eyebrow">About Me</p>
        <div className="about-grid">
          <div>
            <p>
              I love the moment an unclear problem turns into a layout that just makes sense. That's
              honestly my favorite part of the job — talking to people about what they actually need,
              then sketching and reshaping it until the interface stops needing an explanation.
            </p>
            <p>
              I start every project in Figma — the UI, the UX, all the wireframing, right down to
              the small stuff. From there, it depends on what you actually need: if you need a working
              product, I'll build it myself in React, HTML and CSS. If you just need the design so
              your own team can build it, I'll hand over a clean, ready-to-build Figma file instead.
              Either way, nothing gets lost in translation, because I'm the one doing the design.
            </p>
            <p>
              That's part of why I get along well with pretty much any team. Startup that needs
              one person to take an idea all the way to a shipped screen? I've got you. Bigger team
              that just needs a solid Figma file to build from? Happy to do that too. I just try to
              match how a project actually needs to move, instead of forcing my own process on it.
            </p>
          </div>
          <div className="skills">
            {SKILLS.map((s) => (
              <span key={s} className="skill-chip">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
