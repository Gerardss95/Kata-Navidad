// kata 1
function switcher(x){
    const alphabet={1:'z',2:'y',3:'x',4:'w',5:'v',6:'u',7:'t',8:'s',9:'r',10:'q',
  11:'p',12:'o',13:'n',14:'m',15:'l',16:'k',17:'j',18:'i',19:'h',20:'g',
  21:'f',22:'e',23:'d',24:'c',25:'b',26:'a',27:'!',28:'?',29:' '}
     return x.map(function swapper(y){
     return alphabet[y*1]}).join('');
  }

  //kata 2
  function removeChar(str){
    //You got this!
   let removedStr = str.slice(1, -1); // me he dado cuenta despues que podia solo hacer un return str = str.slice(1, -1); sin crear el let removedStr.
   return str = removedStr;
   };
   
// kata 3

function getCount(str) {
    let vowelsCount = 0;
    return vowelsCount = str.replace(/[^aeiou]/ig, '').length; // he usado replace porque he pensado que la mejor manera seria eliminando todo lo que no sea vocal y contar lo que queda con .length
   }


// kata 4

function sumMix(x){
    let int = []
    for(i = 0; i < x.length; i++){
      int.push (parseInt (x[i], 10));
    }
  return int.reduce(function(a,b){return a + b });
  }
  
  //Kata 5

  function countPositivesSumNegatives(input) {
    let positiveNum = [];
    let negativeNum = [];
    if (input == null || input.length < 1){
        return [];
    }
   for(i = 0; i < input.length; i++){
        if(input[i] > 0 ){
  positiveNum.push(input[i]);
        }else{
         negativeNum.push(input[i]);
        }
      }
  let countPositiveNum = positiveNum.length;
   
  let sumNegativeNum = negativeNum.reduce(function(a,b){
  return a + b },0);
  
  let result = [];
  result.push(countPositiveNum, sumNegativeNum);
  return result;
  }

  // kata 6 
  function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
     let sum = marks.reduce(function(a,b){
          return a + b;
   })
   let average = sum / marks.length
   return Math.floor(average)
     
  }

  //kata 7
  function divisibleBy(numbers, divisor){
    return numbers.filter(function(num){ // he encontrado el .filters en mdn y me ha parecido bien usarlo en esta kata.
       return num % divisor === 0;
     });
   }
    
   //kata 8
   function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(function(i){
    if (parseInt(i) === i){
  return l;  
    }
    })
  }
  //kata 9     
  function maskify(cc) {
    var masked = '';
      for(let i = 0; i < cc.length - 4; i++) {
        masked += "#";
      }
        for(let i = 4; i >= 1; i--) {
          let char = cc.charAt(cc.length - i);
          let endNums = char;
          masked += endNums;
      }
      return masked;
    }
    // kata 9 otra manera que he hecho  con slice y replace que me ha gustado mucho tambien

    function maskify(cc){
        return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
    }
    
    // kata 10



    //kata 11
    function squareDigits(num){
        // may the code be with you
        return Number(('' + num).split('').map(function(value) {
            return value*value;
        }).join(''));
    }
    
    
    