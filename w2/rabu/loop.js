// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var a = 2;
while (a <= 20) {
  console.log(a + ' - I love coding');
  a += 2;
}

console.log('LOOPING KEDUA');
var b = 20;
while (b >= 2) {
  console.log(b + ' - I will become fullstack developer');
  b -= 2;
}

// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for (var i = 1; i <= 20; i++) {
  console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');
for (var j = 20; j > 0; j--) {
  console.log(j + ' - I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap
for (var x = 1; x <= 100; x++) {
  if (x % 2 === 0) {
    console.log('GENAP');
  } else {
    console.log('GANJIL');
  }
}

for (var y = 1; y <= 100; y += 2) {
  if (y % 3 === 0) {
    console.log(y + ' KELIPATAN 3');
  } else {
    console.log('');
  }
}

for (var z = 1; z <= 100; z += 5) {
  if (z % 6 === 0) {
    console.log(z + ' KELIPATAN 6');
  } else {
    console.log('');
  }
}

for (var k = 1; k <= 100; k += 9) {
  if (k % 10 === 0) {
    console.log(k + ' KELIPATAN 10');
  } else {
    console.log('');
  }
}
