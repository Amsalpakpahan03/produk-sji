import abonAyam from '~/assets/images/products/soji-abon-ayam.jpeg'
import abonSapi from '~/assets/images/products/soji-abon-sapi.jpeg'
import cintaBarista from '~/assets/images/products/cinta-barista-palm-sugar.jpeg'
import okUk from '~/assets/images/products/ok-uk-palm-sugar.jpeg'

export const company = {
  name: 'PT Suryamas Jaya Internasional',
  address: 'Kota Banjar, Indonesia',
  // Ganti dengan email resmi perusahaan
  email: 'pt.suryamas8@gmail.com',
}

export const certifications = ['Halal', 'HACCP', 'NKV', 'BPOM']

export const categories = [
  { key: 'all', label: 'Semua produk' },
  { key: 'abon', label: 'Abon Soji' },
  { key: 'gula', label: 'Gula aren bubuk' },
]

export const products = [
  {
    id: 'soji-abon-ayam',
    category: 'abon',
    name: 'Soji Abon Ayam',
    line: 'Merek sendiri',
    image: abonAyam,
    weight: '50 gram',
    summary:
      'Abon pertama di Indonesia dengan daging ayam kampung yang rasanya lebih gurih. Cocok untuk topping, isian roti, atau teman makan nasi.',
    ingredients:
      'Daging ayam kampung, gula aren dan gula stevia ber-IG rendah, bawang merah, bawang putih, minyak kelapa, rempah, garam.',
    tags: ['Tinggi protein', 'Tanpa pengawet', 'Tanpa penguat rasa'],
    accent: '#d62d3a',
  },
  {
    id: 'soji-abon-sapi',
    category: 'abon',
    name: 'Soji Abon Sapi',
    line: 'Merek sendiri',
    image: abonSapi,
    weight: '50 gram',
    summary:
      'Abon sapi dengan rasa gurih yang membuat momen makan lebih lahap dan bergizi. Bisa langsung dimakan atau dipakai sebagai topping dan filling roti.',
    ingredients:
      'Daging sapi, gula aren dan gula stevia ber-IG rendah, bawang merah, bawang putih, minyak kelapa, rempah, garam.',
    tags: ['Tinggi protein', 'Tanpa pengawet', 'Tanpa penguat rasa'],
    accent: '#1fa8d6',
  },
  {
    id: 'cinta-barista-palm-sugar',
    category: 'gula',
    name: 'Cinta Barista Powder Palm Sugar',
    line: 'Contoh private label',
    image: cintaBarista,
    weight: '1000 gram',
    summary:
      'Gula aren bubuk alami 100% yang dipakai barista profesional. Larut mudah di minuman panas maupun dingin.',
    ingredients: '100% gula aren.',
    tags: ['Premium quality', 'Halal', 'HACCP'],
    usage:
      'Tambahkan 10–30 g ke minuman, aduk rata. Untuk minuman dingin, masukkan es batu lalu aduk.',
    accent: '#8c2f2f',
  },
  {
    id: 'ok-uk-palm-sugar',
    category: 'gula',
    name: 'OK UK Powder Palm Sugar',
    line: 'Contoh private label',
    image: okUk,
    weight: '1000 gram',
    summary:
      'Gula aren bubuk alami dalam kemasan hitam-emas. Satu formula yang sama, tampil dengan identitas merek yang berbeda.',
    ingredients: '100% gula aren.',
    tags: ['Premium quality', 'Halal', 'HACCP'],
    usage:
      'Tambahkan 10–30 g ke minuman, aduk rata. Untuk minuman dingin, masukkan es batu lalu aduk.',
    accent: '#2b2b2f',
  },
]