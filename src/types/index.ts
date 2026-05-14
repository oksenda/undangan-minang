export interface GiftCardProps {
  provider: string;
  type: "BANK" | "DANA" | "OVO" | "GOPAY" | "SHOPEEPAY";
  accountNumber: string;
  owner: string;
}

export interface WeddingConfig {
  rsvpUrl: string;
  guestPhotoUrl: string;
  mapsEmbedUrl: string;
  mapsDirectUrl: string;
}

export interface CoupleData {
  namaLengkap: string;
  namaPanggilan: string;
  foto: string;
  foto2?: string;
  pas_foto?: string;
  ayah: string;
  ibu: string;
}

export interface WeddingDataV2 {
  pengantin: {
    pria: CoupleData;
    wanita: CoupleData;
  };
  acara: {
    timeAkad: string;
    timeResepsiPria: string;
    timeResepsiWanita: string;
    maleMembers: string[];
    femaleMembers: string[];
  };
  assets: {
    musikLatar: string;
    galleryImages: string[];
    cardImages: string[];
  };
  // Optional field to indicate which date to count down to (defaults to timeAkad)
  countdownTarget?: 'akad' | 'resepsiPria' | 'resepsiWanita';
}

// Legacy types for backward compatibility
export interface WeddingCouple {
  name: string;
  photo: string;
  parents: string;
  instagram: string;
}

export interface Event {
  type: 'akad' | 'resepsi';
  date: string;
  time: string;
  location: string;
  mapUrl: string;
}

export interface Guest {
  name: string;
  status: 'hadir' | 'tidak_hadir';
  message?: string;
}

export interface WeddingData {
  bride: WeddingCouple;
  groom: WeddingCouple;
  weddingDate: Date;
  events: Event[];
  quote: {
    text: string;
    source: string;
  };
  hostName: string;
}
