function factorialIterative(num){
  var result = 1;
  for (var i = 2; i <= num; i++){
    result *= i;
  }
  return result;
}

function factorial(num){
  if (num === 0) {
    return 1;
  } else {
    num = num * factorial(num - 1);
  }
  return num;
}

function fib(num){
  if (num===0 || num===1){
    return 1;
  } else {
    num = fib(num-2) + fib(num-1);
  }
  return num;
}

function type(type){

  return Object.prototype.toString.call(type).slice(8,-1);

//// example from MND /////

// var toString = Object.prototype.toString;

// toString.call(new Date);    // [object Date]
// toString.call(new String);  // [object String]
// toString.call(Math);        // [object Math]

// // Since JavaScript 1.8.5
// toString.call(undefined);   // [object Undefined]
// toString.call(null);        // [object Null]


  // my solution:
  // switch(type) {
  //   case und:
  //    return "Undefined";
  //   case nll:
  //    return "Null";
  //   case bool:
  //    return "Boolean";
  //   case num:
  //    return "Number";
  //   case str:
  //    return "String";
  //   case fnc:
  //    return "Function";
  //   case arr:
  //    return "Array";
  //   case obj:
  //    return "Object";
  // }
}

function stringify(obj){

  toString.call(this,obj);

  if (type(obj)==='Undefined'|| type(obj) ==='Null'){
    return type(obj).toLowerCase();
  } else {
    return obj.toString();
  }
}


