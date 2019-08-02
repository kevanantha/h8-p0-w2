function balikString(str) {
  var result = [];
  var strSplit = str.split('');
  for (var i = 0; i < str.length; i++) {
    result.push(strSplit.pop());
  }
  return result.join('');
}
console.log(balikString('hello world!'));

// =======================================================

function balikString(str) {
  var result = [];
  for (var i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join('');
}
console.log(balikString('hello world!'));
