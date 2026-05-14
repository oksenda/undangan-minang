
import { useEffect, useState } from 'react';
import { weddingDataV2 } from '../data/weddingV2';
import './WelcomeOverlay.css';

export function WelcomeOverlay({ onOpen }: { onOpen: () => void }) {
  const { pengantin } = weddingDataV2;
  const [guestName, setGuestName] = useState<string>('Tamu Terhormat');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setGuestName(to);
    }
  }, []);

  const handleOpen = () => {
    onOpen();
  };

  return (
    <div className="welcome-overlay">
      <div className="welcome-content">
        <div className="welcome-pattern welcome-pattern-top"></div>

        <div className="welcome-inner">
          <h1 className="welcome-title">Invitation</h1>

          {/* Salam sapaan - jika ada parameter ?to= nama maka tampilkan nama */}
          <div className="welcome-greeting">
            <p className="greeting-salam">Assalamu'alaikum warahmatullahi wabarakatuh</p>
            <p className="greeting-name">{guestName}</p>
          </div>

          {/* Rumah Gadang decoration using quote-bg image */}
          <div className="rumah-gadang-decoration"></div>

          <div className="welcome-couple">
            <div className="welcome-photo-wrapper">
              <img
                src={pengantin.pria.foto}
                alt={pengantin.pria.namaPanggilan}
                className="welcome-photo welcome-photo-bride"
              />
              <div className="photo-decorator"></div>
            </div>

            <span className="welcome-ampersand">&</span>

            <div className="welcome-photo-wrapper">
              <img
                src={pengantin.wanita.foto}
                alt={pengantin.wanita.namaPanggilan}
                className="welcome-photo welcome-photo-groom"
              />
              <div className="photo-decorator"></div>
            </div>
          </div>

          <h2 className="welcome-names">
            {pengantin.pria.namaPanggilan} & {pengantin.wanita.namaPanggilan}
          </h2>

          <p className="welcome-subtitle">Kami mempersembahkan undangan pernikahan kami</p>

          <button className="welcome-button" onClick={handleOpen}>
            <span>Buka Undangan</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div className="welcome-pattern welcome-pattern-bottom"></div>
      </div>
    </div>
  );
}
