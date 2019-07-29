const kabisat = tahun => {
  if (tahun % 4 === 0 && tahun % 100 !== 0) {
    return true;
  } else {
    return false;
  }
};

// var baju = 0;
// for (var baju = 0; baju < 20; baju++) {
//   console.log(baju);
//   // console.log((baju += i));
// }

var baju = 0;
while (baju < 20) {
  baju += 1;
}

console.log(baju);
