import { weddingDataV2 } from '../data/weddingV2';
import './CoupleInfo.css';

export function CoupleInfo() {
  const { pengantin } = weddingDataV2;

  return (
    <section className="couple-section">
      <div className="couple-wrapper">
        {/* Desktop divider */}
        <div className="couple-divider">
          <div className="divider-line"></div>
          <span className="divider-text">&</span>
          <div className="divider-line"></div>
        </div>

        <div className="couple-container">
          {/* Groom Card - First */}
          <div className="couple-card groom-card">
            <div className="couple-photo">
              <div className="photo-frame groom-frame">
                <img
                  src={pengantin.pria.foto}
                  alt={pengantin.pria.namaLengkap}
                  className="couple-photo-img"
                />
              </div>
            </div>
            <div className="couple-details">
              <h2 className="couple-fullname">{pengantin.pria.namaLengkap}</h2>
              <p className="couple-parents">
                Putra Pertama Dari <br />
                Bapak {pengantin.pria.ayah} & Ibu {pengantin.pria.ibu}
              </p>
            </div>
          </div>

          {/* Mobile divider */}
          <div className="couple-divider-mobile">
            <span className="divider-text">&</span>
          </div>

          {/* Bride Card - Second */}
          <div className="couple-card bride-card">
            <div className="couple-photo">
              <div className="photo-frame bride-frame">
                <img
                  src={pengantin.wanita.foto}
                  alt={pengantin.wanita.namaLengkap}
                  className="couple-photo-img"
                />
              </div>
            </div>
            <div className="couple-details">
              <h2 className="couple-fullname">{pengantin.wanita.namaLengkap}</h2>
              <p className="couple-parents">
                Putri Pertama Dari <br />
                Bapak {pengantin.wanita.ayah} & Ibu {pengantin.wanita.ibu}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
