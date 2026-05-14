import { useEffect, useState } from 'react';
import './GuestGreeting.css';

export function GuestGreeting() {
  const [guestName, setGuestName] = useState<string>('Tamu Terhormat');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setGuestName(to);
    }
  }, []);

  return (
    <div className="guest-greeting">
      <div className="greeting-content">
        <p className="greeting-text">
          <span className="greeting-salam">Assalamu'alaikum warahmatullahi wabarakatuh</span>
          <span className="greeting-address">{guestName}</span>
        </p>
      </div>
    </div>
  );
}
