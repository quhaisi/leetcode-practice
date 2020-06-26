/**
 * @param {number} num
 * @return {string}
 */
var intToRomanMap = [
  {
    '1': 'I',
    '5': 'V',
    '10': 'X'
  },
  {
    '1': 'X',
    '5': 'L',
    '10': 'C'
  },
  {
    '1': 'C',
    '5': 'D',
    '10': 'M'
  },
  {
    '1': 'M'
  }
]
function generateStr(num, index) {
  var str = ''
  switch(num) {
    case 1:
      str = intToRomanMap[index]['1']
      break;
    case 2:
      str = intToRomanMap[index]['1']+intToRomanMap[index]['1']
      break;
    case 3:
      str = intToRomanMap[index]['1']+intToRomanMap[index]['1']+intToRomanMap[index]['1']
      break;
    case 4:
      str = intToRomanMap[index]['1']+intToRomanMap[index]['5']
      break;
    case 5:
      str = intToRomanMap[index]['5']
      break;
    case 6:
      str = intToRomanMap[index]['5']+intToRomanMap[index]['1']
      break;
    case 7:
      str = intToRomanMap[index]['5']+intToRomanMap[index]['1']+intToRomanMap[index]['1']
      break;
    case 8:
      str = intToRomanMap[index]['5']+intToRomanMap[index]['1']+intToRomanMap[index]['1']+intToRomanMap[index]['1']
      break;
    case 9:
      str = intToRomanMap[index]['1']+intToRomanMap[index]['10']
      break;
  }
  return str;
}
var intToRoman = function(num) {
  var index = 0;
  var str = '';
  while(num > 0) {
    str = generateStr(num%10, index) + str
    num = parseInt(num/10)
    index++
  }
  return str
};

module.exports = intToRoman