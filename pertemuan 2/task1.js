//data karyawan 
// menggunakan Array
const karyawan = [
  { nama: "Farid Jermias", golongan: "A", status: "NIKAH" },
  { nama: "Syarif Bilontalo", golongan: "B", status: "BELUM" },
  { nama: "Loista Amanda", golongan: "C", status: "NIKAH" },
  { nama: "Dimas Wota", golongan: "B", status: "BELUM" },
  { nama: "Freya Jayawardana", golongan: "C", status: "NIKAH" },
  { nama: "Gita Sekar", golongan: "B", status: "BELUM" },
  { nama: "Gojo Satoru", golongan: "C", status: "NIKAH" },
  { nama: "Geto Suguru", golongan: "A", status: "BELUM" },
  { nama: "Ilyas Aziz", golongan: "A", status: "NIKAH" },
  { nama: "Reza Harahap", golongan: "A", status: "BELUM" }
];

//untuk menentukan besar gaji dari masing-masing karyawan 
// menggunakan kondisional
const getBesarGaji = (golongan) => {
  if (golongan === "A") {
    return 10000000;
  } else if (golongan === "B") {
    return 8000000;
  } else if (golongan === "C") {
    return 5000000;
  } else {
    return 0;
  }
};

//untuk menentukan besar tunjangan yang diterima karyawan 
// menggunakan kondisional
const getBesarTunjangan = (golongan, status) => {
  if (status === "NIKAH") {
    if (golongan === "A") {
      return 2000000;
    } else if (golongan === "B") {
      return 1500000;
    } else if (golongan === "C") {
      return 1000000;
    }
  }
  return 0;
};

//untuk menghitung besar gaji dan tunjangan beserta menampilkan datanya 
// menggunakan object
const hitungGaji = (karyawan) => {
  const gaji = getBesarGaji(karyawan.golongan);
  const tunjangan = getBesarTunjangan(karyawan.golongan, karyawan.status);
  const total = gaji + tunjangan;

  console.log("Nama: " + karyawan.nama);
  console.log("Golongan: " + karyawan.golongan);
  console.log("Status: " + karyawan.status);
  console.log("Gaji Pokok: Rp " + gaji.toLocaleString());
  console.log("Tunjangan: Rp " + tunjangan.toLocaleString());
  console.log("Total Gaji: Rp " + total.toLocaleString());
  console.log("==========================================");
};

//untuk menghitung total gajinya
karyawan.forEach(hitungGaji);
