module.exports = function toReadable (number) {
  const strNumber = number.toString();
  let read = []

  /*basic digits*/

  for (n of strNumber) {
    switch (n) {
      case '1':
        read.push('one');
        break;
      case '2':
        read.push('two');
        break;
      case '3':
        read.push('three');
        break;
      case '4':
        read.push('four');
        break;
      case '5':
        read.push('five');
        break;
      case '6':
        read.push('six');
        break;
      case '7':
        read.push('seven');
        break;
      case '8':
        read.push('eight');
        break;
      case '9':
        read.push('nine');
        break;
      case '0':
        read.push('zero');
        break;
      default: 
        console.log('')
        break;
    }
  }

  /*for hundreds */

  if (read.length >= 3) {
    if (read[read.length-2] == 'zero') {
      read.splice(read.length-2, 1)
    }
    read.splice(1, 0, 'hundred')
  }

  if (read.length > 1) {

    /*for num 10-19*/

    if (read[read.length - 2] == 'one') {
      if (read[read.length - 1] == 'zero'){
        read.splice(read.length - 2, 2, 'ten');
      }
      else if (read[read.length - 1] == 'one'){
        read.splice(read.length - 2, 2, 'eleven');
      }
      else if (read[read.length - 1] == 'two'){
        read.splice(read.length - 2, 2, 'twelve');
      }
      else if (read[read.length - 1] == 'three'){
        read.splice(read.length - 2, 2, 'thirteen');
      }
      else if (read[read.length - 1] == 'five'){
        read.splice(read.length - 2, 2, 'fifteen');
      }
      else if (read[read.length - 1] == 'eight'){
        read.splice(read.length - 2, 2, 'eighteen');
      }
      else {read[read.length - 1] += 'teen'; read.splice(read.length - 2, 1)}
    }

    /*btwn 20-99*/

    switch (read[read.length - 2]) {
      case 'two':
        read.splice(read.length - 2, 1, 'twenty');
        break;
      case 'three':
        read.splice(read.length - 2, 1, 'thirty');
        break;
      case 'four':
        read.splice(read.length - 2, 1, 'forty');
        break;
      case 'five':
        read.splice(read.length - 2, 1, 'fifty');
        break;
      case 'six':
        read.splice(read.length - 2, 1, 'sixty');
        break;
      case 'seven':
        read.splice(read.length - 2, 1, 'seventy');
        break;
      case 'eight':
        read.splice(read.length - 2, 1, 'eighty');
        break;
      case 'nine':
        read.splice(read.length - 2, 1, 'ninety');
        break;
      case 'zero':
        read.splice(read.length - 2, 1, '');
        break;
    }

    /*for zero at the end*/

    if (read[read.length - 1] == 'zero') {
      read.splice(read.length - 1, 1)
    }
  }

  const readStr = read.join(' ');
  return readStr;
}