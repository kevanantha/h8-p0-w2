function xo(str) {
  var o = 0;
  var x = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'o') {
      o++;
    } else if (str[i] == 'x') {
      x++;
    }
  }

  if (x === o) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
