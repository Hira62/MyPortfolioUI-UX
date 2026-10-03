export default function Header({ activeSection }) {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a className="brand-mark" href="#hero">Hira Masood</a>
        <nav className="site-nav">
          <a href="#work" className={activeSection === 'work' ? 'active' : ''}>Projects</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About Me</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
