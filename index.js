const persianDigits = (number) => {

  const PERSIAN_DIGITS = {
    '0': '۰',
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹'
  };

  let outputNumber = [];

  let digits = number.toString().split('');
  
  digits.forEach(digit => {
    
    outputNumber.push(PERSIAN_DIGITS[digit]);

  });

  return outputNumber.join('');

}

module.exports = persianDigits;