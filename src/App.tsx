import { useEffect, useState, useCallback } from 'react';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { CoupleInfo } from './components/CoupleInfo';
import { QuoteSection } from './components/QuoteSection';
import { EventDetails } from './components/EventDetails';
import { RSVP } from './components/RSVP';
import { GiftSection } from './components/GiftSection';
import { Footer } from './components/Footer';
import { BackgroundMusic } from './components/BackgroundMusic';
import { WelcomeOverlay } from './components/WelcomeOverlay';
import { PatternBorder } from './components/PatternBorder';
import { GuestGreeting } from './components/GuestGreeting';
import './App.css';

function App() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);

  useEffect(() => {
    document.title = 'Kiki & Nia - Wedding Invitation';

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Lato:wght@300;400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleWelcomeOpen = useCallback(() => {
    setIsWelcomeOpen(false);
    setShouldPlayMusic(true);
  }, []);

  const handleMusicPlay = useCallback(() => {
    setShouldPlayMusic(false);
  }, []);

  return (
    <div className="app">
      <PatternBorder />
      {isWelcomeOpen && <WelcomeOverlay onOpen={handleWelcomeOpen} />}
      <GuestGreeting />
      <Hero />
      <Countdown />
      <CoupleInfo />
      <QuoteSection />
      <EventDetails />
      <RSVP />
      <GiftSection />
      <Footer />
      <BackgroundMusic shouldPlay={shouldPlayMusic} onPlay={handleMusicPlay} />
    </div>
  );
}

export default App;
