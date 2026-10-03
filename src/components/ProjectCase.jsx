import { useEffect, useRef, useState } from 'react';
import projects from '../data/projects';

const SWIPE_THRESHOLD = 40;

export default function ProjectCase({ activeId, onClose, onNavigate }) {
  const [screenIndex, setScreenIndex] = useState(0);
  const project = projects.find((p) => p.id === activeId) || null;
  const touchStartX = useRef(null);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e, total) {
    if (touchStartX.current === null || total < 2) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) setScreenIndex((i) => (i + 1) % total);
      else setScreenIndex((i) => (i - 1 + total) % total);
    }
    touchStartX.current = null;
  }

  useEffect(() => {
    setScreenIndex(0);
  }, [activeId]);

  useEffect(() => {
    if (!activeId) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [activeId]);

  useEffect(() => {
    if (!activeId || !project) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setScreenIndex((i) => (i + 1) % project.screens.length);
      if (e.key === 'ArrowLeft') setScreenIndex((i) => (i - 1 + project.screens.length) % project.screens.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeId, project, onClose]);

  const isOpen = !!project;
  const nextProject = project
    ? projects[(projects.findIndex((p) => p.id === project.id) + 1) % projects.length]
    : null;

  return (
    <>
      <div className={`overlay-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      {projects.map((p) => {
        const active = p.id === activeId;
        const idx = active ? screenIndex : 0;
        return (
          <div key={p.id} className={`case ${active ? 'open' : ''}`} aria-hidden={!active}>
            {active && (
              <div className="case-scroll">
                <div className="case-top">
                  <div>
                    <p className="case-crumb">Work / {p.shortName}</p>
                    <div className="case-tags">
                      {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <h3 className="case-title">{p.name}</h3>
                    <p className="case-tagline">{p.tagline}</p>
                  </div>
                  <button className="case-close" onClick={onClose} aria-label="Close">✕</button>
                </div>

                <div className="stage-wrap">
                  <div
                    className="stage"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(e, p.screens.length)}
                  >
                    <div className="stage-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
                      {p.screens.map((s, i) => (
                        <div className="screen" key={i}>
                          <img src={s.image} alt={`${p.name} — ${s.label}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="stage-controls">
                    <span className="screen-label">
                      Screen <b>{idx + 1}</b> of {p.screens.length} — {p.screens[idx].label}
                    </span>
                    <div className="stage-arrows">
                      <button
                        className="stage-arrow"
                        onClick={() => setScreenIndex((i) => (i - 1 + p.screens.length) % p.screens.length)}
                        disabled={p.screens.length < 2}
                        aria-label="Previous screen"
                      >‹</button>
                      <button
                        className="stage-arrow"
                        onClick={() => setScreenIndex((i) => (i + 1) % p.screens.length)}
                        disabled={p.screens.length < 2}
                        aria-label="Next screen"
                      >›</button>
                    </div>
                    <div className="dots">
                      {p.screens.map((_, i) => (
                        <button
                          key={i}
                          className={`dot ${i === idx ? 'active' : ''}`}
                          onClick={() => setScreenIndex(i)}
                          aria-label={`Go to screen ${i + 1}`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="desc-row">
                  <p>{p.description}</p>
                  <dl className="meta-list">
                    <div className="meta-item"><dt>Role</dt><dd>{p.role}</dd></div>
                    <div className="meta-item"><dt>Platform</dt><dd>{p.platform}</dd></div>
                    <div className="meta-item"><dt>Tools</dt><dd>{p.tools}</dd></div>
                  </dl>
                </div>

                <div className="palette">
                  <p className="palette-label">Colour</p>
                  <div className="swatch-list">
                    {p.palette.map((c) => (
                      <div className="swatch-row" key={c.hex}>
                        <div className="swatch-dot" style={{ background: c.hex }}></div>
                        <div>
                          <div className="swatch-name">{c.name}</div>
                          <div className="swatch-hex">{c.hex}</div>
                        </div>
                        <div className="swatch-why">{c.why}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {nextProject && (
                  <div className="case-nextproj">
                    <div>
                      <span className="next-label">Next project</span>
                      <div className="next-title">{nextProject.name}</div>
                    </div>
                    <button className="next-btn" onClick={() => onNavigate(nextProject.id)}>
                      <span>View case study</span>
                      <span className="next-arrow">→</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
