import './App.css';
import illustration from './assets/illustration.png';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <span className="nav-brand">Nausicaa</span>
        <div className="nav-links">
          <a href="#collection">Collection</a>
          <a href="#silk">Our Silk</a>
          <a href="#story">Our Story</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">Nausicaa</h1>
            <p className="hero-subtitle">
              Pure silk scarves, designed and handcrafted in Barcelona.
            </p>
            <a href="#collection" className="hero-cta">Discover the Collection</a>
          </div>
          <div className="hero-image-wrapper">
            <img src={illustration} alt="Model wearing a Nausicaa silk scarf" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Logo Panel — logo left 1/3, text right 2/3 */}
      <section className="logo-panel">
        <div className="logo-panel-inner">
          <div className="logo-panel-image">
            <img src={logo} alt="" />
          </div>
          <div className="logo-panel-text">
            <h2>Born Under the Sun</h2>
            <p>
              Each Nausicaa scarf carries the warmth of Mediterranean light — the designed in Barcelona, where the sun meets the sea. Our studio sits in the heart of the city, drawing inspiration from its golden light, mosaic textures, and the rhythm of coastal life.
            </p>
            <p>
              A timeless elegance rooted in the spirit of the Mediterranean — unhurried, radiant, and effortlessly beautiful. Every scarf is a piece of that light, made to be worn and felt.
            </p>
          </div>
        </div>
      </section>

      {/* Silk Section */}
      <section className="silk-section" id="silk">
        <div className="silk-content">
          <h2>Habotai Silk</h2>
          <p className="silk-description">
            Habotai silk is lightweight, with a taffeta weave, a soft touch,
            and a delicate natural sheen. Prized for centuries in Japanese
            textile traditions, its name translates to "soft as down."
          </p>
          <p className="silk-description">
            Fluid, breathable, and fresh against the skin — it drapes
            beautifully and catches the light with a subtle, luminous glow.
            A fabric that feels as gentle as it looks.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <h3>100% Silk</h3>
          <p>Pure habotai silk with a natural, luminous sheen. No blends, no compromises — just the finest fabric against your skin.</p>
        </div>
        <div className="feature">
          <h3>Made in Barcelona</h3>
          <p>Designed and crafted in the heart of the Mediterranean, inspired by the city's light, colour, and creative energy.</p>
        </div>
        <div className="feature">
          <h3>Lightweight &amp; Versatile</h3>
          <p>Fluid and breathable for every season. Wear it as a scarf, a wrap, a headpiece, or tied to your favourite bag.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-copy">&copy; 2026 Nausicaa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
