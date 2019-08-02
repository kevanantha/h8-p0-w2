function balikString(str) {
  var result = [];
  var strSplit = str.split('');
  for (var i = 0; i < str.length; i++) {
    result.push(strSplit.pop());
  }
  return result.join('');
}

console.log(balikString('hello world!'));
