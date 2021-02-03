function toReadable (number) {
  const numToString = number.toString();
  const lengthStr = numToString.length;

  const units = {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',   
            4: 'four',   
            5: 'five',   
            6: 'six',   
            7: 'seven',   
            8: 'eight',   
            9: 'nine',   
            11: 'eleven',   
            12: 'twelve',   
            13: 'thirteen',   
            14: 'fourteen',   
            15: 'fifteen',   
            16: 'sixteen',   
            17: 'seventeen',   
            18: 'eighteen',   
            19: 'nineteen',   
  }

  const twenty = {
            2: 'twenty',
            3: 'thirty',
            4: 'forty',
            5: 'fifty',              
            6: 'sixty',              
            7: 'seventy',              
            8: 'eighty',              
            9: 'ninety',              
  }

  if (lengthStr == 1){       
    return units[numToString];
  }

  if(lengthStr == 2){
    if(numToString[0] == 1){
      return units[numToString];
    }else{
      if(numToString[1]!=0){
        return `${twenty[numToString[0]]} ${units[numToString[1]]}`;
      }
      else{
        return twenty[numToString[0]];
      }      
    }
  }

  if(lengthStr == 3){
    if(numToString[2] != 0){
      return `${units[numToString[0]]} hundred ${twenty[numToString[1]]} ${units[numToString[2]]}`;
    }else{
      return `${units[numToString[0]]} hundred ${twenty[numToString[1]]}`;
    }
    
  }

  
}


console.log(toReadable(448));