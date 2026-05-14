import type { GiftCardProps, WeddingConfig } from '../types';

export const GIFT_ACCOUNTS: GiftCardProps[] = [
  {
    provider: "BCA",
    type: "BANK",
    accountNumber: "1234567890",
    owner: "Kiki Putra"
  },
  {
    provider: "Dana",
    type: "DANA",
    accountNumber: "081234567890",
    owner: "Nia Aprilia"
  },
  {
    provider: "OVO",
    type: "OVO",
    accountNumber: "081298765432",
    owner: "Nia Aprilia"
  }
];

export const CONFIG: WeddingConfig = {
  rsvpUrl: "https://script.google.com/macros/s/AKfycbzDEfQHcdvzP0jCghTeEofYoAlh4PEvXOSJusmEbs460SxNzFEdmtfUbCUWv3WgGAopHw/exec",
  guestPhotoUrl: "https://script.google.com/macros/s/AKfycbxql-Gitbyyu6mSekjuzwGOnW-gBTr738KMdQgDWEZBfUIZXj3-v4T5DPKLSYfEef-izA/exec",
  mapsEmbedUrl: "https://www.google.com/maps?q=0.1171486950210941,99.88443319856763&hl=id&z=17&output=embed",
  mapsDirectUrl: "https://www.google.com/maps?q=0.1171486950210941,99.88443319856763",
} as const;
