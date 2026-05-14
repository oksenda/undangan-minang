import { weddingDataV2 } from '../data/weddingV2';
import './Footer.css';

export function Footer() {
  const { pengantin, acara } = weddingDataV2;

  const formatFooterDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top-pattern"></div>

      <div className="footer-content">
        <div className="footer-couple">
          <h2 className="footer-names">
            <span>{pengantin.pria.namaPanggilan}</span>
            <span className="footer-ampersand">&amp;</span>
            <span>{pengantin.wanita.namaPanggilan}</span>
          </h2>
          <p className="footer-date">{formatFooterDate(acara.timeAkad)}</p>
        </div>

        <div className="footer-divider">
          <div className="divider-line"></div>
          <div className="divider-diamond"></div>
          <div className="divider-line"></div>
        </div>

        <div className="footer-greeting">
          <p className="greeting-text">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i dapat berkenan hadir dan memberikan do'a restu</p>
          <p className="footer-islamic-greeting">Wassalamu'alaikum Wr. Wb.</p>
        </div>

        <div className="footer-host">
          <p className="host-label">Kami yang berbahagia,</p>
          <p className="host-name">{pengantin.pria.namaPanggilan} & {pengantin.wanita.namaPanggilan}</p>
        </div>

        <div className="footer-invitees">
          <p className="invitees-label">Turut Mengundang:</p>
          <div className="invitees-list">
            {acara.femaleMembers.map((member, idx) => (
              <p key={`f-${idx}`}>{member}</p>
            ))}
            {acara.maleMembers.map((member, idx) => (
              <p key={`m-${idx}`}>{member}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom-pattern"></div>
    </footer>
  );
}
