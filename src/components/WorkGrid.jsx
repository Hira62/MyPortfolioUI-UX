import projects from '../data/projects';

export default function WorkGrid({ onOpenCase }) {
  return (
    <section id="work" className="section reveal">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Things I've designed</h2>
        <div className="work-grid">
          {projects.map((p) => (
            <button key={p.id} className="work-item" onClick={() => onOpenCase(p.id)}>
              <div className="work-thumb">
                <img src={p.screens[0].image} alt={`${p.name} preview`} loading="lazy" />
              </div>
              <div className="work-body">
                <div className="work-meta-row">
                  <span>{p.tags[0]}</span>
                  <span>{p.tags[1]}</span>
                </div>
                <h3 className="work-title">{p.name}</h3>
                <p className="work-tagline">{p.tagline}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
