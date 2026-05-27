import type { WeddingDataV2 } from '../types';

export const weddingDataV2: WeddingDataV2 = {
  pengantin: {
    pria: {
      namaLengkap: "Oksenda Fauzon Putra",
      namaPanggilan: "Kiki",
      foto: "/assets/images/groom-photo.jpg",
      foto2: "/assets/images/groom-photo.jpg",
      pas_foto: "/assets/images/groom-photo.jpg",
      ayah: "Faifil Misson",
      ibu: "Linda Wati"
    },
    wanita: {
      namaLengkap: "Nia Yabunaiya",
      namaPanggilan: "Nia",
      foto: "/assets/images/bride-photo.jpg",
      foto2: "/assets/images/bride-photo.jpg",
      pas_foto: "/assets/images/bride-photo.jpg",
      ayah: "Candra Gusra",
      ibu: "Darmawati"
    }
  },
  acara: {
    timeResepsiWanita: "2026-06-18T10:00:00",
    timeResepsiPria: "2026-06-20T10:00:00",
    timeAkad: "2026-06-17T14:00:00",
    maleMembers: [
      "Ayah: Faifil Misson",
      "Ibu: Linda Wati",
      "Adik: Salsabila Haifa Izlin"
    ],
    femaleMembers: [
      "Ayah: Candra Gusra",
      "Ibu: Darmawati",
      "Adik: Aina Nuur Adlina"
    ]
  },
  assets: {
    musikLatar: "/assets/sound03.mp3",
    galleryImages: [
      "/assets/images/bride-photo.jpg",
      "/assets/images/groom-photo.jpg",
      "/assets/images/bride-photo.jpg",
      "/assets/images/groom-photo.jpg",
      "/assets/images/hero-animation.png",
      "/assets/images/quote-bg.jpg"
    ],
    cardImages: [
      "/assets/images/bride-photo.jpg",
      "/assets/images/groom-photo.jpg"
    ]
  }
};

// Quote data (legacy - still used in QuoteSection)
export const weddingQuote = {
  text: "Dan Di Antara Tanda-Tanda (Kebesaran)-Nya Ialah Dia Menciptakan Pasangan-Pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia Menjadikan Di Antaramu Rasa Kasih Dan Sayang. Sesungguhnya Pada Yang Demikian Itu Benar-Benar Terdapat Tanda-Tanda (Kebesaran Allah) Bagi Kaum Yang Berpikir.",
  source: "(QS. Ar-Rum : 21)"
};
