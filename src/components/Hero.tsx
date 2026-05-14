import { useEffect, useState } from 'react';
import { weddingDataV2 } from '../data/weddingV2';
import './Hero.css';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const { pengantin, acara } = weddingDataV2;

  // Format the main event date (Akad) for display
  const formatHeroDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`}>
      <div className="hero-pattern hero-pattern-top"></div>

      <div className="hero-content">
        <div className="hero-decoration">
          <img
            src="/assets/images/hero-animation.png"
            alt="Minangkabau decoration"
            className="hero-decoration-img"
          />
        </div>

        <h1 className="hero-title">maimbau baralek</h1>
        <div className="hero-couple">
          <span className="couple-name">{pengantin.pria.namaPanggilan}</span>
          <span className="couple-ampersand">&</span>
          <span className="couple-name">{pengantin.wanita.namaPanggilan}</span>
        </div>
        <div className="hero-date">
          <p>{formatHeroDate(acara.timeResepsiWanita)}</p>
        </div>
        <p className="hero-subtitle">Kami akan menikah, dan kami ingin Anda menjadi bagian dari hari istimewa kami!</p>
      </div>

      <div className="hero-pattern hero-pattern-bottom"></div>
    </section>
  );
}
