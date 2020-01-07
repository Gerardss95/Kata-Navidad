# KatasDelivery
## Numbers to Letters
```javascript
function switcher(x){
    const alphabet={1:'z',2:'y',3:'x',4:'w',5:'v',6:'u',7:'t',8:'s',9:'r',10:'q',
  11:'p',12:'o',13:'n',14:'m',15:'l',16:'k',17:'j',18:'i',19:'h',20:'g',
  21:'f',22:'e',23:'d',24:'c',25:'b',26:'a',27:'!',28:'?',29:' '}
     return x.map(function swapper(y){
     return alphabet[y*1]}).join('');
  }
```
## Remove First and Last character
```javascript
function removeChar(str){
   let removedStr = str.slice(1, -1); 
   return str = removedStr;
   };
   
```
## Vowel Count
```javascript
function getCount(str) {
    let vowelsCount = 0;
    return vowelsCount = str.replace(/[^aeiou]/ig, '').length; 
   }
```
## Train: sum amixed array
```javascript
function sumMix(x){
    let int = []
    for(i = 0; i < x.length; i++){
      int.push (parseInt (x[i], 10));
    }
  return int.reduce(function(a,b){return a + b });
  }
```
## Count of positives/ sum of negatives
```javascript

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
```
## Get the mean Array
```javascript
 function getAverage(marks){
     let sum = marks.reduce(function(a,b){
          return a + b;
   })
   let average = sum / marks.length
   return Math.floor(average)
     
  }
```
## Find numbers which are divisible by given number
```javascript
 function divisibleBy(numbers, divisor){
    return numbers.filter(function(num){ 
       return num % divisor === 0;
     });
   }
```
## List filtering
```javascript
function filter_list(l) {
    return l.filter(function(i){
    if (parseInt(i) === i){
  return l;  
    }
    })
  }
```
## Train: Credit card Mask
```javascript
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
```

```javascript 
//kata 9 realizad de otra forma 
 function maskify(cc){
        return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
    }
    
```
## Flatten
```javascript

```
## Square every digit
```javascript
function squareDigits(num){
        // may the code be with you
        return Number(('' + num).split('').map(function(value) {
            return value*value;
        }).join(''));
    }
    
```
