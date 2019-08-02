var tanggal = 23;
var bulan = 5;
var tahun = 1997;

switch (true) {
  case tanggal > 0 && tanggal < 32:
    tanggal;
    break;
  default:
    tanggal = 'Invalid Tanggal';
    break;
}

switch (bulan) {
  case 1:
    bulan = 'Januari';
    break;
  case 2:
    bulan = 'Februari';
    break;
  case 3:
    bulan = 'Maret';
    break;
  case 4:
    bulan = 'April';
    break;
  case 5:
    bulan = 'Mei';
    break;
  case 6:
    bulan = 'Juni';
    break;
  case 7:
    bulan = 'Juli';
    break;
  case 8:
    bulan = 'Agustus';
    break;
  case 9:
    bulan = 'September';
    break;
  case 10:
    bulan = 'Oktober';
    break;
  case 11:
    bulan = 'November';
    break;
  case 12:
    bulan = 'Desember';
    break;
  default:
    bulan = 'Invalid Bulan';
    break;
}

switch (true) {
  case tahun >= 1900 && tahun <= 2200:
    tahun;
    break;
  default:
    tahun = 'Invalid Tahun';
    break;
}

console.log(`${tanggal} ${bulan} ${tahun}`);
