export function romanize(num) {
  var tempArr = num.split('');
  var numArr = tempArr.map(number => parseInt(number)).reverse();
  var roman = '';
  if (parseInt(num) >= 4000) {
    roman = "no roman numerals for numbers this big".split('').reverse().join('')
  } else {
    numArr.forEach((number, i) => {
      if (i === 0) {

        if (number <= 3) {
          roman += "I".repeat(number)
        } else if (number >= 6 && number <= 8) {
          roman += ("V" + "I".repeat(number - 5)).split('').reverse().join('')
        } else if (number === 5) {
          roman += 'V'
        } else if (number === 4) {
          roman += 'VI'
        } else if (number === 9) {
          roman += 'XI'
        }

      } else if (i === 1) {

        if (number <= 3) {
          roman += "X".repeat(number)
        } else if (number >= 6 && number <= 8) {
          roman += ("L" + "X".repeat(number - 5)).split('').reverse().join('')
        } else if (number === 5) {
          roman += 'L'
        } else if (number === 4) {
          roman += 'LX'
        } else if (number === 9) {
          roman += 'CX'
        }
      } else if (i === 2) {
        if (number <= 3) {
          roman += "C".repeat(number)
        } else if (number >= 6 && number <= 8) {
          roman += ("L" + "C".repeat(number - 5)).split('').reverse().join('')
        } else if (number === 5) {
          roman += 'D'
        } else if (number === 4) {
          roman += 'DC'
        } else if (number === 9) {
          roman += 'MC'
        }
      } else if (i === 3 && number <= 3) {
        roman += "M".repeat(number)
      }
    });

  }
  return roman.split('').reverse().join('');
}

