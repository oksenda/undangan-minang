import type { GiftCardProps } from '../types';
import './GiftCard.css';

interface GiftCardPropsExtended extends GiftCardProps {
  onCopy: (accountNumber: string) => void;
}

export function GiftCard({ provider, type, accountNumber, owner, onCopy }: GiftCardPropsExtended) {
  const getCardStyle = () => {
    const baseStyle = {
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      borderColor: '#d4af37'
    };

    // Brand-specific gradient accents
    switch (provider.toLowerCase()) {
      case 'bca':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1e588f 100%)'
        };
      case 'dana':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #4154f2 0%, #5b6cf5 50%, #7c3aed 100%)'
        };
      case 'ovo':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #6d3199 0%, #8b5cf6 50%, #a855f7 100%)'
        };
      case 'gopay':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #00a651 0%, #10b981 50%, #34d399 100%)'
        };
      case 'shoppepay':
        return {
          ...baseStyle,
          background: 'linear-gradient(135deg, #ee4d2d 0%, #ff6b35 50%, #f97316 100%)'
        };
      default:
        return baseStyle;
    }
  };

  const formatAccountNumber = (num: string) => {
    if (type === 'BANK') {
      // Format bank account number with spaces every 4 digits
      return num.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
    }
    return num;
  };

  return (
    <div
      className="gift-card"
      style={getCardStyle()}
    >
      <div className="gift-card-chip">
        <svg viewBox="0 0 60 40" fill="none">
          <rect x="0" y="0" width="60" height="40" rx="8" fill="url(#chipGradient)" />
          <line x1="0" y1="10" x2="60" y2="10" stroke="#d4af37" strokeWidth="2" />
          <line x1="0" y1="20" x2="60" y2="20" stroke="#d4af37" strokeWidth="2" />
          <line x1="0" y1="30" x2="60" y2="30" stroke="#d4af37" strokeWidth="2" />
          <line x1="15" y1="0" x2="15" y2="40" stroke="#d4af37" strokeWidth="2" />
          <line x1="30" y1="0" x2="30" y2="40" stroke="#d4af37" strokeWidth="2" />
          <line x1="45" y1="0" x2="45" y2="40" stroke="#d4af37" strokeWidth="2" />
          <defs>
            <linearGradient id="chipGradient" x1="0" y1="0" x2="60" y2="40">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#8b6914" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="gift-card-provider-badge">
        <span>{provider}</span>
        <span className="gift-card-type-label">{type}</span>
      </div>

      <div className="gift-card-number">
        {formatAccountNumber(accountNumber)}
      </div>

      <div className="gift-card-footer">
        <div className="gift-card-holder">
          <span className="label">Atas Nama</span>
          <span className="name">{owner}</span>
        </div>
        <div className="gift-card-logo">
          <svg viewBox="0 0 60 30" fill="none">
            <circle cx="15" cy="15" r="14" stroke="#d4af37" strokeWidth="2" />
            <circle cx="45" cy="15" r="14" stroke="#d4af37" strokeWidth="2" />
            <text x="15" y="19" textAnchor="middle" fill="#d4af37" fontSize="10">VISA</text>
            <text x="45" y="19" textAnchor="middle" fill="#d4af37" fontSize="8">MC</text>
          </svg>
        </div>
      </div>

      <button
        className="gift-card-copy-btn"
        onClick={() => onCopy(accountNumber)}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        Salin
      </button>
    </div>
  );
}
