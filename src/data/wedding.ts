import type { WeddingData } from '../types';

export const weddingData: WeddingData = {
  bride: {
    name: 'Aziziah Salsabila Zahra',
    photo: '/assets/images/bride-placeholder.svg',
    parents: 'Putri Pertama Dari Bapak H. Jendri Wira & Ibu drg. Hj. Primadona',
    instagram: 'ziebeng_',
  },
  groom: {
    name: 'Ulwan Shidqy',
    photo: '/assets/images/groom-placeholder.svg',
    parents: 'Putra Kedua Dari Bapak H. Acep Lu\'lu Iddin, S.Sos. I, M.M & Ibu Hj. Dian Widianti, S.Pd.',
    instagram: 'ulwanshidqy',
  },
  weddingDate: new Date('2026-04-19T08:00:00'),
  events: [
    {
      type: 'akad',
      date: 'Minggu, 19 April 2026',
      time: '08.00 WIB - Selesai',
      location: 'Balai Sidang Bung Hatta Hotel Monopoli Bukittinggi Jl. Laras Datuak Bandaro, Bukittinggi',
      mapUrl: 'https://maps.app.goo.gl/N2YmbJ7i9sVzGW9x8',
    },
    {
      type: 'resepsi',
      date: 'Minggu, 19 April 2026',
      time: '11.00 - 17.00 WIB',
      location: 'Balai Sidang Bung Hatta Hotel Monopoli Bukittinggi Jl. Laras Datuak Bandaro, Bukittinggi',
      mapUrl: '#',
    },
  ],
  quote: {
    text: 'Dan Di Antara Tanda-Tanda (Kebesaran)-Nya Ialah Dia Menciptakan Pasangan-Pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia Menjadikan Di Antaramu Rasa Kasih Dan Sayang. Sesungguhnya Pada Yang Demikian Itu Benar-Benar Terdapat Tanda-Tanda (Kebesaran Allah) Bagi Kaum Yang Berpikir.',
    source: '(QS. Ar-Rum : 21)',
  },
  hostName: 'Zizi & Ulwan',
};
