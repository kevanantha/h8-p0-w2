var nama = '';
var peran = '';

// Output untuk Input nama = '' dan peran = ''
if (nama === 'Mikael' && !peran) {
  // Output untuk Input nama = 'Mikael' dan peran = ''
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} else if (nama === 'Nina' && peran === 'Ksatria') {
  // Output untuk Input nama = 'Nina' dan peran 'Ksatria'
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (nama === 'Danu' && peran === 'Tabib') {
  // Output untuk Input nama = 'Danu' dan peran 'Tabib'
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`);
} else if (nama === 'Zero' && peran === 'Penyihir') {
  // Output untuk Input nama = 'Zero' dan peran 'Penyihir'
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  console.log(`Halo ${peran} ${nama}, ciptakan keajaiban untuk membantu kemenanganmu.`);
} else {
  console.log('Name harus diisi!');
}
