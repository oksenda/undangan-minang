import { useState, useEffect } from 'react';
import { CONFIG } from '../config';
import './RSVP.css';

type RsvpEntry = { nama: string; kehadiran: string; ucapan: string };

const API_URL = CONFIG.rsvpUrl;

export function RSVP() {
  const [formData, setFormData] = useState({ nama: "Tamu Terhormat", kehadiran: "Hadir", ucapan: "" });
  const [comments, setComments] = useState<RsvpEntry[]>([]);
  const [allRsvp, setAllRsvp] = useState<RsvpEntry[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get guest name from URL parameter ?to=
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setFormData(prev => ({ ...prev, nama: to }));
    }
  }, []);

  const totalHadir = allRsvp.filter(c => c.kehadiran === "Hadir").length;
  const totalAbsen = allRsvp.filter(c => c.kehadiran === "Tidak Hadir").length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // POST to Google Apps Script
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
      });

      const newEntry: RsvpEntry = { ...formData };

      setAllRsvp(prev => [newEntry, ...prev]);

      if (newEntry.ucapan.trim() !== "") {
        setComments(prev => [newEntry, ...prev]);
      }

      alert("Terima Kasih! Konfirmasi dan doa restu Anda telah kami terima.");

      setFormData({ nama: "", kehadiran: "Hadir", ucapan: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal mengirim pesan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rsvp-section">
      <div className="rsvp-container">
        <h2 className="rsvp-title">Ucapan & Doa</h2>
        <p className="rsvp-subtitle">Berikan ucapan harapan dan do'a kepada kedua mempelai</p>

        <div className="rsvp-stats">
          <div className="stat-item">
            <span className="stat-number">{totalHadir}</span>
            <span className="stat-label">Hadir</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">{totalAbsen}</span>
            <span className="stat-label">Tidak Hadir</span>
          </div>
        </div>

        <div className="rsvp-form-section">
          <h3 className="rsvp-form-title">Konfirmasi Kehadiran</h3>
          <p className="rsvp-form-subtitle">Dengan segala kerendahan hati kami berharap kehadiran Bapak/Ibu/Saudara/i dalam acara pernikahan kami</p>

          <form onSubmit={handleSubmit} className="rsvp-form">
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap *</label>
              <input
                type="text"
                id="name"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                placeholder="Nama sesuai identitas"
                required
                minLength={2}
              />
            </div>

            <div className="form-group">
              <label>Konfirmasi Kehadiran *</label>
              <select
                value={formData.kehadiran}
                onChange={(e) => setFormData({ ...formData, kehadiran: e.target.value })}
                className="presence-select"
              >
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Ucapan & Doa</label>
              <textarea
                id="message"
                value={formData.ucapan}
                onChange={(e) => setFormData({ ...formData, ucapan: e.target.value })}
                placeholder="Tuliskan ucapan dan doa untuk kami..."
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`submit-button ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? 'Mengirim...' : 'Kirim Konfirmasi'}
            </button>
          </form>
        </div>

        <div className="guest-list">
          <h3 className="guest-list-title">Ucapan & Doa</h3>
          {comments.length === 0 ? (
            <p className="no-guests">Belum ada ucapan.</p>
          ) : (
            <>
              <div className="guests-scroll-container">
                <div className="guests-grid">
                  {comments.map((guest, index) => (
                    <div key={index} className="guest-card">
                      <div className="guest-header">
                        <span className="guest-name">{guest.nama}</span>
                        <span className={`guest-status ${guest.kehadiran === 'Hadir' ? 'hadir' : 'tidak_hadir'}`}>
                          {guest.kehadiran === 'Hadir' ? '✓ Hadir' : '✗ Tidak Hadir'}
                        </span>
                      </div>
                      {guest.ucapan && (
                        <p className="guest-message">"{guest.ucapan}"</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="scroll-indicator">
                <small>Scroll untuk melihat lebih banyak ↑</small>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
