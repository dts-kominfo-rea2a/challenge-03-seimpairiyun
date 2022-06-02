// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal

const listBelanjaan = () => {
  let list = [];

  dataBelanjaan.forEach((e) => {
    list.push(`- ${e.nama} x ${e.kuantitas}`);
  });

  return list;

  /* output listBelanjaan
  [
    '- Minyak Goreng Delima x 2',
    '- Beras Mamos x 1',
    '- Larutan Cap Kaki Empat x 8'
  ] 
  */
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = () => {
  let total = 0;
  dataBelanjaan.forEach((e) => {
    total += e.kuantitas * e.harga;
  });

  return total;
  // output dari totalBelanjaan ketika diinvoke
  // berupa angka
  // 158000
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
