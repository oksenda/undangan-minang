import { useState } from 'react';
import { GiftCard } from './GiftCard';
import { GIFT_ACCOUNTS } from '../config';
import './GiftSection.css';

export function GiftSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      setCopied(accountNumber);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section className="gift-section">
      <div className="gift-container">
        <h2 className="gift-title">Kado & Hadiah</h2>
        <p className="gift-subtitle">
          Bagi yang ingin memberikan kado/hadiah, berikut adalah rekening/akun untuk kami:
        </p>
        
        <div className="gift-cards-grid">
          {GIFT_ACCOUNTS.map((gift, index) => (
            <GiftCard 
              key={index} 
              {...gift} 
              onCopy={handleCopy}
            />
          ))}
        </div>

        {copied && (
          <div className="copy-notification">
            Nomor akun berhasil disalin! ✅
          </div>
        )}
      </div>
    </section>
  );
}
