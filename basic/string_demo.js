
/*
1、字符串可以被视为字符数组，因此可以使用数组的方括号运算符，
用来返回某个位置的字符（位置编号从0开始）
2、如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回undefined
3、字符串为原始数据类型，内部的单个字符无法改变和增删，也无法直接使用数组的方法
*/

/*
一个字符串的示例，将字符串遍历，并考虑UTF-16字符集编码的情况，得到一个新的数组output存储字符串的每一个字符
*/
function getSymbols(string) {
  var length = string.length;
  var index = -1;
  var output = [];
  var character;
  var charCode;
  while (++index < length) {
    character = string.charAt(index);
    charCode = character.charCodeAt(0);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      output.push(character + string.charAt(++index));
    } else {
      output.push(character);
    }
  }
  return output;
}

var symbols = getSymbols('𝌆𝌆𝌆©©©©');

symbols.forEach(function(symbol) {
  console.log(symbol);
});
