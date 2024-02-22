// Game Tebak Angka
alert("Selamat Datang di Game Tebak Angka. \nAnda Mempuyai 4 kali Kesempatan");
var ulangi = true;
while (ulangi) {
  // Pilihan player
  var p = parseInt(prompt("Pilihlah angka 1 - 15."));

  // Pilihan random computer
  var comp = Math.round(Math.random() * 20) + 1;
  console.log(comp);

  // Rules Permainan
  var hasil = "";
  for (var kesempatan = 4; kesempatan >= 1; kesempatan--) {
    if (p == comp) {
      hasil = "pilihan anda benar";
      alert("Selamat " + hasil);
      break;
    } else if (p != comp && kesempatan > 1) {
      if (p > comp) {
        hasil = "pilihan anda terlalu besar";
        alert("Maaf karena " + hasil);
        p = parseInt(prompt("Silahkan masukkan angka lagi "));
      } else if (p < comp) {
        hasil = "pilihan anda terlalu kecil";
        alert("Maaf karena " + hasil);
        p = parseInt(prompt("Silahkan masukkan angka lagi "));
      } else {
        alert("Data yang anda masukkan salah");
        p = parseInt(prompt("Silahkan masukkan angka lagi "));
      }
    } else {
      hasil = "Maaf anda kehabisan kesempatan";
      alert(hasil);
    }
  }
  ulangi = confirm("Apakah anda ingin mencobanya lagi ???");
}
alert("Terima Kasih Sudah Mencoba");

// alert(
//   "Ini adalah permainan tebakan angka" + "\n" + " silahkan masukkan angka 1-10"
// );
// var pemain = parseInt(prompt("Masukkan angka anda"));

// // Membuat aturan permainan
// var computer = Math.round(Math.random() * 10) + 1;
// console.log(computer);

// // Aturan permainan
// var hasil = "";
// for (var kesempatan = 3; kesempatan >= 1; kesempatan--) {
//   if (pemain == computer) {
//     hasil = "pilihan anda benar";
//     alert("Selamat karena " + hasil);
//     break;
//   } else if (pemain != computer && kesempatan > 1) {
//     if (pemain > computer) {
//       hasil = "Pilihan anda terlalu besar";
//       alert("Maaf karena " + hasil);
//       pemain = parseInt(prompt("Masukkan lagi angka anda"));
//     } else if (pemain < computer) {
//       hasil = "Pilihan anda terlalu kecil";
//       alert("Maaf karena " + hasil);
//       pemain = parseInt(prompt("Masukkan lagi angka anda"));
//     } else {
//       alert("Anda salah memasukkan angka");
//       pemain = parseInt(prompt("Masukkan lagi angka anda"));
//     }
//   } else if (pemain != computer && kesempatan == 1) {
//     hasil = "Maaf anda kehabisan kesempatan";
//     alert(hasil);
//   }
// }
