function doubler(num){
  return num * 2;
}

function map(arr, doubler){
  for (var i = 0; i < arr.length; i++) {
    arr[i] = doubler(arr[i]);
  }
  return arr;
}

function filter(arr, callback){

  for (var i = 0; i < arr.length; i++) {
    if(!callback(arr[i])){
      arr.splice(i,1);
    }
  }
    return arr;
}

function contains(obj, target){
  for(var key in obj){
    if (obj.hasOwnProperty(key)) {
      if(obj[key]===target) {
        return true;
      }
    }
  }
  return false;
}

function countWords(sentence){

  var words = sentence.split(" ");
  return words.length;

}

function countWordsInReduce(currentVal, sentence){
  return currentVal + countWords(sentence);
}

function reduce(arr, startVal, callbackFunc){
  var returnVal = startVal;

  for (var i = 0; i < arr.length; i++) {
    returnVal = callbackFunc(returnVal, arr[i]);
  }
  return returnVal;
}

function add(a,b){
  return a+b;
}

function sum(arr){
  return reduce(arr,0,add);
}


function every(arr, checkerFunc){

  function everyIterator(currVal, nextVal){
    return currVal && checkerFunc(nextVal);
  }

  return reduce(arr, true, everyIterator);
}

function any(arr, checkerFunc){

  function everyIterator(currVal, nextVal){
    return currVal || checkerFunc(nextVal);
  }

  return reduce(arr,false,everyIterator);

}
