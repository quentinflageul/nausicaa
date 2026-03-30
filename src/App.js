import { useEffect, useState } from 'react';
import './App.css';
import englishFlag from './assets/english.png';
import illustration from './assets/illustration.png';
import logo from './assets/logo.png';
import silkImage from './assets/silk.png';
import spanishFlag from './assets/spanish.png';

const copy = {
  en: {
    nav: {
      collection: 'Collection',
      silk: 'The Silk',
      story: 'Our Story',
    },
    hero: {
      subtitle: 'Pure silk scarves, designed and handcrafted in Barcelona.',
      cta: 'Discover the Collection',
      imageAlt: 'Model wearing a Nausicaa silk scarf',
    },
    story: {
      title: 'Born Under the Sun',
      paragraphOne:
        'Each Nausicaa scarf carries the warmth of Mediterranean light, designed in Barcelona where the sun meets the sea. Our studio draws from golden afternoons, mosaic textures, and the graceful rhythm of coastal life.',
      paragraphTwo:
        'A timeless elegance rooted in the Mediterranean spirit: unhurried, radiant, and effortlessly beautiful. Every scarf is imagined to feel airy, refined, and natural from the first touch.',
    },
    silk: {
      title: 'Habotai Silk',
      paragraphOne:
        'Habotai silk is lightweight, with a taffeta weave, a soft touch, and a delicate natural sheen. Prized for centuries in Japanese textile traditions, its name translates to "soft as down."',
      paragraphTwo:
        'Fluid, breathable, and fresh against the skin, it drapes beautifully and catches the light with a subtle luminous glow. A fabric that feels as gentle as it looks.',
      imageAlt: 'Close-up of Nausicaa silk fabric',
    },
    features: {
      silk: {
        title: '100% Silk',
        body: 'Pure habotai silk with a natural, luminous sheen. No blends, no compromises, just the finest fabric against your skin.',
      },
      barcelona: {
        title: 'Made in Barcelona',
        body: 'Designed and crafted in the heart of the Mediterranean, inspired by the city\'s light, color, and creative energy.',
      },
      versatile: {
        title: 'Lightweight & Versatile',
        body: 'Fluid and breathable for every season. Wear it as a scarf, a wrap, a headpiece, or tied to your favorite bag.',
      },
    },
    footer: 'All rights reserved.',
    title: 'Nausicaa - Silk Scarves from Barcelona',
  },
  es: {
    nav: {
      collection: 'Coleccion',
      silk: 'La seda',
      story: 'Historia',
    },
    hero: {
      subtitle: 'Panuelos de seda pura, disenados y confeccionados en Barcelona.',
      cta: 'Descubrir la coleccion',
      imageAlt: 'Modelo con un panuelo de seda de Nausicaa',
    },
    story: {
      title: 'Bajo el Sol',
      paragraphOne:
        'Cada panuelo de Nausicaa recoge la calidez de la luz mediterranea. Se disena en Barcelona, donde el sol se encuentra con el mar, y nace de tardes doradas, mosaicos luminosos y un ritmo de vida sereno junto a la costa.',
      paragraphTwo:
        'Una elegancia atemporal, arraigada en el espiritu del Mediterraneo: serena, luminosa y natural. Cada panuelo esta pensado para sentirse ligero, refinado y delicado desde el primer contacto.',
    },
    silk: {
      title: 'Seda Habotai',
      paragraphOne:
        'La seda habotai es ligera, con ligamento tafetan, tacto suave y un delicado brillo natural. Apreciada durante siglos en la tradicion textil japonesa, su nombre suele asociarse a una suavidad ligera como el plumon.',
      paragraphTwo:
        'Fluida, transpirable y fresca sobre la piel, cae con elegancia y refleja la luz con un brillo sutil. Un tejido tan agradable al tacto como bello a la vista.',
      imageAlt: 'Primer plano del tejido de seda de Nausicaa',
    },
    features: {
      silk: {
        title: '100% Seda',
        body: 'Seda habotai pura con un brillo natural y luminoso. Sin mezclas ni concesiones: solo una materia noble y delicada sobre la piel.',
      },
      barcelona: {
        title: 'Hecho en Barcelona',
        body: 'Disenado y confeccionado en el corazon del Mediterraneo, inspirado por la luz, el color y la sensibilidad creativa de Barcelona.',
      },
      versatile: {
        title: 'Ligera y versatil',
        body: 'Fluida y transpirable durante todo el ano. Llevala al cuello, como chal, en el cabello o anudada a tu bolso favorito.',
      },
    },
    footer: 'Todos los derechos reservados.',
    title: 'Nausicaa - Panuelos de seda de Barcelona',
  },
};

function App() {
  const [language, setLanguage] = useState('en');
  const t = copy[language];
  const nextLanguage = language === 'en' ? 'es' : 'en';
  const currentLanguageFlag = language === 'en' ? englishFlag : spanishFlag;
  const currentLanguageLabel = language === 'en' ? 'EN' : 'ES';
  const nextLanguageLabel = nextLanguage === 'en' ? 'Switch to English' : 'Cambiar a espanol';

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.title;
  }, [language, t.title]);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="nav">
        <span className="nav-brand">Nausicaa</span>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#collection">{t.nav.collection}</a>
            <a href="#silk">{t.nav.silk}</a>
            <a href="#story">{t.nav.story}</a>
          </div>
          <div className="language-switcher" aria-label="Language selector">
            <button
              type="button"
              className="language-button"
              onClick={() => setLanguage(nextLanguage)}
              aria-label={nextLanguageLabel}
              title={nextLanguageLabel}
            >
              <img src={currentLanguageFlag} alt="" className="language-flag" />
              <span className="language-label is-active">{currentLanguageLabel}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">Nausicaa</h1>
            <p className="hero-subtitle">
              {t.hero.subtitle}
            </p>
            <a href="#collection" className="hero-cta">{t.hero.cta}</a>
          </div>
          <div className="hero-image-wrapper">
            <img src={illustration} alt={t.hero.imageAlt} className="hero-image" />
          </div>
        </div>
      </section>

      {/* Logo Panel — logo left 1/3, text right 2/3 */}
      <section className="logo-panel" id="story">
        <div className="logo-panel-inner">
          <div className="logo-panel-image">
            <img src={logo} alt="" />
          </div>
          <div className="logo-panel-text">
            <h2>{t.story.title}</h2>
            <p>{t.story.paragraphOne}</p>
            <p>{t.story.paragraphTwo}</p>
          </div>
        </div>
      </section>

      {/* Silk Section */}
      <section className="silk-section" id="silk">
        <div className="silk-panel-inner">
          <div className="silk-panel-text">
            <h2>{t.silk.title}</h2>
            <p className="silk-description">{t.silk.paragraphOne}</p>
            <p className="silk-description">{t.silk.paragraphTwo}</p>
          </div>
          <div className="silk-panel-image">
            <img src={silkImage} alt={t.silk.imageAlt} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="collection">
        <div className="feature">
          <h3>{t.features.silk.title}</h3>
          <p>{t.features.silk.body}</p>
        </div>
        <div className="feature">
          <h3>{t.features.barcelona.title}</h3>
          <p>{t.features.barcelona.body}</p>
        </div>
        <div className="feature">
          <h3>{t.features.versatile.title}</h3>
          <p>{t.features.versatile.body}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-copy">&copy; 2026 Nausicaa. {t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
