import HeroIllustration from './HeroIllustration';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-illo-wrap">
          <HeroIllustration />
        </div>
        <div className="hero-copy">
          <p className="hero-hi">Hi!</p>
          <h1 className="hero-name">I'm Hira.</h1>
          <p className="hero-role">I'm a UI/UX Designer.</p>
        </div>
      </div>
      <a href="#work" className="explore-cue">
        Explore my work <span className="chev">⌄</span>
      </a>
    </section>
  );
}
