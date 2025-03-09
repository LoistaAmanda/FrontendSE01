import users from "./data.mjs";


// Menampilkan data users
const index = () => {
  console.log("Daftar Data Users:");
  users.forEach((user, index) => {
    console.log(`${index + 1}. Nama: ${user.nama}, Age: ${user.age}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

// Menambah data users
const store = (nama, age, alamat, email) => {
  users.push({ nama, age, alamat, email });
  console.log(`Data ${nama} berhasil ditambahkan`);
};

// Menghapus data 
const destroy = (nama) => {
  const index = users.findIndex(user => user.nama === nama);
  if (index !== -1) {
    users.splice(index, 1);
    console.log(`Data ${nama} berhasil dihapus`);
  } else {
    console.log(`Data ${nama} tidak ditemukan`);
  }
};

export { index, store, destroy };
