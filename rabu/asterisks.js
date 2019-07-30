// 1. Menyusun Barisan Bintang
var row1 = 5;
for (var a = 0; a < row1; a++) {
  console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var row2 = 5;

for (var i = 0; i < row2; i++) {
  var x = '';
  for (var j = 0; j < row2; j++) {
    x += '*';
  }
  console.log(x);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 = 5;
var z = '';

for (var i = 1; i <= row3; i++) {
  for (var j = 0; j < i; j++) {
    z += '*';
  }
  console.log(z);
  z = '';
}
