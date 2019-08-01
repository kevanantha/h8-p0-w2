// const kabisat = tahun => {
//   if (tahun % 4 === 0 && tahun % 100 !== 100 && tahun % 400 === 0) {
//     console.log('asdf');
//     return true;
//   } else {
//     console.log('tai');
//     return false;
//   }
// };

// console.log(2100 % 4);
// console.log(2 % 100 !== 100);
// console.log(21 % 100);
// console.log(2100 % 140);
// console.log(kabisat(20));
// console.log(kabisat(2400));
// console.log(2000 % 100);

// var baju = 0;
// for (var baju = 0; baju < 20; baju++) {
//   console.log(baju);
//   // console.log((baju += i));
// }

// var baju = 0;
// while (baju < 20) {
//   baju++;
//   console.log(baju);
// }

// let siswa = 0;
// const panjang = false;
// const kukuSiswaYangDiPeriksa = true;

// while (siswa < 40) {
//   if (kukuSiswaYangDiPeriksa == panjang) {
//     console.log('hukum');
//   } else {
//     console.log('puji');
//   }
//   siswa++;
// }

var input = 5;

// 1.
// for (var i = 0; i < input; i++) {
//   console.log('*');
// }

// 2.
// for (var i = 0; i < 5; i++) {
//   console.log('*****');
//   // for (var j = i; j < 5; j++) {
//   //   console.log('******');
//   // }
// }

// 3.
// var a;
// for (var i = 0; i < 5; i++) {
//   for (var j = i; j < i; j++) {
//     a += '*';
//   }
//   console.log(a)
// }

// var x, y, chr;
// var a = 4;
// for (x = 1; x <= a; x++) {
//   for (y = 1; y < x; y++) {
//     chr = chr + '*';
//   }
//   console.log(chr);
//   chr = '';
// }

// var tanggal = 40;
// var bulan = 13;
// var tahun = 1997;

// switch (true) {
//   case tanggal > 0 && tanggal < 31:
//   case tahun > 1899 && tahun < 2201:
//     switch (bulan) {
//       case 1:
//         bulan = 'Januari';
//         break;
//       case 2:
//         bulan = 'Februari';
//         break;
//       case 3:
//         bulan = 'Maret';
//         break;
//       case 4:
//         bulan = 'April';
//         break;
//       case 5:
//         bulan = 'Mei';
//         break;
//       case 6:
//         bulan = 'Juni';
//         break;
//       case 7:
//         bulan = 'Juli';
//         break;
//       case 8:
//         bulan = 'Agustus';
//         break;
//       case 9:
//         bulan = 'September';
//         break;
//       case 10:
//         bulan = 'Oktober';
//         break;
//       case 11:
//         bulan = 'November';
//         break;
//       case 12:
//         bulan = 'Desember';
//         break;
//       default:
//         console.log('masukan masukkan data dengan benar, sebagai berikut:');
//         console.log('Tanggal (1 - 31), Bulan (1 - 12), Tahun (1900 - 2200)');
//     }
//     console.log(tanggal + ' ' + bulan + ' ' + tahun);
//     break;
//   default:
//     console.log('masukan masukkan data dengan benar, sebagai berikut:');
//     console.log('Tanggal (1 - 31), Bulan (1 - 12), Tahun (1900 - 2200)');
// }

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return;
  var prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {
    console.log(strs[i].indexOf(prefix));
    prefix;
    while (strs[i].indexOf(prefix) !== 0) {
      console.log(strs[i]);
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return;
    }
    prefix;
  }
  return prefix;
};

console.log(longestCommonPrefix(['leetcode', 'leetcw', 'leetsdf']));
