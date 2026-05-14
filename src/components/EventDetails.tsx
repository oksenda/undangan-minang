import { weddingDataV2 } from '../data/weddingV2';
import { CONFIG } from '../config';
import './EventDetails.css';

// Location name from Google Maps for the given coordinates
const LOCATION_NAME = "Aua Kuniang, Kabupaten Pasaman Barat, Sumatera Barat";

export function EventDetails() {
  const { acara } = weddingDataV2;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Jakarta'
    });
  };

  const events = [
    {
      type: 'akad' as const,
      date: formatDate(acara.timeAkad),
      time: `${formatTime(acara.timeAkad)} WIB`,
      location: LOCATION_NAME,
      mapUrl: CONFIG.mapsDirectUrl,
      embedUrl: CONFIG.mapsEmbedUrl
    },
    {
      type: 'resepsiWanita' as const,
      date: formatDate(acara.timeResepsiWanita),
      time: '10.00 - 17.00 WIB',
      location: LOCATION_NAME,
      mapUrl: CONFIG.mapsDirectUrl,
      embedUrl: CONFIG.mapsEmbedUrl
    }
    // Resepsi Pria di-hidden sesuai permintaan
  ];

  return (
    <section className="events-section">
      <div className="events-container">
        <h2 className="events-title">Save The Date</h2>

        <div className="events-header">
          <div className="event-badge">
            Dengan segala kerendahan hati kami berharap kehadiran kehadiran Bapak/Ibu/Saudara/i dalam acara pernikahan anak kami yang akan diselenggarakan pada :
          </div>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className={`event-card ${event.type === 'akad' ? 'event-card-akad' : ''}`}>
              <div className="event-type">
                {event.type === 'akad' ? 'Akad Nikah' :
                 event.type === 'resepsiWanita' ? 'Resepsi Wanita' :
                 'Resepsi Pria'}
              </div>

              <div className="event-date">{event.date}</div>

              <div className="event-time">
                {event.time}
              </div>

              <div className="event-location">
                <p>{event.location}</p>
              </div>

              <div className="map-embed">
                <iframe
                  src={event.embedUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi acara"
                />
              </div>

              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                Buka di Google Maps
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
