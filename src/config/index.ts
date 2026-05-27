import type { GiftCardProps, WeddingConfig } from '../types';

export const GIFT_ACCOUNTS: GiftCardProps[] = [
    {
      provider: "BNI",
      type: "BANK",
      accountNumber: "1922868531",
      owner: "Nia Yabunaiya",
    },
    {
      provider: "BRI",
      type: "BANK",
      accountNumber: "542701023599530",
      owner: "Nia Yabunaiya",
    },
];

export const CONFIG: WeddingConfig = {
  rsvpUrl: "https://script.google.com/macros/s/AKfycbzDEfQHcdvzP0jCghTeEofYoAlh4PEvXOSJusmEbs460SxNzFEdmtfUbCUWv3WgGAopHw/exec",
  guestPhotoUrl: "https://script.google.com/macros/s/AKfycbxql-Gitbyyu6mSekjuzwGOnW-gBTr738KMdQgDWEZBfUIZXj3-v4T5DPKLSYfEef-izA/exec",
  mapsEmbedUrl: "https://www.google.com/maps?q=0.1171486950210941,99.88443319856763&hl=id&z=17&output=embed",
  mapsDirectUrl: "https://www.google.com/maps?q=0.1171486950210941,99.88443319856763",
} as const;
