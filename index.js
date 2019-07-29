const kabisat = tahun => {
  if (tahun % 4 === 0 && tahun % 100 !== 100) {
    return true;
  } else {
    return false;
  }
};

console.log(kabisat(2020));
