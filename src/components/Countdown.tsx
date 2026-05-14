import { useCountdown } from '../hooks/useCountdown';
import { weddingDataV2 } from '../data/weddingV2';
import './Countdown.css';

export function Countdown() {
  // Determine which date to count down to
  const targetType = weddingDataV2.countdownTarget || 'akad';
  const targetDate = new Date(
    targetType === 'akad' ? weddingDataV2.acara.timeAkad :
    targetType === 'resepsiPria' ? weddingDataV2.acara.timeResepsiPria :
    weddingDataV2.acara.timeResepsiWanita
  );

  const timeLeft = useCountdown(targetDate);

  const timeUnits = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <h2 className="countdown-title"></h2>
        <div className="countdown-grid">
          {timeUnits.map((unit, index) => (
            <div key={index} className="countdown-item">
              <div className="countdown-value">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="countdown-label">{unit.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
